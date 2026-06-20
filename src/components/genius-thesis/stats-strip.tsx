"use client";

import { stats, type Stat } from "@/lib/gt-data";
import { useCountUp } from "@/lib/use-count-up";

function StatItem({ stat, withBorder }: { stat: Stat; withBorder: boolean }) {
  const { ref, formatted } = useCountUp(stat.target, {
    decimals: stat.decimals,
    comma: stat.comma,
    suffix: stat.suffix,
  });

  return (
    <div className={`text-center ${withBorder ? "border-l border-[#e2e7eb] max-[760px]:[&:nth-child(3)]:border-l-0" : ""}`}>
      <div ref={ref} className="font-serif text-[32px] font-semibold text-gt-navy">
        {formatted}
      </div>
      <div className="mt-0.5 text-[14px] text-[#6b7884]">{stat.label}</div>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="border-b border-[#eaeef1] bg-gt-mist">
      <div className="mx-auto grid max-w-[1180px] grid-cols-4 gap-6 px-7 py-[30px] max-[760px]:grid-cols-2 max-[760px]:gap-y-6">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} withBorder={i > 0} />
        ))}
      </div>
    </section>
  );
}
