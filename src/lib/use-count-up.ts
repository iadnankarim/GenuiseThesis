"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CountUpOptions {
  decimals?: number;
  comma?: boolean;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

/**
 * Animates a number from 0 → target once it scrolls into view.
 * Honours prefers-reduced-motion by snapping straight to the final value.
 */
export function useCountUp(target: number, options: CountUpOptions = {}) {
  const { decimals = 0, comma = false, suffix = "", prefix = "", duration = 1500 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduceMotion, duration]);

  const formatted =
    prefix +
    (comma
      ? Number(value.toFixed(decimals)).toLocaleString("en-GB", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : value.toFixed(decimals)) +
    suffix;

  return { ref, formatted };
}
