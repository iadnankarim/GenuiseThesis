"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/** Subtle pointer-driven 3D tilt for fine pointers, disabled for touch / reduced motion. */
export function TiltCard({ children, className }: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const lift = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateX.set(-py * 2.5);
    rotateY.set(px * 2.5);
    lift.set(-4);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
  };

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ rotateX, rotateY, y: lift, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
