import { Reveal } from "./reveal";

const points = [
  "Vetted UK-aligned experts",
  "Original, Turnitin-checked",
  "Clear quotes, no hidden fees",
  "Confidential and secure",
];

export function About() {
  return (
    <section id="about" className="py-[78px] max-[520px]:py-[52px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 items-center gap-[60px] px-7 max-[980px]:grid-cols-1">
        <Reveal>
          <span className="text-[13px] font-bold tracking-[1.2px] text-gt-green">ABOUT GENIUS THESIS</span>
          <h2 className="mt-3 font-serif text-[36px] font-semibold leading-[1.15] tracking-[-0.5px] text-gt-navy">
            A UK writing partner built around academic integrity.
          </h2>
          <p className="mt-[18px] text-[16px] text-[#475561]">
            Genius Thesis helps students turn rough ideas and tight deadlines into clear, well-argued academic work.
            Founded in the UK, we bring together vetted subject experts, transparent pricing and a process designed
            around your marking criteria.
          </p>
          <p className="mt-[14px] text-[16px] text-[#475561]">
            <strong className="text-gt-navy">Our mission</strong> is to make high-quality academic support accessible,
            honest and stress-free — so you can learn from professionally written, original work that respects your
            voice and your university&apos;s standards.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-[10px] text-[15px] font-medium text-gt-ink">
                <span className="text-gt-green">✓</span> {point}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div
              className="flex h-[380px] w-full items-center justify-center rounded-2xl border border-gt-line text-center"
              style={{ background: "linear-gradient(135deg,#eef3f1,#dfeae5)" }}
            >
              <span className="px-6 text-[14px] font-medium text-gt-muted">Workspace / team photo</span>
            </div>
            <div className="absolute -bottom-[18px] -left-[18px] rounded-[13px] bg-gt-navy px-5 py-4 text-white shadow-[0_18px_40px_-14px_rgba(0,0,0,0.4)]">
              <div className="font-serif text-[26px] font-semibold">7+ years</div>
              <div className="text-[13px] text-[#bccbd8]">supporting UK students</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
