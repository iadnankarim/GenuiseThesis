"use client";

import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { navLinks } from "@/lib/gt-data";
import { cn } from "@/lib/utils";

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a href="#top" className="flex shrink-0 items-center gap-[10px]">
      <span
        className={cn(
          "flex h-[34px] w-[34px] items-center justify-center rounded-xl font-serif text-[19px] font-semibold transition-colors duration-300",
          scrolled ? "bg-gt-navy text-white" : "bg-white text-gt-navy",
        )}
      >
        G
      </span>
      <span
        className={cn(
          "font-serif text-[20px] font-semibold tracking-[-0.2px] transition-colors duration-300",
          scrolled ? "text-gt-navy" : "text-white",
        )}
      >
        Genius<span className="text-gt-green">Thesis</span>
      </span>
    </a>
  );
}

/** Transparent bar spread over the hero that condenses into a floating pill on scroll. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));
  // Sync on mount in case the page loads already scrolled.
  useEffect(() => setScrolled(scrollY.get() > 24), [scrollY]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 max-[520px]:px-3">
      <div
        className={cn(
          "mx-auto flex items-center justify-between gap-6 transition-all duration-300 ease-out",
          scrolled
            ? "mt-3 h-[60px] max-w-[1180px] rounded-2xl border border-black/[0.06] bg-white/90 pl-5 pr-3 shadow-[0_12px_34px_-14px_rgba(12,28,46,0.3)] backdrop-blur-[14px] backdrop-saturate-[180%]"
            : "mt-2 h-[78px] max-w-[1280px] rounded-2xl border border-transparent bg-transparent px-2",
        )}
      >
        <Logo scrolled={scrolled} />

        <nav
          className={cn(
            "flex items-center gap-[30px] text-[15px] font-medium transition-colors duration-300 max-[980px]:hidden",
            scrolled ? "text-[#3a4751]" : "text-white/90",
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn("transition-colors", scrolled ? "hover:text-gt-green" : "hover:text-white")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-[12px]">
          <a
            href="#quote"
            className={cn(
              "text-[15px] font-semibold transition-colors duration-300 max-[980px]:hidden",
              scrolled ? "text-gt-navy hover:text-gt-green" : "text-white hover:text-white/80",
            )}
          >
            Sign in
          </a>
          <a
            href="#quote"
            className="whitespace-nowrap rounded-full bg-gt-green px-[20px] py-[11px] text-[15px] font-semibold text-white shadow-[0_6px_16px_-4px_rgba(21,121,92,0.5)] transition-colors hover:bg-gt-green-dark max-[520px]:hidden"
          >
            Get a free quote
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className={cn(
              "hidden h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full border transition-colors duration-300 max-[980px]:inline-flex",
              scrolled ? "border-[#e0e5ea] bg-white text-gt-navy" : "border-white/30 bg-white/10 text-white",
            )}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 flex max-w-[1180px] flex-col rounded-2xl border border-[#e7ebef] bg-white p-3 shadow-[0_18px_40px_-16px_rgba(12,28,46,0.35)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-[11px] font-medium text-gt-ink transition-colors hover:bg-gt-mist hover:text-gt-green"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-gt-green py-3 text-center font-semibold text-white"
          >
            Get a free quote
          </a>
        </div>
      )}
    </header>
  );
}
