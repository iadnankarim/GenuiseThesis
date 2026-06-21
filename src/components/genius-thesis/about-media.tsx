"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { TiltCard } from "./tilt-card";

const EASE = [0.16, 1, 0.3, 1] as const;

/** About-section visual: a parallax study photo in a 3D tilt card with a floating credibility badge. */
export function AboutMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // photo drifts up slightly as the section moves through the viewport (it is 60px taller than its frame)
  const y = useTransform(scrollYProgress, [0, 1], [0, -56]);

  return (
    <div ref={ref} className="relative">
      <TiltCard className="relative h-[380px] overflow-hidden rounded-2xl border border-gt-line shadow-[0_30px_60px_-30px_rgba(12,28,46,0.5)]">
        <motion.img
          src="https://images.pexels.com/photos/5905707/pexels-photo-5905707.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=2"
          alt="Student making notes from a laptop while studying"
          style={reduceMotion ? undefined : { y }}
          className="absolute inset-x-0 top-0 h-[440px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(12,28,46,0.35))]" />
      </TiltCard>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        className="absolute -bottom-[18px] -left-[18px] rounded-[13px] bg-gt-navy px-5 py-4 text-white shadow-[0_18px_40px_-14px_rgba(0,0,0,0.4)]"
      >
        <div className="font-serif text-[26px] font-semibold">7+ years</div>
        <div className="text-[13px] text-[#bccbd8]">supporting UK students</div>
      </motion.div>
    </div>
  );
}
