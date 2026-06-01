import React from 'react';

/**
 * AsymmetricHero Component.
 * Left Side: Architectural typography, premium modern serif headlines with signature inline image punctuation.
 * Right Side: Active container hosting the procedural tree timelapse.
 */
export default function AsymmetricHero({ children }) {
  return (
    <section className="min-h-[92dvh] w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center border-b border-whisper relative px-6 md:px-12 py-12 md:py-0">
      
      {/* Editorial Content Column */}
      <div className="md:col-span-7 flex flex-col justify-center items-start text-left select-text z-10">
        
        {/* Index Number */}
        <div className="font-mono text-xs text-ink-secondary tracking-widest uppercase mb-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-accent-leaf rounded-full animate-pulse"></span>
          Index [00] // Foundation
        </div>
        
        {/* Inline Typographic Headline */}
        <h1 className="text-ink-primary font-display font-light leading-[1.08] tracking-tight mb-8">
          Reimagine 
          <img 
            src="https://picsum.photos/id/106/90/45" 
            className="inline-block h-[0.88em] w-[1.9em] object-cover rounded-full mx-2.5 align-middle border border-whisper pointer-events-none hover:scale-105 transition-transform duration-300" 
            alt="Forest floor moss" 
          />
          how we dwell 
          <img 
            src="https://picsum.photos/id/1043/90/45" 
            className="inline-block h-[0.88em] w-[1.9em] object-cover rounded-full mx-2.5 align-middle border border-whisper pointer-events-none hover:scale-105 transition-transform duration-300" 
            alt="Sunny tree canopy" 
          />
          in deep harmony with the canopy.
        </h1>
        
        {/* Body Narrative */}
        <p className="text-ink-secondary font-sans text-base md:text-lg leading-relaxed max-w-[56ch] mb-10">
          We construct self-regulating environments that blend clean physics with organic geometry. 
          By observing natural cycles of energy conservation and recursive cell growth, we craft 
          living architectures that breathe, evolve, and sustain.
        </p>
        
        {/* Restrained single CTA */}
        <button 
          onClick={() => {
            const el = document.getElementById('narrative-start');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-3.5 border border-whisper bg-transparent text-ink-primary rounded-sm text-sm font-sans tracking-wide uppercase hover:bg-ink-primary hover:text-canvas-dark active:translate-y-0.5 -translate-y-0.5 transition-all duration-300 pointer-events-auto"
        >
          Initialize Exploration
        </button>
      </div>
      
      {/* 3D-Feeling Canopy Viewport Column */}
      <div className="md:col-span-5 w-full h-[320px] md:h-[80dvh] relative rounded-sm bg-surface-card border border-whisper overflow-hidden flex items-center justify-center">
        {/* Vertical/Horizontal Technical Index Labels */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-ink-secondary opacity-40">
          SYS.LOC.09A // LATENCY.00ms
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[9px] text-ink-secondary opacity-40">
          TIMELAPSE // ACTIVE_CORE
        </div>
        
        {/* Dynamic child holding ThreeCanvas */}
        {children}
      </div>
      
    </section>
  );
}
