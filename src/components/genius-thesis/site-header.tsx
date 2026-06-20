"use client";

import { useState } from "react";
import { navLinks } from "@/lib/gt-data";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-[11px]">
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-gt-navy font-serif text-[19px] font-semibold text-white">
        G
      </span>
      <span className="font-serif text-[21px] font-semibold tracking-[-0.2px] text-gt-navy">
        Genius<span className="text-gt-green">Thesis</span>
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7ebef] bg-white/[0.92] backdrop-blur-[10px] backdrop-saturate-[180%]">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-7">
        <Logo />

        <nav className="flex items-center gap-[30px] text-[15px] font-medium text-[#3a4751] max-[980px]:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gt-green">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-[14px]">
          <a href="#quote" className="text-[15px] font-semibold text-gt-navy max-[980px]:hidden">
            Sign in
          </a>
          <a
            href="#quote"
            className="whitespace-nowrap rounded-[9px] bg-gt-green px-[18px] py-[10px] text-[15px] font-semibold text-white shadow-[0_1px_2px_rgba(12,28,46,0.18)] transition-colors hover:bg-gt-green-dark"
          >
            Get a free quote
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="hidden h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[9px] border border-[#e0e5ea] bg-white max-[980px]:inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0c1c2e" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-[#e7ebef] bg-white px-7 pb-[18px] pt-[10px] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-[#f0f3f5] py-[10px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={closeMenu}
            className="mt-[10px] rounded-[9px] bg-gt-green py-3 text-center font-semibold text-white"
          >
            Get a free quote
          </a>
        </div>
      )}
    </header>
  );
}
