import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to scroll window back to top when active route changes.
 * Incorporates Lenis-safe scroll resetting.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
