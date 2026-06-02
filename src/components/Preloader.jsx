import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

/**
 * Preloader Component.
 * Replicates the exact preloader and transition from the original template:
 * A solid white screen with the CSS-animated "lds-roller" spinner,
 * fading in and out smoothly on page transitions.
 */
export default function Preloader() {
  const overlayRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.killTweensOf(overlay);

    const tl = gsap.timeline();
    
    // Disable scroll while transition is active
    if (window.lenis) window.lenis.stop();

    // 1. Fade in the solid overlay
    tl.set(overlay, { display: 'flex', opacity: 0 })
      .to(overlay, {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      })
      // 2. Hold momentarily for page loading
      .to({}, { duration: 0.6 })
      // 3. Fade out the overlay
      .to(overlay, {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          // Enable scroll after page is revealed
          if (window.lenis) window.lenis.start();
        },
      });

    return () => {
      tl.kill();
      if (window.lenis) window.lenis.start();
    };
  }, [location.pathname]);

  return (
    <div
      ref={overlayRef}
      id="de-loader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff', // Solid white background matching the original PHP template
        zIndex: 99999, // Render above everything
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
