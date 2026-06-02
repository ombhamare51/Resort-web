import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered fade-in + slide-up animation.
 * Attach the returned ref to any element.
 */
export function useScrollFadeIn(options = {}) {
  const ref = useRef(null);
  const {
    y = 60,
    x = 0,
    duration = 1,
    delay = 0,
    ease = 'power3.out',
    start = 'top 85%',
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y, x },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Stagger-animate direct children of a container on scroll.
 * Provide a childSelector (CSS selector) to target specific children.
 */
export function useStaggerChildren(options = {}) {
  const ref = useRef(null);
  const {
    childSelector = ':scope > *',
    y = 50,
    x = 0,
    duration = 0.8,
    stagger = 0.15,
    ease = 'power3.out',
    start = 'top 85%',
    once = true,
    scale = 1,
    fromScale = 1,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(childSelector);
    if (!children.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { autoAlpha: 0, y, x, scale: fromScale },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          scale,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Parallax scroll effect. Element moves at a different speed than scroll.
 * `speed` controls intensity — negative values move opposite direction.
 */
export function useParallax(speed = -50) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Clip-path text reveal animation.
 * Text slides up from behind a mask.
 */
export function useTextReveal(options = {}) {
  const ref = useRef(null);
  const {
    duration = 1.2,
    delay = 0,
    ease = 'power4.out',
    start = 'top 85%',
    y = 100,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Wrap content for clipping
      el.style.overflow = 'hidden';
      gsap.fromTo(
        el,
        {
          y,
          autoAlpha: 0,
          clipPath: 'inset(100% 0% 0% 0%)',
        },
        {
          y: 0,
          autoAlpha: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * GSAP-powered counter animation using ScrollTrigger.
 * Returns a ref to attach to the counter element, and the current value.
 */
export function useCountUpGsap(target, options = {}) {
  const ref = useRef(null);
  const valueRef = useRef({ val: 0 });
  const {
    duration = 2,
    ease = 'power2.out',
    start = 'top 80%',
    separator = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(valueRef.current, {
        val: target,
        duration,
        ease,
        snap: { val: 1 },
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          const v = Math.round(valueRef.current.val);
          el.textContent = separator ? v.toLocaleString() : v;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [target]);

  return ref;
}

/**
 * Orchestrated hero timeline animation.
 * Returns refs for: container, title, subtitle, description, cta.
 */
export function useHeroTimeline(options = {}) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  const { delay = 0.3 } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 80, clipPath: 'inset(100% 0% 0% 0%)' },
          { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.out' }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { autoAlpha: 0, y: 20, scale: 0.9 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.4'
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return { containerRef, titleRef, subtitleRef, descRef, ctaRef };
}

/**
 * Ken Burns zoom effect on background images.
 * Slowly zooms in an element on scroll.
 */
export function useKenBurns(options = {}) {
  const ref = useRef(null);
  const { scale = 1.15, duration = 10 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 1 },
        {
          scale,
          duration,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Scale-in with elastic bounce effect.
 * Good for buttons, icons, badges.
 */
export function useElasticIn(options = {}) {
  const ref = useRef(null);
  const {
    duration = 1,
    delay = 0,
    fromScale = 0.5,
    ease = 'elastic.out(1, 0.5)',
    start = 'top 85%',
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, scale: fromScale },
        {
          autoAlpha: 1,
          scale: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Slide-in from a specified direction on scroll.
 */
export function useSlideIn(direction = 'left', options = {}) {
  const ref = useRef(null);
  const {
    distance = 80,
    duration = 1,
    delay = 0,
    ease = 'power3.out',
    start = 'top 85%',
  } = options;

  const getTransform = () => {
    switch (direction) {
      case 'left': return { x: -distance, y: 0 };
      case 'right': return { x: distance, y: 0 };
      case 'up': return { x: 0, y: -distance };
      case 'down': return { x: 0, y: distance };
      default: return { x: -distance, y: 0 };
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { x, y } = getTransform();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x, y },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Utility: manually trigger a quick pulse animation on an element.
 * Useful for button click feedback.
 */
export function usePulse() {
  const ref = useRef(null);

  const pulse = useCallback(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { scale: 1 },
      { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.inOut' }
    );
  }, []);

  return [ref, pulse];
}

/**
 * Refresh ScrollTrigger after dynamic content changes.
 */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

export { gsap, ScrollTrigger };
