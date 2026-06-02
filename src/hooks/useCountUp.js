import { useState, useEffect } from 'react';

/**
 * Custom React Hook for animating statistics count-up.
 * Counts smoothly from 0 to a target value.
 */
export function useCountUp(targetValue, durationMs = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetValue, 10);
    if (isNaN(end) || end <= 0) {
      setCount(targetValue);
      return;
    }

    const totalSteps = 50; // number of steps in animation
    const stepTime = Math.max(Math.floor(durationMs / totalSteps), 15);
    const stepValue = Math.ceil(end / totalSteps);

    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue, durationMs]);

  return count;
}
