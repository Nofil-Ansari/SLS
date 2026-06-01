import React from 'react';
import { Sun, ShieldAlert, Recycle, Cpu, Database, Sprout } from 'lucide-react';

/**
 * NarrativeSection Component.
 * Implements a premium, high-agency asymmetric 2-column zig-zag layout.
 * Showcases sustainable living pillars (Energy, Food, Waste) with vector-based technical drawings.
 * Adheres strictly to the anti-generic card layout ban and prohibits invented numbers.
 */
export default function NarrativeSection() {
  return (
    <div id="narrative-start" className="w-full px-6 md:px-12 py-12 md:py-24 space-y-24 md:space-y-40">
      
      {/* 1. Energy Conservation Section (Left Copy / Right Graphic) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
        {/* Copy Column */}
        <div className="md:col-span-6 text-left order-1">
          <div className="font-mono text-xs text-ink-secondary tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent-leaf rounded-full"></span>
            Index [01] // Solar Flow
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-ink-primary tracking-tight leading-tight mb-6">
            Passive Thermal Absorption & Dissipation
          </h2>
          <p className="text-ink-secondary font-sans text-base leading-relaxed mb-8">
            Rather than relying on mechanical HVAC grids, our structures optimize orientation based on solar solstice curves. 
            High-density thermal mass clay walls store day heat and radiate it during cooler evenings, while automated ceiling louvers 
            ventilate air current dynamically using negative pressure voids.
          </p>
          <div className="border-t border-whisper pt-6 flex gap-8">
            <div>
              <div className="font-mono text-xs text-ink-secondary uppercase mb-1">Architecture</div>
              <div className="font-sans text-sm text-ink-primary font-medium">Bilayer Clay Envelope</div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-secondary uppercase mb-1">Thermodynamics</div>
              <div className="font-sans text-sm text-ink-primary font-medium">Natural Convection Loop</div>
            </div>
          </div>
        </div>
        
        {/* Graphic Column */}
        <div className="md:col-span-6 w-full h-[300px] md:h-[400px] bg-surface-card border border-whisper rounded-sm flex items-center justify-center p-8 relative overflow-hidden order-2">
          {/* Animated solar wave background */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/10 to-transparent pointer-events-none" />
          
          <svg viewBox="0 0 300 200" className="w-full h-full max-w-[320px]">
            {/* Grid structure */}
            <rect x="10" y="10" width="280" height="180" rx="3" fill="none" stroke="rgba(142, 168, 155, 0.08)" strokeDasharray="3 3" />
            
            {/* Sun indicator */}
            <circle cx="50" cy="50" r="16" fill="rgba(16, 185, 129, 0.06)" stroke="#10B981" strokeWidth="1" className="animate-pulse" />
            <line x1="50" y1="26" x2="50" y2="18" stroke="#10B981" strokeWidth="1" />
            <line x1="50" y1="74" x2="50" y2="82" stroke="#10B981" strokeWidth="1" />
            <line x1="26" y1="50" x2="18" y2="50" stroke="#10B981" strokeWidth="1" />
            <line x1="74" y1="50" x2="82" y2="50" stroke="#10B981" strokeWidth="1" />
            
            {/* Passive solar paths */}
            <path d="M 68 50 Q 150 90 230 70" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
            <path d="M 68 50 Q 150 120 230 110" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" strokeDasharray="4 2" />
            
            {/* Structural clay wall cross-section */}
            <rect x="230" y="40" width="24" height="120" rx="2" fill="#121A15" stroke="rgba(142, 168, 155, 0.2)" strokeWidth="1" />
            <line x1="242" y1="40" x2="242" y2="160" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" strokeDasharray="2 4" />
            
            {/* Heat radiation indicator */}
            <path d="M 220 80 H 180" fill="none" stroke="#8EA89B" strokeWidth="1" markerEnd="url(#arrow)" />
            <path d="M 220 120 H 180" fill="none" stroke="#8EA89B" strokeWidth="1" />
            
            <text x="242" y="30" textAnchor="middle" fill="#8EA89B" fontSize="7" fontFamily="monospace" letterSpacing="1">THERMAL MASS</text>
            <text x="50" y="85" textAnchor="middle" fill="#10B981" fontSize="7" fontFamily="monospace" letterSpacing="1">PASSIVE SOURCE</text>
          </svg>
        </div>
      </section>

      {/* 2. Regenerative Food Section (Left Graphic / Right Copy) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
        {/* Graphic Column */}
        <div className="md:col-span-6 w-full h-[300px] md:h-[400px] bg-surface-card border border-whisper rounded-sm flex items-center justify-center p-8 relative overflow-hidden order-2 md:order-1">
          {/* Animated root background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/10 pointer-events-none" />
          
          <svg viewBox="0 0 300 200" className="w-full h-full max-w-[320px]">
            {/* Grid structure */}
            <rect x="10" y="10" width="280" height="180" rx="3" fill="none" stroke="rgba(142, 168, 155, 0.08)" strokeDasharray="3 3" />
            
            {/* Hydroponic Stack Frames */}
            <rect x="50" y="30" width="200" height="25" rx="1.5" fill="#121A15" stroke="rgba(142, 168, 155, 0.2)" strokeWidth="1" />
            <rect x="50" y="75" width="200" height="25" rx="1.5" fill="#121A15" stroke="rgba(142, 168, 155, 0.2)" strokeWidth="1" />
            <rect x="50" y="120" width="200" height="25" rx="1.5" fill="#121A15" stroke="rgba(142, 168, 155, 0.2)" strokeWidth="1" />
            
            {/* Flow pipelines */}
            <path d="M 40 42 V 132 H 50" fill="none" stroke="#10B981" strokeWidth="1" />
            <path d="M 260 30 V 120 H 250" fill="none" stroke="rgba(142, 168, 155, 0.4)" strokeWidth="1" />
            
            {/* Small biological nodes */}
            <circle cx="80" cy="42" r="3" fill="#10B981" />
            <circle cx="150" cy="42" r="3" fill="#10B981" />
            <circle cx="220" cy="42" r="3" fill="#10B981" />
            
            <circle cx="100" cy="87" r="3" fill="#10B981" />
            <circle cx="170" cy="87" r="3" fill="#10B981" />
            
            <circle cx="90" cy="132" r="3" fill="#10B981" />
            <circle cx="150" cy="132" r="3" fill="#10B981" />
            <circle cx="210" cy="132" r="3" fill="#10B981" />
            
            {/* Roots vector */}
            <path d="M 80 45 Q 85 58 78 68 M 150 45 Q 148 55 152 65 M 220 45 Q 215 57 225 68" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
            <path d="M 100 90 Q 98 102 104 112 M 170 90 Q 172 101 166 110" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
            
            <text x="150" y="22" textAnchor="middle" fill="#8EA89B" fontSize="7" fontFamily="monospace" letterSpacing="1">VERTICAL STACK L-1</text>
            <text x="150" y="68" textAnchor="middle" fill="#8EA89B" fontSize="7" fontFamily="monospace" letterSpacing="1">VERTICAL STACK L-2</text>
            <text x="150" y="113" textAnchor="middle" fill="#8EA89B" fontSize="7" fontFamily="monospace" letterSpacing="1">VERTICAL STACK L-3</text>
          </svg>
        </div>
        
        {/* Copy Column */}
        <div className="md:col-span-6 text-left order-1 md:order-2">
          <div className="font-mono text-xs text-ink-secondary tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent-leaf rounded-full"></span>
            Index [02] // Cell Nutrients
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-ink-primary tracking-tight leading-tight mb-6">
            Vertical Permaculture & Hydro-Cell Integration
          </h2>
          <p className="text-ink-secondary font-sans text-base leading-relaxed mb-8">
            Optimized for density and water conservation, our crop modular arrays operate on a closed closed-loop gravity flow. 
            Filtered rainwater drifts downwards from high-tier lettuce and herb matrices, hydrating root segments recursively, before 
            pooling in ground bio-filters where aquaponics nutrients are restocked.
          </p>
          <div className="border-t border-whisper pt-6 flex gap-8">
            <div>
              <div className="font-mono text-xs text-ink-secondary uppercase mb-1">Yield Density</div>
              <div className="font-sans text-sm text-ink-primary font-medium">Vertical Modular Layout</div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-secondary uppercase mb-1">Consumption</div>
              <div className="font-sans text-sm text-ink-primary font-medium">Closed Recirculation Loop</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Zero Waste Section (Left Copy / Right Graphic) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
        {/* Copy Column */}
        <div className="md:col-span-6 text-left order-1">
          <div className="font-mono text-xs text-ink-secondary tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent-leaf rounded-full"></span>
            Index [03] // Organic Loop
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-ink-primary tracking-tight leading-tight mb-6">
            Mycelium Processing & Bio-Degradation
          </h2>
          <p className="text-ink-secondary font-sans text-base leading-relaxed mb-8">
            There is no concept of refuse in a perfect ecology. Organic refuse is introduced directly into compost channels 
            inoculated with specific fungal strains. Mycelium networks digest tough lignin fibers, transforming raw cellulose 
            into rich soil inputs while generating sturdy, insulating packaging structures in natural molds.
          </p>
          <div className="border-t border-whisper pt-6 flex gap-8">
            <div>
              <div className="font-mono text-xs text-ink-secondary uppercase mb-1">Decomposers</div>
              <div className="font-sans text-sm text-ink-primary font-medium">Pleurotus Ostreatus network</div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-secondary uppercase mb-1">Result</div>
              <div className="font-sans text-sm text-ink-primary font-medium">Humus Enrichment Compound</div>
            </div>
          </div>
        </div>
        
        {/* Graphic Column */}
        <div className="md:col-span-6 w-full h-[300px] md:h-[400px] bg-surface-card border border-whisper rounded-sm flex items-center justify-center p-8 relative overflow-hidden order-2">
          {/* Animated compost waves */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/10 to-transparent pointer-events-none" />
          
          <svg viewBox="0 0 300 200" className="w-full h-full max-w-[320px]">
            {/* Grid structure */}
            <rect x="10" y="10" width="280" height="180" rx="3" fill="none" stroke="rgba(142, 168, 155, 0.08)" strokeDasharray="3 3" />
            
            {/* Core compost chamber */}
            <circle cx="150" cy="100" r="54" fill="none" stroke="rgba(142, 168, 155, 0.15)" strokeWidth="1" strokeDasharray="4 2" />
            <circle cx="150" cy="100" r="44" fill="none" stroke="#10B981" strokeWidth="1" className="opacity-45" />
            
            {/* Mycelium thread generation */}
            <path d="M 120 80 C 130 95, 138 90, 150 100 Q 155 112 170 95" fill="none" stroke="rgba(142, 168, 155, 0.6)" strokeWidth="0.8" />
            <path d="M 125 120 Q 140 110 150 100 Q 165 95 178 120" fill="none" stroke="rgba(142, 168, 155, 0.6)" strokeWidth="0.8" />
            <path d="M 150 100 Q 152 75 142 60" fill="none" stroke="rgba(142, 168, 155, 0.5)" strokeWidth="0.8" />
            
            {/* Tiny spores */}
            <circle cx="130" cy="85" r="1.5" fill="#10B981" className="animate-pulse" />
            <circle cx="165" cy="115" r="1.5" fill="#10B981" className="animate-pulse" />
            <circle cx="145" cy="70" r="1.2" fill="#10B981" />
            
            {/* Flow arrows */}
            <path d="M 90 100 H 102" fill="none" stroke="#8EA89B" strokeWidth="1" />
            <path d="M 210 100 H 198" fill="none" stroke="#8EA89B" strokeWidth="1" />
            
            <text x="150" y="38" textAnchor="middle" fill="#8EA89B" fontSize="7" fontFamily="monospace" letterSpacing="1">MYCELIUM SUBSTRATE</text>
            <text x="96" y="94" textAnchor="middle" fill="#10B981" fontSize="6" fontFamily="monospace">INPUT</text>
            <text x="204" y="94" textAnchor="middle" fill="#10B981" fontSize="6" fontFamily="monospace">CYCLE</text>
          </svg>
        </div>
      </section>
      
    </div>
  );
}
