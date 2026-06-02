import React, { useState, useEffect, useRef } from 'react';
import { useScrollSpring } from './hooks/useScrollSpring';
import ThreeCanvas from './components/ThreeCanvas';
import LeafParticles from './components/LeafParticles';
import NarrativeSection from './components/NarrativeSection';
import { Sun, Leaf, Layers, EyeOff, Eye, Sparkles, Droplets, Moon, Volume2, Info } from 'lucide-react';

/**
 * App Coordinator.
 * Coordinates Sylvan Cycle biophilic parchment-light system, scroll physics,
 * HUD toggle dynamics (Zen Mode), and advanced canvas-based climate simulators (Rain, Sun God-Rays, Night overlay).
 */
function App() {
  // Capture physics-based scroll spring progress (0.0 to 1.0)
  const scrollProgress = useScrollSpring(85, 23, 1.1);

  // Ecological Telemetry Variables (multipliers)
  const [solar, setSolar] = useState(1.0);
  const [water, setWater] = useState(1.0);
  const [mycelium, setMycelium] = useState(1.0);

  // Climate Simulator States (Stitch screens interactions)
  const [raining, setRaining] = useState(false);
  const [sunGlow, setSunGlow] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [zenMode, setZenMode] = useState(false);

  // Compute scroll-bound helper progress
  const progressPercent = Math.min(100, Math.round(scrollProgress * 100));

  // Canvas ref for Rain Simulation
  const rainCanvasRef = useRef(null);
  const rainRequestRef = useRef(null);
  const rainDrops = useRef([]);

  // Sync Night Mode state directly to body tag for global biophilic theme toggling
  useEffect(() => {
    if (nightMode) {
      document.body.classList.add('dark-override');
    } else {
      document.body.classList.remove('dark-override');
    }
  }, [nightMode]);

  // Rain particle simulator physics engine
  useEffect(() => {
    const canvas = rainCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initializing rain drop collection
    const initRain = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      rainDrops.current = Array.from({ length: 140 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        len: Math.random() * 15 + 8,
        speed: Math.random() * 8 + 6,
      }));
    };

    initRain();

    let time = 0;
    const drawRain = () => {
      time += 0.016;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      if (raining) {
        ctx.strokeStyle = nightMode ? 'rgba(174, 194, 224, 0.45)' : 'rgba(92, 114, 101, 0.4)';
        ctx.lineWidth = 0.85;
        ctx.lineCap = 'round';

        rainDrops.current.forEach((d) => {
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x, d.y + d.len);
          ctx.stroke();

          // Move down (speed scales with water/irrigation telemetry!)
          d.y += d.speed * (0.8 + 0.4 * water);
          if (d.y > h) {
            d.y = -d.len;
            d.x = Math.random() * w;
          }
        });
      }

      rainRequestRef.current = requestAnimationFrame(drawRain);
    };

    rainRequestRef.current = requestAnimationFrame(drawRain);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(rainRequestRef.current);
    };
  }, [raining, water, nightMode]);

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-1000">
      
      {/* Immersive Atmospheric Overlays */}
      
      {/* 1. Sunlight God-Rays Overlay */}
      <div 
        className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000 bg-[radial-gradient(circle_at_20%_20%,rgba(255,245,200,0.35)_0%,transparent_70%)] animate-god-rays ${
          sunGlow ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 2. Night Mood Vignette Vignette */}
      <div 
        className={`absolute inset-0 z-20 pointer-events-none transition-all duration-1000 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(12,27,3,0.75)_100%)] ${
          nightMode ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 3. Top Header Navigation (HUD) */}
      <header 
        className={`fixed top-0 left-0 w-full h-20 border-b border-whisper flex items-center justify-between px-6 md:px-12 backdrop-blur-md z-50 bg-canvas-light/80 dark-override:bg-canvas-dark/80 transition-all duration-700 ${
          zenMode ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex items-center gap-3">
          <Leaf className="h-5 w-5 text-accent-forest dark-override:text-accent-leaf animate-float-slow" />
          <h1 className="font-sans text-lg tracking-widest uppercase text-ink-primary font-bold">[sylvan cycle]</h1>
        </div>
        
        {/* Navigation Actions */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] text-ink-secondary uppercase tracking-widest">
          <button 
            onClick={() => document.getElementById('narrative-start')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-ink-primary transition-colors hover:scale-105 active:scale-95"
          >
            [01] Chronicle
          </button>
          <button 
            onClick={() => document.getElementById('narrative-start')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-ink-primary transition-colors hover:scale-105 active:scale-95"
          >
            [02] Ecosystem
          </button>
        </nav>
        
        {/* Navigation Side Tools */}
        <div className="flex items-center gap-6">
          {/* Zen Toggle Button */}
          <button 
            onClick={() => setZenMode(true)}
            className="glass-panel p-2.5 rounded-full text-ink-primary hover:bg-accent-forest/10 flex items-center gap-2 px-5 active:scale-95 text-xs font-mono select-none"
          >
            <EyeOff className="h-4.5 w-4.5" />
            <span>Zen Mode</span>
          </button>
          
          {/* Scrubber Status indicator */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="font-mono text-[10px] text-ink-secondary uppercase">
              Canopy Status // {progressPercent}%
            </div>
            <div className="h-1 w-16 bg-surface-card border border-whisper rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent-forest dark-override:bg-accent-leaf transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* 4. Split Screen Coordinator Grid */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 relative pt-20">
        
        {/* LEFT COLUMN: Narrative index copy (60% Width) */}
        <main 
          className={`col-span-1 md:col-span-7 border-r border-whisper min-h-screen flex flex-col justify-between transition-all duration-700 select-text ${
            zenMode ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          {/* Hero Section */}
          <section className="px-6 md:px-12 pt-16 md:pt-28 pb-12 flex flex-col items-start text-left select-text">
            
            <div className="font-mono text-xs text-ink-secondary tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent-forest dark-override:bg-accent-leaf rounded-full"></span>
              Index [00] // Biophilic Design
            </div>
            
            <h1 className="text-ink-primary font-display font-light leading-[1.08] tracking-tight mb-8 text-4xl sm:text-5xl md:text-[5.2rem]">
              Reimagine 
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=350&auto=format&fit=crop" 
                className="inline-block h-[0.88em] w-[1.9em] object-cover rounded-full mx-2.5 align-middle border border-whisper pointer-events-none hover:scale-105 transition-transform duration-300 shadow-lg" 
                alt="Green sprout" 
              />
              how we dwell 
              <img 
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=350&auto=format&fit=crop" 
                className="inline-block h-[0.88em] w-[1.9em] object-cover rounded-full mx-2.5 align-middle border border-whisper pointer-events-none hover:scale-105 transition-transform duration-300 shadow-lg" 
                alt="Foliage sunlight" 
              />
              in deep harmony.
            </h1>
            
            <p className="text-ink-secondary font-sans text-base sm:text-lg leading-relaxed max-w-[54ch] mb-12">
              We construct self-regulating environments that blend clean physics with organic geometry. 
              By observing natural cycles of energy conservation and recursive cell growth, we craft 
              living architectures that breathe, evolve, and sustain.
            </p>
            
            {/* Architectural stats cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-whisper py-8 mb-8">
              <div className="flex gap-3 text-left">
                <Sun className="h-5 w-5 text-accent-forest dark-override:text-accent-leaf shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono text-xs text-ink-primary uppercase tracking-wider mb-1">Passivity Matrix</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">Orientation tuned directly to thermal radiation contours.</p>
                </div>
              </div>
              <div className="flex gap-3 text-left">
                <Layers className="h-5 w-5 text-accent-forest dark-override:text-accent-leaf shrink-0 mt-0.5" />
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
              className="px-6 py-3.5 border border-whisper bg-transparent text-ink-primary rounded-sm text-xs font-mono tracking-widest uppercase hover:bg-accent-forest hover:text-canvas-light dark-override:hover:bg-ink-primary dark-override:hover:text-canvas-dark active:translate-y-0.5 -translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              [Begin Sylvan Journey]
            </button>
          </section>
          
          <NarrativeSection />
          
        </main>
        
        {/* RIGHT COLUMN: Interactive Visual Anchor Canopy (40% Width) */}
        <aside 
          onClick={() => { if (zenMode) setZenMode(false); }}
          className={`col-span-1 md:col-span-5 sticky top-20 z-40 bg-surface-card/30 md:border-none border-b border-whisper flex flex-col items-center justify-between p-6 cursor-pointer select-none transition-all duration-700 ${
            zenMode ? 'md:col-span-12 h-[calc(100vh-80px)] w-full w-max-[100vw] z-50 bg-transparent' : 'h-[480px] md:h-[calc(100vh-80px)]'
          }`}
        >
          {/* Subsystem label indicators */}
          <div className="w-full flex justify-between items-center font-mono text-[9px] text-ink-secondary opacity-50 select-none z-30">
            <span>GRID // PROT.ACTIVE_SYS_01</span>
            <span>TIMELAPSE // {progressPercent}%</span>
          </div>

          {/* Floating Climate Anchor */}
          {zenMode && (
            <button 
              onClick={(e) => { e.stopPropagation(); setZenMode(false); }}
              className="absolute top-6 right-6 glass-panel p-2.5 rounded-full text-ink-primary hover:bg-accent-forest/10 flex items-center gap-2 px-5 active:scale-95 text-xs font-mono select-none z-50 cursor-pointer shadow-lg"
            >
              <Eye className="h-4.5 w-4.5" />
              <span>Restore HUD</span>
            </button>
          )}
          
          {/* Procedural Tree Simulator Viewport */}
          <div className="w-full h-[240px] md:h-[calc(100%-200px)] relative flex items-center justify-center transition-all duration-500">
            
            {/* HTML5 Canvas Rain overlay */}
            <canvas ref={rainCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500" style={{ opacity: raining ? 1 : 0 }} />
            
            {/* Mathematical Tree Growth Engine */}
            <ThreeCanvas progress={scrollProgress} solar={solar} water={water} mycelium={mycelium} sunGlow={sunGlow} raining={raining} />
            
            {/* Floating Spores */}
            <LeafParticles progress={scrollProgress} solar={solar} mycelium={mycelium} />
          </div>
          
          {/* Telemetry Control Dashboard Cards */}
          <div 
            onClick={(e) => e.stopPropagation()} // Stop click bubbling to avoid breaking zen mode
            className={`w-full p-4 rounded-sm border border-whisper bg-canvas-light/95 dark-override:bg-canvas-dark/95 backdrop-blur-md z-30 select-none space-y-4 shadow-xl shadow-accent-forest/5 transition-all duration-500 ${
              zenMode ? 'max-w-2xl translate-y-0 opacity-100 mb-6' : 'translate-y-0 opacity-100'
            }`}
          >
            <div className="font-mono text-[9px] text-ink-secondary uppercase tracking-widest flex justify-between items-center border-b border-whisper pb-2">
              <span>Biophilic Telemetry Controls</span>
              <span className="text-accent-forest dark-override:text-accent-leaf animate-pulse flex items-center gap-1 font-bold">
                <span className="h-1 w-1 bg-accent-forest dark-override:bg-accent-leaf rounded-full"></span> simulation online
              </span>
            </div>
            
            {/* Simulation sliders */}
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
                  className="w-full h-1 bg-surface-card rounded-full appearance-none cursor-pointer accent-accent-forest dark-override:accent-accent-leaf"
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
                  className="w-full h-1 bg-surface-card rounded-full appearance-none cursor-pointer accent-accent-forest dark-override:accent-accent-leaf"
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
                  className="w-full h-1 bg-surface-card rounded-full appearance-none cursor-pointer accent-accent-forest dark-override:accent-accent-leaf"
                />
              </div>
            </div>
            
            {/* Climate Interactive Toggles */}
            <div className="flex justify-between items-center gap-2 pt-2 border-t border-whisper">
              <span className="font-mono text-[9px] text-ink-secondary uppercase">Climate toggles:</span>
              <div className="flex gap-2">
                {/* Sun Toggle */}
                <button 
                  onClick={() => setSunGlow(!sunGlow)}
                  className={`p-2 rounded-full border border-whisper hover:bg-accent-forest/10 transition-all active:scale-90 cursor-pointer ${
                    sunGlow ? 'bg-accent-sunlight/15 text-accent-sunlight border-accent-sunlight' : 'text-ink-secondary'
                  }`}
                  title="Toggle Solar Rays"
                >
                  <Sun className="h-3.5 w-3.5" />
                </button>
                {/* Rain Toggle */}
                <button 
                  onClick={() => setRaining(!raining)}
                  className={`p-2 rounded-full border border-whisper hover:bg-accent-forest/10 transition-all active:scale-90 cursor-pointer ${
                    raining ? 'bg-blue-500/15 text-blue-500 border-blue-400' : 'text-ink-secondary'
                  }`}
                  title="Toggle Rain Particle Simulation"
                >
                  <Droplets className="h-3.5 w-3.5" />
                </button>
                {/* Night Toggle */}
                <button 
                  onClick={() => setNightMode(!nightMode)}
                  className={`p-2 rounded-full border border-whisper hover:bg-accent-forest/10 transition-all active:scale-90 cursor-pointer ${
                    nightMode ? 'bg-accent-leaf/15 text-accent-leaf border-accent-leaf' : 'text-ink-secondary'
                  }`}
                  title="Toggle Night Overlay"
                >
                  <Moon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Stage Telemetry Indicator */}
            <div className="flex justify-between items-center pt-2 border-t border-whisper font-mono text-[9px] text-ink-secondary uppercase">
              <span>GROWTH_LOCK // {scrollProgress.toFixed(4)}</span>
              <span className="text-accent-forest dark-override:text-accent-leaf font-bold">
                {scrollProgress < 0.20 && "I // GERMINATION"}
                {scrollProgress >= 0.20 && scrollProgress < 0.60 && "II // BRANCH_FRAME"}
                {scrollProgress >= 0.60 && scrollProgress < 0.90 && "III // CANOPY_BURST"}
                {scrollProgress >= 0.90 && "IV // SPORE_SCATTER"}
              </span>
            </div>
          </div>
        </aside>
        
      </div>
      
      {/* 5. Footer (System Summary) */}
      <footer 
        className={`w-full border-t border-whisper py-16 px-6 md:px-12 bg-canvas-light dark-override:bg-canvas-dark relative z-50 text-left transition-all duration-75 ${
          zenMode ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase">
              <Leaf className="h-4 w-4 text-accent-forest dark-override:text-accent-leaf" />
              [canopy ecosystem]
            </div>
            <p className="text-sm text-ink-secondary max-w-[42ch] leading-relaxed">
              Synthesized by AI and engineered by hand, exploring spatial dynamics where human systems and organic networks overlap.
            </p>
          </div>
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs text-ink-primary uppercase tracking-wider font-bold">Specifications</div>
            <ul className="text-xs text-ink-secondary space-y-2">
              <li>Biophilic Parchment Framework</li>
              <li>Atmospheric Canvas Engines</li>
              <li>Spring Physics Damping</li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs text-ink-primary uppercase tracking-wider font-bold">Core Protocols</div>
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
