import { HeroBackground } from "./hero-background";
import { QuoteEstimator } from "./quote-estimator";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0c1c2e_0%,#0a1928_100%)] text-[#eaf1f7]">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-[1.05fr_0.95fr] items-center gap-16 px-7 pb-[84px] pt-[74px] max-[980px]:grid-cols-1 max-[980px]:gap-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.08] px-[13px] py-[6px] text-[13px] font-semibold tracking-[0.3px] text-[#bfe6d6]">
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-gt-mint" />
            UK-BASED · VETTED ACADEMIC EXPERTS
          </span>
          <h1 className="mt-5 font-serif text-[54px] font-semibold leading-[1.08] tracking-[-1px] text-white max-[980px]:text-[42px] max-[520px]:text-[34px]">
            Turn your toughest brief into <span className="italic text-gt-mint">first-class</span> academic work.
          </h1>
          <p className="mt-5 max-w-[540px] text-[18px] leading-[1.6] text-[#bccbd8]">
            Assignment, essay, dissertation and thesis writing from experts who hold the degree you&apos;re working
            toward — original, referenced and delivered on time.
          </p>
          <div className="mt-[30px] flex gap-[14px] max-[520px]:flex-col max-[520px]:items-stretch">
            <a
              href="#quote"
              className="rounded-[10px] bg-gt-green px-6 py-[14px] text-[16px] font-semibold text-white shadow-[0_6px_18px_rgba(21,121,92,0.35)] transition-colors hover:bg-[#19926e]"
            >
              Get a free quote
            </a>
            <a
              href="#services"
              className="rounded-[10px] border border-white/[0.18] bg-white/[0.06] px-6 py-[14px] text-[16px] font-semibold text-[#eaf1f7] transition-colors hover:bg-white/[0.12]"
            >
              Explore services
            </a>
          </div>
          <div className="mt-[34px] flex flex-wrap items-center gap-[22px]">
            <div className="flex items-center gap-[9px]">
              <span className="text-[17px] tracking-[2px] text-gt-gold">★★★★★</span>
              <span className="text-[14px] text-[#cdd8e2]">
                <strong className="text-white">4.8/5</strong> · 12,000+ reviews
              </span>
            </div>
            <span className="h-[22px] w-px bg-white/[0.16]" />
            <span className="text-[14px] text-[#cdd8e2]">100% plagiarism-free · Money-back guarantee</span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <QuoteEstimator />
        </Reveal>
      </div>
    </section>
  );
}
