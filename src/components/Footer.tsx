"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    /*
      The footer is intentionally tall (min-height 680px) and uses overflow:hidden.
      All decorative images sit INSIDE these bounds — no overflow tricks needed.
      The statue is centered and sized to show its full height within the footer.
      Layer order (z-index):
        0 → Rotating glow circle  (deepest background)
        1 → Side pillars
        2 → Single gradient veil  (left/right fade + top blend)
        3 → Text content
        4 → Center statue         (topmost)
    */
    <footer
      className="w-full relative overflow-hidden"
      style={{ background: "#010E13", minHeight: "680px" }}
    >
      {/* Top blend — merges seamlessly with the section above */}
      <div
        className="absolute top-0 inset-x-0 h-48 pointer-events-none"
        style={{
          zIndex: 6,
          background: "linear-gradient(to bottom, #010E13 0%, transparent 100%)"
        }}
      />

      {/* ── LAYER 0: Rotating glow circle ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] translate-y-1/2"
          style={{ opacity: 0.3 }}
        >
          <div className="footer-circle-spin relative w-full h-full">
            <Image
              src="/footer circle.png"
              alt=""
              fill
              style={{
                objectFit: "contain",
                filter:
                  "brightness(0) saturate(100%) invert(80%) sepia(21%) saturate(1450%) hue-rotate(155deg) brightness(101%) contrast(97%) drop-shadow(0 0 40px #72E5F8) drop-shadow(0 0 80px rgba(114,229,248,0.4))"
              }}
            />
          </div>
        </div>
      </div>

      {/* ── LAYER 1: Side pillars ── */}
      {/* Left */}
      <div
        className="hidden lg:block absolute bottom-0 left-0 w-[400px] h-[420px] pointer-events-none overflow-hidden"
        style={{ zIndex: 1, opacity: 0.95 }}
      >
        <div className="relative w-full h-full translate-y-16">
          <Image
            src="/footer-side.webp"
            alt=""
            fill
            sizes="400px"
            style={{ objectFit: "contain", objectPosition: "bottom left" }}
          />
        </div>
      </div>

      {/* Right */}
      <div
        className="hidden lg:block absolute bottom-0 right-0 w-[400px] h-[420px] pointer-events-none overflow-hidden"
        style={{ zIndex: 1, opacity: 0.95 }}
      >
        <div className="relative w-full h-full translate-y-16">
          <Image
            src="/footer-side.webp"
            alt=""
            fill
            sizes="400px"
            style={{ objectFit: "contain", objectPosition: "bottom right", transform: "scaleX(-1)" }}
          />
        </div>
      </div>

      {/* ── LAYER 2: Horizontal gradient veil (Desktop only) ── */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to right, #010E13 5%, transparent 28%, transparent 72%, #010E13 95%)"
        }}
      />

      {/* ── LAYER 3: Center statue ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none w-[520px] h-[610px] md:w-[560px] md:h-[660px]"
        style={{ zIndex: 3 }}
      >
        <Image
          src="/footer-center.webp"
          alt=""
          fill
          sizes="(max-width: 768px) 520px, 560px"
          className="object-contain object-bottom"
        />
        {/* Subtle bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-12"
          style={{ background: "linear-gradient(to top, #010E13, transparent)" }}
        />
      </div>

      {/* ── LAYER 4: Mobile Vertical Gradient Veil (Ensures readability of text over statue) ── */}
      <div
        className="block md:hidden absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background: "radial-gradient(circle at bottom, rgba(1, 14, 19, 0.95) 0%, rgba(1, 14, 19, 0.8) 45%, rgba(1, 14, 19, 0.3) 70%, transparent 100%)"
        }}
      />

      {/* ── LAYER 5: Text & logos ── */}
      <div
        className="absolute bottom-0 inset-x-0 pb-8 px-6 md:px-8 lg:px-12"
        style={{ zIndex: 5 }}
      >
        {/* Responsive layout: stacked on mobile, 2 columns on desktop */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mb-8 text-center md:text-left">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="w-fit">
              <div className="relative" style={{ width: "130px", height: "40px" }}>
                <Image
                  src="/hackX Jr 9.0 logo.webp"
                  alt="hackX Jr. Logo"
                  fill
                  sizes="130px"
                  className="object-contain object-center md:object-left"
                />
              </div>
            </Link>
            <p className="text-white/55 text-sm font-light max-w-[320px] md:max-w-[240px] leading-relaxed text-center md:text-left">
              Sri Lanka&apos;s premier school innovation challenge empowering the next generation of innovators and problem-solvers.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-white/55 text-sm font-light max-w-[320px] md:max-w-[280px] leading-relaxed text-center md:text-right">
              Organized by the Industrial Management Science Students’ Association (IMSSA), University of Kelaniya, hackX Jr. provides a national platform for school students to develop innovative ideas, receive expert mentorship, and showcase their solutions on a national stage.
            </p>
            {/* Organizers logo strip */}
            <div
              className="relative overflow-hidden w-[280px] sm:w-[320px] h-[40px]"
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 w-[280px] sm:w-[320px] h-[140px]">
                <Image
                  src="/allorganizerslogo.webp"
                  alt="Organizers"
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-contain object-center md:object-right"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center md:text-left">&copy; {new Date().getFullYear()} hackX Jr. 9.0. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/1DArK9JoVH/?mibextid=wwXIfr" className="social-glass" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://chat.whatsapp.com/B5EpWJsyeprHjGLILWXxoj?mode=gi_t" className="social-glass" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/hackx-junior/" className="social-glass" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
