const socials = [
  { label: "LinkedIn", path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.97-1.8-2.97-1.8 0-2.08 1.4-2.08 2.87V21h-4z" },
  { label: "X", path: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5L18.9 2zm-1.2 18h1.9L7.1 4H5z" },
  { label: "WhatsApp", path: "M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 0 16 8 8 0 0 1-4-1l-.3-.2-2.4.6.6-2.3-.2-.4A8 8 0 0 1 12 4zm-2.7 3.6c-.2 0-.5 0-.7.4-.2.4-.9 1.4-.9 2.5s.9 2.4 1 2.5c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.5.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.2l-.7-.3s-1.2-.6-1.4-.6c-.2-.1-.3-.1-.5.1l-.7.9c-.1.1-.2.1-.4 0l-.6-.3a5 5 0 0 1-1.6-1.6c-.1-.2 0-.3.1-.4l.4-.4.2-.4v-.4l-.7-1.6c-.1-.4-.3-.4-.4-.4z" },
];

const serviceLinks = ["Assignment writing", "Essay writing", "Dissertation writing", "Thesis writing", "Editing & proofreading"];
const companyLinks = [
  { label: "About us", href: "#about" },
  { label: "Why choose us", href: "#why" },
  { label: "Success stories", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-gt-navy-deep text-[#aab8c5]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 px-7 pt-14 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1">
        <div>
          <a href="#top" className="mb-[14px] flex items-center gap-[11px]">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-gt-green font-serif text-[19px] font-semibold text-white">
              G
            </span>
            <span className="font-serif text-[21px] font-semibold text-white">
              Genius<span className="text-gt-mint">Thesis</span>
            </span>
          </a>
          <p className="mb-[18px] max-w-[300px] text-[14px] leading-[1.6] text-[#8da0b0]">
            Expert UK academic writing support — original, confidential and delivered on time.
          </p>
          <div className="flex gap-[10px]">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#top"
                aria-label={s.label}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-white/[0.14] transition-colors hover:bg-white/[0.08]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#cdd8e2">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-[14px] text-[13px] font-bold tracking-[0.6px] text-white">SERVICES</div>
          <div className="flex flex-col gap-[10px] text-[14px]">
            {serviceLinks.map((label) => (
              <a key={label} href="#services" className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-[14px] text-[13px] font-bold tracking-[0.6px] text-white">COMPANY</div>
          <div className="flex flex-col gap-[10px] text-[14px]">
            {companyLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-[14px] text-[13px] font-bold tracking-[0.6px] text-white">GET IN TOUCH</div>
          <div className="flex flex-col gap-[10px] text-[14px]">
            <a href="mailto:hello@geniusthesis.co.uk" className="transition-colors hover:text-white">
              hello@geniusthesis.co.uk
            </a>
            <a href="tel:+442080001234" className="transition-colors hover:text-white">
              +44 20 8000 1234
            </a>
            <span className="text-[#8da0b0]">Mon–Sun · 24/7 support</span>
            <span className="text-[#8da0b0]">London · United Kingdom</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1180px] flex-wrap items-center justify-between gap-3 border-t border-white/10 px-7 py-6 text-[13px] text-[#7e90a0]">
        <span>© 2026 Genius Thesis Ltd. All rights reserved.</span>
        <span className="flex gap-[22px]">
          <a href="#top" className="transition-colors hover:text-white">Privacy policy</a>
          <a href="#top" className="transition-colors hover:text-white">Terms of service</a>
          <a href="#top" className="transition-colors hover:text-white">Academic integrity</a>
        </span>
      </div>
    </footer>
  );
}
