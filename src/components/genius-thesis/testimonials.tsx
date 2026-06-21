import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { testimonials } from "@/lib/gt-data";
import { Reveal } from "./reveal";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="relative border-y border-[#eaeef1] bg-white py-[78px] max-[520px]:py-[52px]">
      <div className="mx-auto max-w-[1180px] px-7">
        <Reveal>
          <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
            <span className="text-[13px] font-bold tracking-[1.2px] text-gt-green">TESTIMONIALS</span>
            <h2 className="mt-[10px] font-serif text-[36px] font-semibold tracking-[-0.5px] text-gt-navy">
              Students who got their time back.
            </h2>
            <p className="mt-3 text-[16px] text-[#475561]">
              Real feedback from UK students across levels and disciplines.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
