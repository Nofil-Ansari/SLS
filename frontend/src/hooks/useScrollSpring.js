import { useEffect, useState, useRef } from 'react';

/**
 * Custom spring-damped scroll progress hook.
 * Smooths out scroll interactions using physical spring mechanics (stiffness, damping, mass).
 */
export function useScrollSpring(stiffness = 80, damping = 25, mass = 1.2) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const velocity = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const progress = window.scrollY / scrollableHeight;
      targetProgress.current = Math.max(0, Math.min(1, progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run immediately to set starting position
    
    let rafId;
    const updateSpring = () => {
      // Spring formula: F = -k * x - c * v
      const x = currentProgress.current - targetProgress.current;
      const springForce = -stiffness * x;
      const dampingForce = -damping * velocity.current;
      const acceleration = (springForce + dampingForce) / mass;
      
      // Delta time (assuming ~60fps, dt = 0.016s)
      const dt = 0.016;
      velocity.current += acceleration * dt;
      currentProgress.current += velocity.current * dt;
      
      // Check if spring has settled
      if (Math.abs(currentProgress.current - targetProgress.current) < 0.00001 && Math.abs(velocity.current) < 0.00001) {
        currentProgress.current = targetProgress.current;
        velocity.current = 0;
      }
      
      setScrollProgress(currentProgress.current);
      rafId = requestAnimationFrame(updateSpring);
    };
    
    rafId = requestAnimationFrame(updateSpring);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [stiffness, damping, mass]);

  return scrollProgress;
}
