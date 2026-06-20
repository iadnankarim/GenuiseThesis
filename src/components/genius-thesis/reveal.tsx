"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span";
}

/** Fade + rise into view once, mirroring the source design's WAAPI reveal. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface RevealStaggerProps {
  children: ReactNode[];
  className?: string;
  /** Per-child delay step in seconds. */
  step?: number;
  itemClassName?: string;
}

/** Reveals a list of children with an incremental, capped delay. */
export function RevealStagger({ children, className, step = 0.07, itemClassName }: RevealStaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={Math.min(i, 8) * step} className={itemClassName}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
