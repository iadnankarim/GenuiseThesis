export function TopBar() {
  return (
    <div className="bg-gt-navy-deep text-[13px] text-[#cdd8e2] max-[760px]:hidden">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-7 py-2">
        <span className="tracking-[0.2px]">
          Rated <strong className="text-white">4.8/5</strong> by 12,000+ UK students · Plagiarism-free, money-back guarantee
        </span>
        <span className="flex items-center gap-5">
          <a href="mailto:hello@geniusthesis.co.uk" className="text-[#cdd8e2] transition-colors hover:text-white">
            hello@geniusthesis.co.uk
          </a>
          <a href="tel:+442080001234" className="text-[#cdd8e2] transition-colors hover:text-white">
            +44 20 8000 1234
          </a>
        </span>
      </div>
    </div>
  );
}
