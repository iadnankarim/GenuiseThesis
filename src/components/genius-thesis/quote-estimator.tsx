"use client";

import { useState } from "react";
import { calculateQuote, type Estimate, type QuoteInput } from "@/lib/pricing";

const fieldClass =
  "w-full rounded-[9px] border border-[#dce2e8] px-3 py-[11px] text-[14px] font-[inherit] focus:border-gt-green focus:outline-none focus:ring-[3px] focus:ring-gt-green/[0.14]";
const labelText = "mb-[6px] block text-[13px] font-semibold text-[#3a4751]";

export function QuoteEstimator() {
  const [quote, setQuote] = useState<QuoteInput>({
    service: "",
    level: "",
    pages: "",
    deadline: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  const update =
    (field: keyof QuoteInput) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setQuote((q) => ({ ...q, [field]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateQuote(quote);
    if ("error" in result) {
      setError(result.error);
      setEstimate(null);
    } else {
      setError("");
      setEstimate(result.estimate);
    }
  };

  return (
    <div
      id="quote"
      className="rounded-2xl border border-white/60 bg-white p-[26px] text-gt-ink shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)]"
    >
      <div className="mb-1 flex items-center justify-between">
        <h2 className="m-0 font-serif text-[21px] font-semibold text-gt-navy">Get an instant estimate</h2>
        <span className="rounded-[6px] bg-[#e7f3ee] px-[9px] py-1 text-[12px] font-semibold text-gt-green">
          Free · 30 sec
        </span>
      </div>
      <p className="mb-4 mt-0 text-[13.5px] text-[#6b7884]">No payment or sign-up required to see your price.</p>

      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className={labelText}>Service</span>
            <select value={quote.service} onChange={update("service")} className={`${fieldClass} bg-white`}>
              <option value="">Choose…</option>
              <option value="Assignment Writing">Assignment writing</option>
              <option value="Essay Writing">Essay writing</option>
              <option value="Dissertation Writing">Dissertation writing</option>
              <option value="Thesis Writing">Thesis writing</option>
              <option value="Coursework Writing">Coursework writing</option>
              <option value="Project Writing">Project / capstone</option>
              <option value="Editing & Proofreading">Editing & proofreading</option>
            </select>
          </label>
          <label className="block">
            <span className={labelText}>Academic level</span>
            <select value={quote.level} onChange={update("level")} className={`${fieldClass} bg-white`}>
              <option value="">Choose…</option>
              <option value="undergrad">Undergraduate</option>
              <option value="masters">Master&apos;s</option>
              <option value="phd">PhD</option>
            </select>
          </label>
          <label className="block">
            <span className={labelText}>Pages (≈275 wds)</span>
            <input
              type="number"
              min={1}
              max={400}
              value={quote.pages}
              onChange={update("pages")}
              placeholder="e.g. 8"
              className={fieldClass}
            />
          </label>
          <label className="block">
            <span className={labelText}>Deadline</span>
            <select value={quote.deadline} onChange={update("deadline")} className={`${fieldClass} bg-white`}>
              <option value="">Choose…</option>
              <option value="14">14+ days</option>
              <option value="7">7 days</option>
              <option value="3">3 days</option>
              <option value="1">24 hours</option>
            </select>
          </label>
        </div>

        <label className="mt-3 block">
          <span className={labelText}>Email for your quote</span>
          <input
            type="email"
            value={quote.email}
            onChange={update("email")}
            placeholder="you@university.ac.uk"
            className={fieldClass}
          />
        </label>

        {error && <p className="mb-0 mt-[11px] text-[13px] font-medium text-[#c0392b]">{error}</p>}

        <button
          type="submit"
          className="mt-4 w-full cursor-pointer rounded-[10px] bg-gt-navy py-[14px] text-[15.5px] font-semibold text-white transition-colors hover:bg-gt-green"
        >
          Calculate my price →
        </button>
      </form>

      {estimate && (
        <div className="mt-4 rounded-[11px] border border-[#bfe0d2] bg-[#e7f3ee] p-4">
          <div className="text-[13px] font-semibold tracking-[0.3px] text-[#0f6249]">YOUR ESTIMATED PRICE</div>
          <div className="mt-0.5 font-serif text-[30px] font-semibold text-gt-navy">
            £{estimate.low} – £{estimate.high}
          </div>
          <p className="mb-0 mt-1.5 text-[13px] text-[#3a4751]">
            {estimate.summary} A specialist will confirm the final quote by email — no obligation.
          </p>
        </div>
      )}
    </div>
  );
}
