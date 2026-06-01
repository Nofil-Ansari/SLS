# Agent Directive: Sustainable Living (SLS)

This document is the operating manual for all AI agents working on the **Sustainable Living (SLS)** project. Read this file completely before modifying any code. It details the architecture, technical requirements, styling mapping, and interactive simulation rules.

---

## 🎯 The Core Mission
Create an immersive, premium, high-agency static single-page web application that showcases sustainable living principles. The crowning visual feature of this application is an **interactive, scroll-bound, 3D-feeling tree growing timelapse** that acts as the user's navigational anchor through the storytelling experience.

---

## 🛠️ Technical Stack
All development must adhere strictly to these frontend choices. No external backend integrations or heavy database setups are required:

1. **Framework**: React (Vite-powered, fast loading, fully client-side static bundle).
2. **Styling**: TailwindCSS (fully customized with tokens from `DESIGN.md`).
3. **Structure**: HTML5 Semantic markup (e.g., `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
4. **Icons**: Clean inline SVGs or standard Lucide React icons (no heavy asset libraries, no emojis).
5. **Simulation**: Three.js (via React Three Fiber or vanilla WebGL context inside a React canvas) or highly optimized 2D/3D SVG canvas animation for the tree growth.

---

## 🎨 Design System & Tailwind Mapping
Ensure your Tailwind CSS configuration (`tailwind.config.js`) maps perfectly to the semantic variables declared in `DESIGN.md`.

### Colors & Themes
Configure the Tailwind theme with these precise custom values:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: '#0C110E',     // Deep forest-shadow background
        },
        surface: {
          card: '#121A15',    // Muted dark clay surface
        },
        ink: {
          primary: '#F3FAF6',  // Crisp mint primary text
          secondary: '#8EA89B',// Muted technical sage text
        },
        accent: {
          leaf: '#10B981',     // Vibrant active chlorophyll emerald
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderColor: {
        whisper: 'rgba(142, 168, 155, 0.15)',
      }
    }
  }
}
```

---

## 🌲 Immersive Tree Timelapse Mechanics
Subsequent agents must build the scroll-bound tree growing experience according to these steps:

### 1. Scroll Scrubbing Setup
* Implement a highly optimized scroll hook in React to track normalized scroll progress (`0.0` to `1.0`) of the page or the viewport section.
* Use a lightweight spring interpolation library (like `framer-motion` or a simple custom linear-to-spring math script) to damp the scroll value. This ensures that fast scrolling results in smooth organic tree growth rather than mechanical, jerky frames.

### 2. Rendering Phases
* **Phase I (0% - 20% Scroll)**: Sprout and roots. Minimal branches, small sapling appearing out of a geometric dark soil layer.
* **Phase II (20% - 60% Scroll)**: Branching. Recursive growth algorithm (e.g., L-system rules translated to React/SVG coordinate generation) forming the main trunk and primary limbs.
* **Phase III (60% - 90% Scroll)**: Foliage unfolding. Sprouting leaves scaling from `0` to `1` using staggered ease-out transitions.
* **Phase IV (90% - 100% Scroll)**: Seed scattering. Fine floating particle system (using HTML5 Canvas or CSS keyframes) representing spores drifting away under natural sway.

### 3. Perpetual Micro-Motion
* **Never let the canvas freeze.** Even when the scroll stops, run a continuous requestAnimationFrame loop generating a subtle sinusoidal wave to sway the leaves (`Math.sin(time) * amplitude`).

---

## 🏗️ Folder Structure
Maintain a clean, lightweight static React project structure:
```text
sls-app/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── main.jsx          # App entrypoint
│   ├── index.css         # Tailwind directives and custom fonts
│   ├── App.jsx           # Immersive parent coordinator
│   ├── components/       # Reusable components
│   │   ├── ThreeCanvas.jsx  # WebGL/Three.js container or SVG simulator
│   │   ├── LeafParticles.jsx # Spore particle engine
│   │   ├── AsymmetricHero.jsx # Left: Copy / Right: Tree Viewport
│   │   └── NarrativeSection.jsx # Content sections (Energy, Food, Waste)
│   └── hooks/
│       └── useScrollSpring.js # Custom spring scroll tracking
```

---

## 🚫 Strict Anti-Patterns (Banned AI Clichés)
You must NOT include any of the following patterns in your generated frontend:
* **No generic dashboard naming or stats**: Do not invent mock metrics like "99.98% clean energy", "12,453 Trees Planted", or "15 Tons CO2 saved". Instead, focus on real qualitative concepts, structural guidelines, or let the user input real metrics. Use clear labels like `[carbon reduction]` if showing templates.
* **No AI copy clichés**: Avoid words like "unleash", "elevate", "seamless", "next-gen", "paradigm shift". Use bold, clear, direct, and architectural sentences.
* **No standard horizontal triple-card row**: The classic "Three equal cards side-by-side" layout is banned. Use alternating grids, asymmetric margins, or full-width parallax cards with whisper borders.
* **No emojis**: Never use emojis in button text, navigation labels, or headers. Use clean visual iconography or geometric shapes (e.g., small squares or lines).
