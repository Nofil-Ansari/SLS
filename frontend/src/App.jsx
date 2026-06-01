import React, { useState } from 'react';
import { useScrollSpring } from './hooks/useScrollSpring';
import ThreeCanvas from './components/ThreeCanvas';
import LeafParticles from './components/LeafParticles';
import NarrativeSection from './components/NarrativeSection';
import { Sun, Leaf, RefreshCw, Layers } from 'lucide-react';

/**
 * App Coordinator.
 * Manages the scroll spring physics engine, coordinates the split-screen responsive layout,
 * and frames the interactive storytelling experience.
 */
function App() {
  // Capture physics-based scroll spring progress (0.0 to 1.0)
  const scrollProgress = useScrollSpring(85, 23, 1.1);

  // Interactive Simulation Variables (ecological telemetry multipliers)
  const [solar, setSolar] = useState(1.0);
  const [water, setWater] = useState(1.0);
  const [mycelium, setMycelium] = useState(1.0);

  // Compute scroll-bound helper states for the navigation bar
  const progressPercent = Math.min(100, Math.round(scrollProgress * 100));

  return (
    <div className="min-h-screen bg-canvas-dark text-ink-primary font-sans relative selection:bg-accent-leaf selection:text-canvas-dark">
      
      {/* 1. Header (System Navigation) */}
      <header className="w-full h-20 border-b border-whisper flex items-center justify-between px-6 md:px-12 backdrop-blur-md sticky top-0 z-50 bg-canvas-dark/90">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 bg-accent-leaf rounded-full animate-pulse"></span>
          <span className="font-mono text-sm tracking-widest uppercase text-ink-primary">[canopy]</span>
        </div>
        
        {/* Navigation Indices */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] text-ink-secondary tracking-widest uppercase">
          <a href="#narrative-start" className="hover:text-ink-primary transition-colors flex items-center gap-1.5">
            <span>[01]</span> Energy
          </a>
          <a href="#narrative-start" className="hover:text-ink-primary transition-colors flex items-center gap-1.5">
            <span>[02]</span> Food
          </a>
          <a href="#narrative-start" className="hover:text-ink-primary transition-colors flex items-center gap-1.5">
            <span>[03]</span> Waste
          </a>
        </nav>
        
        {/* Scroll Scrubber Visual Indicator */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block font-mono text-[10px] text-ink-secondary uppercase">
            Canopy Status // {progressPercent}%
          </div>
          <div className="h-1 w-20 bg-surface-card border border-whisper rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-leaf transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </header>
      
      {/* 2. Main Coordinator Layout */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 relative">
        
        {/* LEFT COLUMN: Scrollable Storytelling (60% Width) */}
        <main className="col-span-1 md:col-span-7 border-r border-whisper min-h-screen flex flex-col justify-between">
          
          {/* Hero Content Area */}
          <section className="px-6 md:px-12 pt-16 md:pt-28 pb-12 flex flex-col items-start text-left select-text">
            {/* Project Index */}
            <div className="font-mono text-xs text-ink-secondary tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent-leaf rounded-full"></span>
              Index [00] // System Archetype
            </div>
            
            {/* Editorial Header with Inline Image Typographic Punctuation */}
            <h1 className="text-ink-primary font-display font-light leading-[1.08] tracking-tight mb-8 text-4xl sm:text-5xl md:text-[5.2rem]">
              Reimagine 
              <img 
                src="https://picsum.photos/id/357/90/45" 
                className="inline-block h-[0.88em] w-[1.9em] object-cover rounded-full mx-2.5 align-middle border border-whisper pointer-events-none hover:scale-105 transition-transform duration-300 shadow-lg" 
                alt="Moss closeup" 
              />
              how we dwell 
              <img 
                src="https://picsum.photos/id/1043/90/45" 
                className="inline-block h-[0.88em] w-[1.9em] object-cover rounded-full mx-2.5 align-middle border border-whisper pointer-events-none hover:scale-105 transition-transform duration-300 shadow-lg" 
                alt="Green forest branches" 
              />
              in deep harmony with the canopy.
            </h1>
            
            {/* Body Copy */}
            <p className="text-ink-secondary font-sans text-base sm:text-lg leading-relaxed max-w-[54ch] mb-12">
              We construct self-regulating environments that blend clean physics with organic geometry. 
              By observing natural cycles of energy conservation and recursive cell growth, we craft 
              living architectures that breathe, evolve, and sustain.
            </p>
            
            {/* High-agency active indicators (Restrained) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-whisper py-8 mb-8">
              <div className="flex gap-3 text-left">
                <Sun className="h-5 w-5 text-accent-leaf shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono text-xs text-ink-primary uppercase tracking-wider mb-1">Passivity Matrix</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">Orientation tuned directly to thermal radiation contours.</p>
                </div>
              </div>
              <div className="flex gap-3 text-left">
                <Layers className="h-5 w-5 text-accent-leaf shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono text-xs text-ink-primary uppercase tracking-wider mb-1">Modular Stacking</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">Closed-loop water and nutrient recycling arrays.</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => {
                const el = document.getElementById('narrative-start');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 border border-whisper bg-transparent text-ink-primary rounded-sm text-xs font-mono tracking-widest uppercase hover:bg-ink-primary hover:text-canvas-dark active:translate-y-0.5 -translate-y-0.5 transition-all duration-300"
            >
              [Begin Core Navigation]
            </button>
          </section>
          
          {/* Asymmetric Zig-Zag Pillars */}
          <NarrativeSection />
          
        </main>
        
        {/* RIGHT COLUMN: Sticky Visual Anchor Canopy Engine (40% Width) */}
        <aside className="col-span-1 md:col-span-5 h-[480px] md:h-[calc(100vh-80px)] sticky top-20 z-40 bg-surface-card/40 backdrop-blur-sm md:border-none border-b border-whisper overflow-hidden flex flex-col items-center justify-between p-6">
          {/* Structural grid labels */}
          <div className="w-full flex justify-between items-center font-mono text-[9px] text-ink-secondary opacity-50 select-none z-10">
            <span>GRID // ACTIVE_SYS_01</span>
            <span>TIMELAPSE // {progressPercent}%</span>
          </div>
          
          {/* Procedural Tree Generator */}
          <div className="w-full h-[240px] md:h-[calc(100%-200px)] relative flex items-center justify-center">
            <ThreeCanvas progress={scrollProgress} solar={solar} water={water} mycelium={mycelium} />
            
            {/* Floating Spore Particles (Fades in dynamically at Phase IV) */}
            <LeafParticles progress={scrollProgress} solar={solar} mycelium={mycelium} />
          </div>
          
          {/* Absolute-positioned glassmorphic simulation controllers */}
          <div className="w-full p-4 rounded-sm border border-whisper bg-canvas-dark/85 backdrop-blur-md z-30 select-none space-y-4">
            <div className="font-mono text-[9px] text-ink-secondary uppercase tracking-widest flex justify-between items-center border-b border-whisper pb-2">
              <span>Canopy Telemetry Controls</span>
              <span className="text-accent-leaf animate-pulse flex items-center gap-1">
                <span className="h-1 w-1 bg-accent-leaf rounded-full"></span> online
              </span>
            </div>
            
            <div className="space-y-3">
              {/* Solar Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between font-mono text-[9px] text-ink-secondary uppercase">
                  <span>[01] Passive Solar Input</span>
                  <span className="text-ink-primary font-medium">{solar.toFixed(2)}x</span>
                </div>
                <input 
                  type="range" 
                  min="0.4" 
                  max="1.6" 
                  step="0.05"
                  value={solar}
                  onChange={(e) => setSolar(parseFloat(e.target.value))}
                  className="w-full h-1 bg-surface-card rounded-full appearance-none cursor-pointer accent-accent-leaf"
                />
              </div>
              
              {/* Water Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between font-mono text-[9px] text-ink-secondary uppercase">
                  <span>[02] Closed Irrigation Flow</span>
                  <span className="text-ink-primary font-medium">{water.toFixed(2)}x</span>
                </div>
                <input 
                  type="range" 
                  min="0.4" 
                  max="1.6" 
                  step="0.05"
                  value={water}
                  onChange={(e) => setWater(parseFloat(e.target.value))}
                  className="w-full h-1 bg-surface-card rounded-full appearance-none cursor-pointer accent-accent-leaf"
                />
              </div>
              
              {/* Mycelium Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between font-mono text-[9px] text-ink-secondary uppercase">
                  <span>[03] Compost Mycelium Level</span>
                  <span className="text-ink-primary font-medium">{mycelium.toFixed(2)}x</span>
                </div>
                <input 
                  type="range" 
                  min="0.4" 
                  max="1.6" 
                  step="0.05"
                  value={mycelium}
                  onChange={(e) => setMycelium(parseFloat(e.target.value))}
                  className="w-full h-1 bg-surface-card rounded-full appearance-none cursor-pointer accent-accent-leaf"
                />
              </div>
            </div>
            
            {/* Dynamic Status Overlay inside the controller */}
            <div className="flex justify-between items-center pt-2 border-t border-whisper font-mono text-[9px] text-ink-secondary uppercase">
              <span>GROWTH_LOCK // {scrollProgress.toFixed(4)}</span>
              <span className="text-accent-leaf">
                {scrollProgress < 0.20 && "I // GERMINATION"}
                {scrollProgress >= 0.20 && scrollProgress < 0.60 && "II // BRANCH_FRAME"}
                {scrollProgress >= 0.60 && scrollProgress < 0.90 && "III // CANOPY_BURST"}
                {scrollProgress >= 0.90 && "IV // SPORE_SCATTER"}
              </span>
            </div>
          </div>
        </aside>
        
      </div>
      
      {/* 3. Footer (System Summary) */}
      <footer className="w-full border-t border-whisper py-16 px-6 md:px-12 bg-canvas-dark relative z-50 text-left">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase">
              <span className="h-2 w-2 bg-accent-leaf rounded-full"></span>
              [canopy ecosystem]
            </div>
            <p className="text-sm text-ink-secondary max-w-[42ch] leading-relaxed">
              Synthesized by AI and engineered by hand, exploring spatial dynamics where human systems and organic networks overlap.
            </p>
          </div>
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs text-ink-primary uppercase tracking-wider">Specifications</div>
            <ul className="text-xs text-ink-secondary space-y-2">
              <li>Responsive WebGL Simulation</li>
              <li>Procedural L-System Math</li>
              <li>Spring Physics Damping</li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs text-ink-primary uppercase tracking-wider">Core Protocols</div>
            <ul className="text-xs text-ink-secondary space-y-2">
              <li>Index [01] Passive Solar Flow</li>
              <li>Index [02] Hydro Stack Matrix</li>
              <li>Index [03] Fungal Soil Cycle</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto border-t border-whisper mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-ink-secondary uppercase tracking-widest">
          <div>© 2026 Canopy Sustainable Protocols. All systems green.</div>
          <div>ESTABLISHED // 5b70f703-bdb8</div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
