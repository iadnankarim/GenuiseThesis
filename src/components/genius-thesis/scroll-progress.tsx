"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin gradient bar pinned to the very top that fills as the page scrolls. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,#15795c,#3fc49a,#f0b738)]"
    />
  );
}
