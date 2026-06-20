"use client";

import { useState } from "react";
import { services, serviceFilters, type ServiceCategory } from "@/lib/gt-data";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";

export function Services() {
  const [filter, setFilter] = useState<"all" | ServiceCategory>("all");
  const visible = services.filter((s) => filter === "all" || s.cat === filter);

  return (
    <section
      id="services"
      className="border-y border-[#eaeef1] bg-gt-mist py-[78px] max-[520px]:py-[52px]"
    >
      <div className="mx-auto max-w-[1180px] px-7">
        <div className="flex flex-wrap items-end justify-between gap-[18px]">
          <Reveal>
            <span className="text-[13px] font-bold tracking-[1.2px] text-gt-green">WHAT WE DO</span>
            <h2 className="mt-[10px] font-serif text-[36px] font-semibold tracking-[-0.5px] text-gt-navy">
              Specialist help for every brief.
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {serviceFilters.map((tab) => {
              const active = filter === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setFilter(tab.value)}
                  className={`cursor-pointer rounded-[9px] border px-[15px] py-[9px] text-[14px] font-semibold transition-all ${
                    active
                      ? "border-gt-navy bg-gt-navy text-white"
                      : "border-[#dce2e8] bg-white text-[#3a4751]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-[30px] grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-2 max-[520px]:grid-cols-1">
          {visible.map((svc, i) => (
            <Reveal key={svc.title} delay={Math.min(i, 8) * 0.07}>
              <TiltCard className="group h-full rounded-[14px] border border-gt-line bg-white p-6 transition-shadow hover:shadow-[0_14px_34px_-18px_rgba(12,28,46,0.35)]">
                <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[11px] bg-[#e7f3ee]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#15795c"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={svc.icon} />
                  </svg>
                </div>
                <h3 className="m-0 font-serif text-[20px] font-semibold text-gt-navy">{svc.title}</h3>
                <p className="mb-4 mt-2 text-[14.5px] leading-[1.55] text-gt-muted">{svc.desc}</p>
                <a href="#quote" className="text-[14px] font-semibold text-gt-green">
                  Get a quote →
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
