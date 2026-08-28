# 🚀 hackX Jr. 9.0 — Landing Page

> **Sri Lanka's Premier Inter-School Innovation Competition**
>
> Organized by the **Industrial Management Science Students' Association (IMSSA)** at the Department of Industrial Management, **University of Kelaniya**.

---

## 🌟 Overview

This repository contains the source code for the official landing page of **hackX Jr. 9.0**. Designed to inspire young school-level minds across Sri Lanka to transform their bold ideas into scalable technology-driven innovations, the landing page combines premium modern aesthetics with interactive front-end elements.

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js (App Router)](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Styling**: Vanilla CSS & Custom Tailwind Utilities
* **Video/Embeds**: Vimeo API integration
* **Analytics & Chatbot**: Microsoft Clarity & Custom NLP Chatbot Backend Integration

---

## ⚡ Key Features

* **Parallax 3D Artifacts**: Smooth scroll-linked image parallax effects that bring the visual elements to life.
* **Bento Grid Stats**: High-performance stat blocks detailing the legacy (9 Editions, 100+ Schools, 380+ Teams).
* **Interactive AI Assistant**: Integrates with the custom HackX Chatbot backend (`/api/chat/jr`) to help visitors query schedules, guidelines, eligibility rules, and organizer contacts.
* **Organizing Committee (OC) Section**: Custom coordinator cards featuring deterministic floating particles and mouse-tilt parallax effects.
* **Smooth Scrolling**: Implements custom frame-rate independent smooth inertia scrolling.
* **Analytics**: Integrated with Microsoft Clarity tracking to analyze user interaction behavior.

---

## 📁 Directory Structure

```text
├── .next/                  # Next.js build cache
├── public/                 # Static assets (images, logos, PDF booklets)
│   ├── OC/                 # Organizing committee avatar photos
│   ├── criteria-images/    # Evaluation metrics graphics
│   ├── timeline-bgs/       # Timeline slide backdrops
│   └── Xlogo-favicon.png   # Custom favicon icon
├── src/
│   ├── app/                # Root layout, router pages, and global styles
│   │   ├── globals.css     # Main style sheet & custom layout utilities
│   │   ├── layout.tsx      # Main layout component
│   │   └── page.tsx        # Home page structure
│   └── components/         # Reusable React components
│       ├── AskAISection.tsx       # AI assistant chat interface component
│       ├── CriteriaSection.tsx    # Evaluation metrics component
│       ├── FAQSection.tsx         # Frequently Asked Questions accordion list
│       ├── Footer.tsx             # Page footer with social media icons
│       ├── Hero.tsx               # Header hero fold with CTA
│       ├── JourneySection.tsx     # Interactive horizontal scroll timeline
│       ├── MemoriesSection.tsx    # Responsive past highlights gallery grid
│       ├── NavBar.tsx             # Interactive glassmorphic header navigation
│       ├── NewSection2.tsx        # Narrative intro & Bento stats layout
│       └── TeamSection.tsx        # Parallax Organizing Committee cards grid
├── .env                    # Local environment config variables
├── next.config.ts          # Next.js configurations
└── tsconfig.json           # TypeScript configuration parameters
```

---

## 🚀 Getting Started

Follow these steps to run the application locally:

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) and `pnpm` package manager:

```bash
npm install -g pnpm
```

### 2. Installation

Clone the repository and install the dependencies:

```bash
pnpm install
```

### 3. Environment Setup

Create or verify the `.env` file in the root directory:

```env
# URL configuration for the chatbot backend
NEXT_PUBLIC_CHATBOT_API_URL=http://localhost:8000

# URL configuration for the registration portal
NEXT_PUBLIC_REGISTRATION_URL=https://portal.hackx.lk/
```

### 4. Running the Development Server

Start the local server:

```bash
pnpm dev
```

The application will be served at `http://localhost:3000`.

### 5. Production Build

Verify TypeScript rules and compile the application for deployment:

```bash
pnpm build
```

Start the production server locally:

```bash
pnpm start
```

## 📄 License & Ownership

This website, including its design, codebase, media assets, graphics, and interactive components, is the exclusive proprietary property of the **Industrial Management Science Students' Association (IMSSA)**, **University of Kelaniya**.

* **Proprietary & Confidential**: All rights are strictly reserved.
* **Usage Restrictions**: You may not copy, modify, distribute, clone, or repurpose this website, its source code, or any of its design elements for another event, hackathon, or commercial purpose without prior explicit written permission from IMSSA.
