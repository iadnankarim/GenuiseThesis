"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqs } from "@/lib/gt-data";
import { Reveal } from "./reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const toggle = (i: number) => setOpenIndex((current) => (current === i ? -1 : i));

  return (
    <section id="faq" className="py-[78px] max-[520px]:py-[52px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[0.85fr_1.15fr] items-start gap-[54px] px-7 max-[980px]:grid-cols-1">
        <Reveal>
          <span className="text-[13px] font-bold tracking-[1.2px] text-gt-green">FAQ</span>
          <h2 className="mt-[10px] font-serif text-[36px] font-semibold tracking-[-0.5px] text-gt-navy">
            Answers before you ask.
          </h2>
          <p className="mb-[22px] mt-[14px] text-[16px] text-[#475561]">
            Still unsure about something? Our team replies in minutes, 24/7.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-[10px] bg-gt-navy px-[22px] py-[13px] text-[15px] font-semibold text-white transition-colors hover:bg-gt-green"
          >
            Talk to an advisor
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-gt-line">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={faq.q} className="border-b border-gt-line">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={open}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[16.5px] font-semibold text-gt-navy">{faq.q}</span>
                    <span className="flex-shrink-0 text-[22px] leading-none text-gt-green">{open ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="m-0 max-w-[600px] pb-[22px] text-[15px] leading-[1.6] text-gt-muted">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
