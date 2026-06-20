"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/lib/gt-data";

function NavButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[10px] border border-[#d8dee4] bg-white transition-colors hover:border-gt-green"
    >
      {children}
    </button>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const len = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);
  const visible = [0, 1, 2].map((k) => testimonials[(index + k) % len]);

  return (
    <section className="border-y border-[#eaeef1] bg-gt-mist py-[78px] max-[520px]:py-[52px]">
      <div className="mx-auto max-w-[1180px] px-7">
        <div className="flex flex-wrap items-end justify-between gap-[18px]">
          <div className="max-w-[560px]">
            <span className="text-[13px] font-bold tracking-[1.2px] text-gt-green">TESTIMONIALS</span>
            <h2 className="mt-[10px] font-serif text-[36px] font-semibold tracking-[-0.5px] text-gt-navy">
              Students who got their time back.
            </h2>
          </div>
          <div className="flex gap-[10px]">
            <NavButton label="Previous" onClick={prev}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c1c2e" strokeWidth="2" strokeLinecap="round">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </NavButton>
            <NavButton label="Next" onClick={next}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c1c2e" strokeWidth="2" strokeLinecap="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </NavButton>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="mt-[30px] grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-2 max-[520px]:grid-cols-1"
          >
            {visible.map((t, i) => (
              <div
                key={`${index}-${i}`}
                className="flex flex-col rounded-[14px] border border-gt-line bg-white p-6 max-[760px]:[&:nth-child(3)]:hidden max-[520px]:[&:nth-child(2)]:hidden"
              >
                <span className="text-[15px] tracking-[2px] text-gt-gold">★★★★★</span>
                <p className="mb-[18px] mt-[14px] flex-1 font-serif text-[17px] leading-[1.5] text-[#27333d]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-[#eef1f4] pt-4">
                  <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gt-navy text-[15px] font-semibold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-[14.5px] font-semibold text-gt-navy">{t.name}</div>
                    <div className="text-[13px] text-[#6b7884]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
