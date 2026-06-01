import React, { useState, useEffect, useRef } from 'react';

/**
 * Immersive Procedural Tree Visualizer (ThreeCanvas).
 * Renders an organic, scroll-bound 3D-feeling tree using recursive SVG vector mathematics.
 * Incorporates physics-based spring smoothing, growth phases, and perpetual micro-motion wind sway.
 * Dynamically reacts to active sliders (solar, water, mycelium) in real-time.
 */
export default function ThreeCanvas({ progress, solar = 1.0, water = 1.0, mycelium = 1.0 }) {
  const [time, setTime] = useState(0);
  const requestRef = useRef(null);
  
  // Perpetual Micro-Motion Animation Loop (Wind Sway)
  useEffect(() => {
    const animate = () => {
      setTime(prev => prev + 0.016);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Pre-configured stable organic tree skeleton
  const skeleton = {
    angle: 0,
    length: 110,
    thickness: 8.5,
    appearStart: 0.02,
    appearEnd: 0.28,
    children: [
      {
        angle: -26,
        length: 78,
        thickness: 5.5,
        appearStart: 0.22,
        appearEnd: 0.52,
        children: [
          {
            angle: -18,
            length: 56,
            thickness: 3.5,
            appearStart: 0.46,
            appearEnd: 0.72,
            children: [
              {
                angle: -22,
                length: 38,
                thickness: 2.2,
                appearStart: 0.65,
                appearEnd: 0.84,
                children: [
                  { angle: -24, length: 26, thickness: 1.2, appearStart: 0.78, appearEnd: 0.92, isLeaf: true },
                  { angle: 16, length: 28, thickness: 1.2, appearStart: 0.80, appearEnd: 0.94, isLeaf: true }
                ]
              },
              {
                angle: 24,
                length: 40,
                thickness: 2.2,
                appearStart: 0.68,
                appearEnd: 0.86,
                children: [
                  { angle: -14, length: 25, thickness: 1.2, appearStart: 0.81, appearEnd: 0.94, isLeaf: true },
                  { angle: 26, length: 27, thickness: 1.2, appearStart: 0.82, appearEnd: 0.95, isLeaf: true }
                ]
              }
            ]
          },
          {
            angle: 28,
            length: 58,
            thickness: 3.5,
            appearStart: 0.48,
            appearEnd: 0.74,
            children: [
              {
                angle: -20,
                length: 42,
                thickness: 2.2,
                appearStart: 0.69,
                appearEnd: 0.86,
                children: [
                  { angle: -26, length: 24, thickness: 1.2, appearStart: 0.82, appearEnd: 0.95, isLeaf: true },
                  { angle: 18, length: 26, thickness: 1.2, appearStart: 0.83, appearEnd: 0.96, isLeaf: true }
                ]
              },
              {
                angle: 22,
                length: 39,
                thickness: 2.2,
                appearStart: 0.70,
                appearEnd: 0.88,
                children: [
                  { angle: -12, length: 25, thickness: 1.2, appearStart: 0.83, appearEnd: 0.95, isLeaf: true },
                  { angle: 28, length: 28, thickness: 1.2, appearStart: 0.84, appearEnd: 0.96, isLeaf: true }
                ]
              }
            ]
          }
        ]
      },
      {
        angle: 24,
        length: 82,
        thickness: 5.8,
        appearStart: 0.25,
        appearEnd: 0.55,
        children: [
          {
            angle: -22,
            length: 60,
            thickness: 3.8,
            appearStart: 0.50,
            appearEnd: 0.76,
            children: [
              {
                angle: -24,
                length: 44,
                thickness: 2.4,
                appearStart: 0.70,
                appearEnd: 0.87,
                children: [
                  { angle: -28, length: 26, thickness: 1.2, appearStart: 0.83, appearEnd: 0.95, isLeaf: true },
                  { angle: 16, length: 24, thickness: 1.2, appearStart: 0.84, appearEnd: 0.96, isLeaf: true }
                ]
              },
              {
                angle: 20,
                length: 41,
                thickness: 2.4,
                appearStart: 0.72,
                appearEnd: 0.88,
                children: [
                  { angle: -15, length: 28, thickness: 1.2, appearStart: 0.84, appearEnd: 0.96, isLeaf: true },
                  { angle: 25, length: 26, thickness: 1.2, appearStart: 0.85, appearEnd: 0.97, isLeaf: true }
                ]
              }
            ]
          },
          {
            angle: 22,
            length: 57,
            thickness: 3.6,
            appearStart: 0.52,
            appearEnd: 0.78,
            children: [
              {
                angle: -16,
                length: 40,
                thickness: 2.2,
                appearStart: 0.71,
                appearEnd: 0.88,
                children: [
                  { angle: -24, length: 25, thickness: 1.2, appearStart: 0.84, appearEnd: 0.96, isLeaf: true },
                  { angle: 18, length: 27, thickness: 1.2, appearStart: 0.85, appearEnd: 0.97, isLeaf: true }
                ]
              },
              {
                angle: 26,
                length: 43,
                thickness: 2.4,
                appearStart: 0.73,
                appearEnd: 0.89,
                children: [
                  { angle: -14, length: 24, thickness: 1.2, appearStart: 0.85, appearEnd: 0.97, isLeaf: true },
                  { angle: 28, length: 28, thickness: 1.2, appearStart: 0.86, appearEnd: 0.98, isLeaf: true }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  // Traverses the skeleton and computes active render positions based on scroll progress + wind time
  const renderBranches = (node, parentX, parentY, parentAngle, depth = 0) => {
    // Determine growth factor of this specific branch
    const { appearStart, appearEnd, angle, length, thickness, children, isLeaf } = node;
    const branchProgress = Math.max(0, Math.min(1, (progress - appearStart) / (appearEnd - appearStart)));
    
    if (branchProgress <= 0) return { lines: [], leaves: [] };

    // Wind sway calculation (higher branches sway more dynamically)
    const swayAmplitude = 0.8 + depth * 0.9;
    const swaySpeed = 1.6 - depth * 0.1;
    const windAngle = Math.sin(time * swaySpeed + depth * 0.8) * swayAmplitude;
    
    // Compute current active angle, length, and thickness (incorporating the water multiplier)
    const currentAngle = parentAngle + angle + windAngle;
    const currentLength = length * branchProgress * (0.7 + 0.3 * water);
    const currentThickness = thickness * (0.3 + 0.7 * branchProgress) * (0.7 + 0.3 * water);

    // Endpoint coordinates
    const rad = (currentAngle * Math.PI) / 180;
    const endX = parentX + Math.sin(rad) * currentLength;
    const endY = parentY - Math.cos(rad) * currentLength;

    let lines = [];
    let leaves = [];

    // Add current branch line
    lines.push(
      <line
        key={`b-${depth}-${parentX}-${parentY}`}
        x1={parentX}
        y1={parentY}
        x2={endX}
        y2={endY}
        strokeWidth={currentThickness}
        className="stroke-[#50685C] opacity-85 transition-all duration-75"
        strokeLinecap="round"
      />
    );

    // Render leaves if it's a leaf node or terminal branch at 70%+ progress
    if (isLeaf || !children || children.length === 0) {
      // Leaf grows in Phase III (60% - 90%)
      const leafStart = appearEnd - 0.05;
      const leafProgress = Math.max(0, Math.min(1, (progress - leafStart) * 12));
      
      if (leafProgress > 0) {
        // Leaf size reacts dynamically to solar energy
        const leafSize = 9 * leafProgress * (0.6 + 0.4 * solar);
        const leafWindSway = Math.sin(time * 3 + parentX) * 3;
        
        leaves.push(
          <g key={`l-${parentX}-${parentY}`} transform={`translate(${endX}, ${endY}) rotate(${currentAngle + leafWindSway})`}>
            {/* Soft backdrop glow around foliage */}
            <circle
              r={leafSize * 1.5}
              fill="rgba(16, 185, 129, 0.08)"
              className="blur-sm pointer-events-none"
            />
            {/* Dynamic organic leaf structure */}
            <path
              d={`M 0 0 C ${leafSize * 0.8} -${leafSize * 0.5}, ${leafSize * 1.2} -${leafSize}, 0 -${leafSize * 2.2} C -${leafSize * 1.2} -${leafSize}, -${leafSize * 0.8} -${leafSize * 0.5}, 0 0 Z`}
              fill="url(#leafGradient)"
              className="opacity-90 transform origin-bottom transition-all duration-300"
            />
            {/* Active emerald core */}
            <path
              d={`M 0 0 L 0 -${leafSize * 2.0}`}
              stroke="#A7F3D0"
              strokeWidth="0.5"
              className="opacity-70"
            />
          </g>
        );
      }
    }

    // Traverse children recursively
    if (children && branchProgress >= 0.95) {
      children.forEach((child) => {
        const childRenders = renderBranches(child, endX, endY, currentAngle, depth + 1);
        lines = [...lines, ...childRenders.lines];
        leaves = [...leaves, ...childRenders.leaves];
      });
    }

    return { lines, leaves };
  };

  // Run recursive generation from the base of the trunk
  const { lines, leaves } = renderBranches(skeleton, 250, 450, 0, 0);

  // Background grid cells matching "whisper" border design system
  const gridCells = [];
  for (let i = 1; i < 5; i++) {
    gridCells.push(
      <line key={`grid-h-${i}`} x1="0" y1={i * 100} x2="500" y2={i * 100} stroke="rgba(142, 168, 155, 0.04)" strokeWidth="1" />
    );
    gridCells.push(
      <line key={`grid-v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" stroke="rgba(142, 168, 155, 0.04)" strokeWidth="1" />
    );
  }

  // Calculate soil germination stage (Phase I: 0% - 20%) incorporating mycelium parameter
  const soilDepth = Math.max(0, Math.min(1, progress * 5));
  const soilOpacity = (0.2 + 0.8 * soilDepth) * (0.6 + 0.4 * mycelium);

  return (
    <div className="w-full h-full relative flex items-center justify-center select-none overflow-hidden animate-sway">
      {/* Immersive backdrop atmosphere glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
      
      <svg
        viewBox="0 0 500 500"
        className="w-[95%] h-[95%] max-w-[500px] aspect-square drop-shadow-[0_24px_60px_rgba(5,22,12,0.45)]"
      >
        <defs>
          {/* Chlorophyll-calibrated emerald leaf gradient (shifts stop opacity dynamically with solar energy) */}
          <linearGradient id="leafGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#065F46" />
            <stop offset={`${Math.min(95, 45 + 20 * solar)}%`} stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" stopOpacity={0.5 + 0.5 * solar} />
          </linearGradient>
          
          {/* Subtle trunk lighting gradient */}
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1C2E24" />
            <stop offset="100%" stopColor="#2D483A" />
          </linearGradient>
          
          <radialGradient id="soilGlow" cx="50%" cy="100%" r="50%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.15)" />
            <stop offset="100%" stopColor="rgba(12, 17, 14, 0)" />
          </radialGradient>
        </defs>

        {/* System Grid (Structural architecture) */}
        <g className="opacity-80">{gridCells}</g>

        {/* Soil Base / Roots Layer (Phase I) */}
        <g opacity={soilOpacity}>
          <ellipse cx="250" cy="450" rx="90" ry="12" fill="url(#soilGlow)" />
          <path
            d="M 170 450 Q 250 458 330 450"
            fill="none"
            stroke="#121A15"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Sprout roots emerging under soil */}
          {progress > 0.05 && (
            <path
              d={`M 250 450 Q 235 465 220 472 M 250 450 Q 260 462 275 476`}
              fill="none"
              stroke="#304439"
              strokeWidth={Math.min(2.5, progress * 15) * (0.7 + 0.3 * mycelium)}
              className="opacity-75 transition-all duration-75"
              strokeLinecap="round"
            />
          )}
          {/* Fine root capillaries emerge if mycelium concentration is high */}
          {mycelium > 1.15 && progress > 0.08 && (
            <path
              d="M 235 465 Q 220 480 205 483 M 260 462 Q 280 480 295 488"
              fill="none"
              stroke="#10B981"
              strokeWidth="0.8"
              className="opacity-40 animate-pulse"
              strokeLinecap="round"
            />
          )}
        </g>

        {/* Main Procedural Branching (Phase II & III) */}
        <g className="transition-all duration-300">{lines}</g>

        {/* Sprouting Foliage Canopy (Phase III) */}
        <g className="transition-all duration-300">{leaves}</g>
      </svg>
    </div>
  );
}
