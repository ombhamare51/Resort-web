import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

/**
 * Hook to initialize Lenis inertial smooth scrolling and synchronize it with GSAP.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Check if we are running in browser context
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      lerp: 0.06, // Lower value (0.05 - 0.08) creates a slower, more buttery, cushioned scroll deceleration
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.9, // Dampen scroll speed slightly to make the inertia more noticeable
      smoothTouch: false, // keep touch native for optimal mobile UX
      infinite: false,
    });

    // Synchronize Lenis scroll updates with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Run Lenis frame updates inside GSAP's ticker
    const rafUpdate = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafUpdate);

    // Disable lag smoothing for smoother animation synchronization
    gsap.ticker.lagSmoothing(0);

    // Bind lenis to window so global helper components (e.g. Preloader) can access it
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafUpdate);
      window.lenis = null;
    };
  }, []);
}
