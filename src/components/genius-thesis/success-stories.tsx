import { successStories } from "@/lib/gt-data";
import { Reveal, RevealStagger } from "./reveal";

export function SuccessStories() {
  return (
    <section id="work" className="py-[78px] max-[520px]:py-[52px]">
      <div className="mx-auto max-w-[1180px] px-7">
        <Reveal>
          <div className="max-w-[640px]">
            <span className="text-[13px] font-bold tracking-[1.2px] text-gt-green">SUCCESS STORIES</span>
            <h2 className="mt-[10px] font-serif text-[36px] font-semibold tracking-[-0.5px] text-gt-navy">
              Recent work, real outcomes.
            </h2>
            <p className="mt-3 text-[16px] text-[#475561]">
              Anonymised samples of completed briefs across levels and disciplines.
            </p>
          </div>
        </Reveal>

        <RevealStagger
          className="mt-[30px] grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-2 max-[520px]:grid-cols-1"
          step={0.08}
        >
          {successStories.map((story) => (
            <div
              key={story.title}
              className="h-full overflow-hidden rounded-[14px] border border-gt-line bg-white"
            >
              <div className="relative h-[150px] overflow-hidden" style={{ background: story.gradient }}>
                <img
                  src={story.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(12,28,46,0.55))]" />
                <span
                  className="absolute bottom-4 left-4 rounded-[6px] px-[10px] py-1 text-[12px] font-bold"
                  style={{ background: story.badgeBg, color: story.badgeColor }}
                >
                  {story.badge}
                </span>
              </div>
              <div className="px-5 pb-5 pt-[18px]">
                <div className="text-[12px] font-bold tracking-[0.6px] text-gt-green">{story.tag}</div>
                <h3 className="mb-[6px] mt-2 font-serif text-[18px] font-semibold text-gt-navy">{story.title}</h3>
                <p className="text-[13.5px] text-gt-muted">{story.desc}</p>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
