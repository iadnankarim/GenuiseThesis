/** Animated ambient backdrop for the dark hero: faint grid + drifting brand glows. */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* faint grid, masked to fade out toward the edges */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent_75%)]" />

      {/* drifting brand glows */}
      <div className="absolute -right-20 -top-[120px] h-[420px] w-[420px] animate-[gt-drift_14s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(21,121,92,0.30),transparent_70%)] motion-reduce:animate-none" />
      <div className="absolute -bottom-[160px] -left-[120px] h-[380px] w-[380px] animate-[gt-drift_18s_ease-in-out_infinite_reverse] rounded-full bg-[radial-gradient(circle,rgba(63,196,154,0.12),transparent_70%)] motion-reduce:animate-none" />

      {/* thin mint highlight line along the top */}
      <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gt-mint/30 to-transparent" />
    </div>
  );
}
