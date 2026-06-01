import React, { useEffect, useRef } from 'react';

/**
 * Spore Particle Engine.
 * Renders a lightweight, high-performance canvas particle simulation.
 * Recommences spore scatter in Phase IV (progress 75% - 100%).
 * Integrates dynamic telemetry multipliers (solar and mycelium).
 */
export default function LeafParticles({ progress, solar = 1.0, mycelium = 1.0 }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const requestRef = useRef(null);
  
  // Calculate visibility and density multiplier based on scroll progress (spores trigger in final phase)
  const intensity = Math.max(0, Math.min(1, (progress - 0.75) * 4)); 
  
  useEffect(() => {
    const canvas = canvasRef.current;
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
    
    // Seed helper
    const createParticle = (initBottom = false) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      return {
        x: Math.random() * w,
        y: initBottom ? h + 10 : Math.random() * h,
        size: Math.random() * 2 + 0.8,
        speedY: -(Math.random() * 0.6 + 0.2),
        swaySpeed: Math.random() * 0.5 + 0.2,
        swayAmplitude: Math.random() * 0.8 + 0.2,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.2,
      };
    };
    
    // Fill initial particles
    const rect = canvas.getBoundingClientRect();
    particles.current = Array.from({ length: 80 }, () => createParticle(false));
    
    let time = 0;
    const animate = () => {
      time += 0.016;
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, w, h);
      
      if (intensity > 0.01) {
        // Render a dynamic subset of particles depending on mycelium level
        const activeCount = Math.min(80, Math.round(55 * mycelium));
        const activeParticles = particles.current.slice(0, activeCount);

        activeParticles.forEach((p) => {
          // Physics updates (speedY scales with mycelium biological activity)
          p.y += p.speedY * (0.5 + 0.5 * mycelium);
          // Side-to-side sway using sine wave
          p.x += Math.sin(time * p.swaySpeed + p.swayOffset) * p.swayAmplitude;
          
          // Draw spore
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(142, 168, 155, ${p.opacity * intensity})`; // Sage color
          ctx.fill();
          
          // Glowing green core for larger spores (opacity scales with solar input)
          if (p.size > 1.8) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity * intensity * 1.5 * (0.6 + 0.4 * solar)})`; // Active Emerald core
            ctx.fill();
          }
          
          // Recycle when drifting off top
          if (p.y < -10) {
            Object.assign(p, createParticle(true));
          }
          // Recycle when drifting off sides
          if (p.x < -10 || p.x > w + 10) {
            p.x = Math.random() * w;
          }
        });
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, [intensity, solar, mycelium]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-20 transition-opacity duration-300"
      style={{ opacity: intensity }}
    />
  );
}
