import { features } from "@/lib/gt-data";
import { Reveal } from "./reveal";

// Bento layout: first and last cells span two columns for visual rhythm.
function spanClass(i: number, total: number) {
  const big = i === 0 || i === total - 1;
  return big ? "col-span-2 max-[520px]:col-span-1" : "col-span-1";
}

export function WhyUs() {
  return (
    <section id="why" className="py-[78px] max-[520px]:py-[52px]">
      <div className="mx-auto max-w-[1180px] px-7">
        <Reveal>
          <div className="max-w-[640px]">
            <span className="text-[13px] font-bold tracking-[1.2px] text-gt-green">WHY GENIUS THESIS</span>
            <h2 className="mt-[10px] font-serif text-[36px] font-semibold tracking-[-0.5px] text-gt-navy">
              The reasons students trust us with their grades.
            </h2>
          </div>
        </Reveal>

        <div className="mt-[34px] grid grid-cols-4 gap-[18px] max-[760px]:grid-cols-2 max-[520px]:grid-cols-1">
          {features.map((feature, i) => {
            const big = i === 0 || i === features.length - 1;
            return (
              <Reveal key={feature.num} delay={Math.min(i, 8) * 0.06} className={`${spanClass(i, features.length)} h-full`}>
                <div
                  className={`group flex h-full flex-col rounded-2xl border border-gt-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gt-green/40 hover:shadow-[0_18px_40px_-22px_rgba(12,28,46,0.4)] ${
                    big ? "bg-[linear-gradient(135deg,#ffffff,#f1f7f4)]" : "bg-white"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#e7f3ee] text-gt-green transition-colors group-hover:bg-gt-green group-hover:text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d={feature.icon} />
                      </svg>
                    </div>
                    <span className="font-serif text-[15px] font-semibold text-[#c3ccd4]">{feature.num}</span>
                  </div>
                  <h3 className={`font-semibold text-gt-navy ${big ? "text-[19px]" : "text-[17px]"}`}>{feature.title}</h3>
                  <p className="mt-[6px] text-[14.5px] leading-[1.55] text-gt-muted">{feature.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
