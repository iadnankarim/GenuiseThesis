import { processSteps } from "@/lib/gt-data";
import { Reveal, RevealStagger } from "./reveal";

export function Process() {
  return (
    <section id="process" className="bg-gt-navy py-[78px] text-[#eaf1f7] max-[520px]:py-[52px]">
      <div className="mx-auto max-w-[1180px] px-7">
        <Reveal>
          <div className="max-w-[640px]">
            <span className="text-[13px] font-bold tracking-[1.2px] text-gt-mint">HOW IT WORKS</span>
            <h2 className="mt-[10px] font-serif text-[36px] font-semibold tracking-[-0.5px] text-white">
              A clear journey from brief to submission.
            </h2>
          </div>
        </Reveal>

        <RevealStagger
          className="mt-[38px] grid grid-cols-5 gap-[18px] max-[980px]:grid-cols-3 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1"
          itemClassName="h-full"
        >
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className="flex h-full flex-col rounded-[14px] border border-white/10 bg-white/5 p-[22px]"
            >
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-gt-green font-serif text-[17px] font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="mb-[6px] mt-[14px] text-[16px] font-semibold text-white">{step.title}</h3>
              <p className="text-[13.5px] text-[#aebccb]">{step.desc}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
