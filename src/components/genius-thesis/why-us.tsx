import { features } from "@/lib/gt-data";
import { Reveal } from "./reveal";

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

        <div className="mt-[34px] grid grid-cols-3 overflow-hidden rounded-2xl border border-gt-line max-[760px]:grid-cols-2 max-[520px]:grid-cols-1">
          {features.map((feature) => (
            <div
              key={feature.num}
              className="border-b border-r border-[#eef1f4] p-[26px] last:border-r-0 [&:nth-child(3n)]:border-r-0 max-[760px]:[&:nth-child(2n)]:border-r-0 max-[760px]:[&:nth-child(3n)]:border-r max-[520px]:border-r-0"
            >
              <div className="font-serif text-[15px] font-semibold text-gt-green">{feature.num}</div>
              <h3 className="mb-[6px] mt-2 text-[17px] font-semibold text-gt-navy">{feature.title}</h3>
              <p className="text-[14.5px] text-gt-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
