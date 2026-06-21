"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

/** Animated ambient backdrop for the dark hero: a parallax library photo sunk deep
 *  into the navy, a faint grid and drifting brand glows. */
export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.16]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* parallax library photo, tinted right down into the brand navy */}
      <motion.img
        src="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        style={reduceMotion ? undefined : { y, scale }}
        className="absolute left-0 top-0 h-[130%] w-full object-cover opacity-[0.16]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,28,46,0.72)_0%,rgba(10,24,40,0.93)_100%)]" />

      {/* faint grid, masked to fade out toward the edges */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent_75%)]" />

      {/* drifting brand glows */}
      <div className="absolute -right-20 -top-[120px] h-[420px] w-[420px] animate-[gt-drift_14s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(21,121,92,0.30),transparent_70%)] motion-reduce:animate-none" />
      <div className="absolute -bottom-[160px] -left-[120px] h-[380px] w-[380px] animate-[gt-drift_18s_ease-in-out_infinite_reverse] rounded-full bg-[radial-gradient(circle,rgba(63,196,154,0.12),transparent_70%)] motion-reduce:animate-none" />

      {/* thin mint highlight line along the top */}
      <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gt-mint/30 to-transparent" />
    </div>
  );
}
