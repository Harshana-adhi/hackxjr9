// Shifts blue-hued pixels toward the new hackX Jr teal accent (~H190) in place.
// Only touches hero/card/creative assets — OC and Memories folders are skipped.
// Run:    node scripts/shift-blue-to-teal.mjs
// Undo:   node scripts/shift-blue-to-teal.mjs --restore

import sharp from "sharp";
import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");

const TARGETS = [
  "Hero - BG Img.webp",
  "Hero Front Layer New.webp",
  "FAQ Image.webp",
  "Sri Lankan Map.webp",
  "footer circle.png",
  "footer-center.webp",
  "footer-side.webp",
  "timeline mountain.webp",
  "criteria-images/icon-1.webp",
  "criteria-images/icon-2.webp",
  "criteria-images/icon-3.webp",
  "section 2/Bottom Center.webp",
  "section 2/Top Right.webp",
  "section 2/Top left.webp",
  "timeline-bgs/Finals.webp",
  "timeline-bgs/Proposal Submission.webp",
  "timeline-bgs/Semi FInals.webp",
  "timeline-bgs/Workshops.webp",
  "timeline-bgs/registration.webp",
  "winner-cards/1.webp",
  "winner-cards/2.webp",
  "winner-cards/3.webp",
  "horizontal timeline/2.webp",
  "horizontal timeline/3.webp",
];

// Old blue accent sat around H~217-221deg; new teal palette sits around H~188-193deg.
const SOURCE_HUE_CENTER = 222;
const SOURCE_HUE_SPREAD = 40; // pixels within +/-40deg of center are affected
const HUE_SHIFT = -30; // degrees to rotate toward teal
const MIN_SATURATION = 0.12; // ignore near-grey pixels (avoids touching skin/neutral tones)

function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const s = max === 0 ? 0 : d / max;
  const v = max;
  return [h, s, v];
}

function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ];
}

function hueDelta(h, center) {
  let d = h - center;
  d = ((d + 180) % 360 + 360) % 360 - 180;
  return d;
}

async function processFile(relPath) {
  const filePath = path.join(PUBLIC_DIR, relPath);
  const backupPath = filePath + ".orig";

  if (!fs.existsSync(filePath)) {
    console.warn(`skip (missing): ${relPath}`);
    return;
  }
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filePath, backupPath);
  }

  const img = sharp(backupPath);
  const { data, info } = await img
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const [h, s, v] = rgbToHsv(r, g, b);
    if (s < MIN_SATURATION) continue;

    const delta = hueDelta(h, SOURCE_HUE_CENTER);
    if (Math.abs(delta) > SOURCE_HUE_SPREAD) continue;

    // triangular falloff: full strength at center, 0 at the edge of the range
    const weight = 1 - Math.abs(delta) / SOURCE_HUE_SPREAD;
    let newHue = h + HUE_SHIFT * weight;
    newHue = ((newHue % 360) + 360) % 360;

    const [nr, ng, nb] = hsvToRgb(newHue, s, v);
    data[i] = nr;
    data[i + 1] = ng;
    data[i + 2] = nb;
  }

  await sharp(data, { raw: { width, height, channels } })
    .toFormat(path.extname(filePath).slice(1) === "png" ? "png" : "webp")
    .toFile(filePath);

  console.log(`updated: ${relPath}`);
}

async function restoreFile(relPath) {
  const filePath = path.join(PUBLIC_DIR, relPath);
  const backupPath = filePath + ".orig";
  if (fs.existsSync(backupPath)) {
    fs.copyFileSync(backupPath, filePath);
    console.log(`restored: ${relPath}`);
  }
}

async function main() {
  const restore = process.argv.includes("--restore");
  for (const rel of TARGETS) {
    if (restore) await restoreFile(rel);
    else await processFile(rel);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
