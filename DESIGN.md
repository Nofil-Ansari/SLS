# Design System: Sustainable Living (SLS)

```yaml
system:
  name: "Sustainable Living - Canopy"
  version: "1.0.0"
  atmosphere:
    mood: "Immersive, clinical yet warm, organic architectural studio"
    density: 4  # Immersive gallery scale (1-10)
    variance: 8 # High asymmetric variance for organic layout (1-10)
    motion: 9   # Cinematic scroll-bound choreography (1-10)

colors:
  canvas_dark: "#0C110E"     # Immersive forest-shadow absolute background
  surface_card: "#121A15"    # Muted dark organic clay surface
  ink_primary: "#F3FAF6"     # Crisp mint-tinted primary text
  ink_secondary: "#8EA89B"   # Calibrated secondary sage text
  border_whisper: "rgba(142, 168, 155, 0.15)" # Subtle organic panel separation
  accent_leaf: "#10B981"      # Vibrant chlorophyll green (73% saturation) for primary CTAs/states

typography:
  display:
    family: "Fraunces"       # High-character editorial modern serif
    weight: "300, 400"
    tracking: "tight"
    scaling: "clamp(2.5rem, 6vw, 5.5rem)"
  body:
    family: "Satoshi"        # Sleek, sharp geometric sans-serif
    weight: "400, 500"
    leading: "relaxed"
    max_width: "65ch"
  mono:
    family: "JetBrains Mono" # Mathematical structure for statistics and indexes

layout:
  principles:
    - "Strict single-column mobile collapse below 768px"
    - "Grid-first asymmetric organic alignments (no boring 3-column grids)"
    - "Immersive full-screen canvas layers using min-h-[100dvh]"
    - "No element overlapping except deliberate parallax Z-index staging"
  structure:
    hero: "Asymmetric split layout. Left: high-typography editorial intro. Right: active 3D canopy viewport."
    features: "2-column zig-zag scrolling narrative showcasing environmental indices."

immersive_3d_timelapse:
  concept: "Scroll-bound temporal tree growth"
  engine: "Three.js WebGL / CSS 3D parallax fallback"
  mechanics:
    scrubbing: "Scroll position directly interpolates tree branch interpolation and leaf generation matrix"
    micro_motion:
      wind:
        type: "Perpetual sinus noise displacement on leaf vertices"
        frequency: "0.2Hz"
        amplitude: "0.05"
      spores:
        type: "Floating hardware-accelerated particle system"
        count: 120
        speed: "stochastic 0.5px to 1.5px per frame"
    spring_physics:
      stiffness: 80
      damping: 25
      mass: 1.2

components:
  buttons:
    shape: "generously sharp (rounded-sm, 4px)"
    border: "1px solid var(--border-whisper)"
    states:
      hover: "bg-ink-primary text-canvas-dark transform -translate-y-0.5"
      active: "transform translate-y-0"
      shadow: "none"
  panels:
    shape: "asymmetric chamfered edges or deep borders"
    blur: "backdrop-filter backdrop-blur-md"
    shadow: "diffused emerald-tinted dark shadow (rgba(5, 22, 12, 0.4) 0px 12px 30px)"

anti_patterns:
  banned_elements:
    - "No emojis anywhere in copy or buttons"
    - "No generic Inter font"
    - "No standard sans-serif system fonts for headings"
    - "No neon outer glowing button shadows or toxic AI purples"
    - "No 3-column equal card feature layouts"
    - "No scroll indicators, chevrons, or 'Scroll to explore' text"
    - "No custom cursor wrappers"
    - "No generic placeholders (e.g., John Doe, Acme Corp)"
    - "No fabricated metrics (e.g., 99.9% uptime, 15k active users)"
```

## Visual Atmosphere & Mood

The visual atmosphere is defined by **Canopy Organic Minimalism**. It avoids the tired "eco-friendly" cliché of bright green leaves and paper textures. Instead, it is an immersive, clinical dark-mode sanctuary that feels like a modern architectural rendering of a greenhouse in the year 2050. 

A high-character editorial serif (**Fraunces**) sets a luxurious and thoughtful tone for display headlines, contrasted by the structural accuracy of a technical geometric sans-serif (**Satoshi**) for readability and UI elements.

## Immersive 3D Tree Growing Timelapse Behavior

1. **Interactive Scroll Scrubbing**: As the user scrolls, a beautifully rendered procedural tree progresses through its life cycle:
   - **0% - 20% Scroll**: Soil germination, root system anchoring, and initial sprout breakthrough.
   - **20% - 60% Scroll**: Branch expansion using recursive L-system math. The stem hardens and splits asymmetrically.
   - **60% - 90% Scroll**: Foliage explosion. Green chlorophyll leaves unfold with smooth scale-up transforms.
   - **90% - 100% Scroll**: Mature canopy canopy, with floating spore particles releasing into the virtual wind.
2. **Spring-Loaded Physics**: All temporal transitions are governed by weighty, natural spring math to prevent linear, mechanical movement.
3. **Perpetual Wind Motion**: Even when the user stops scrolling, the tree is never static. A perpetual micro-motion wind simulation gently sways the branches and leaves, keeping the canvas alive.
