"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/pricing";
import { serviceOptions } from "@/lib/gt-data";

interface Lead {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const fieldClass =
  "w-full rounded-[9px] border border-[#dce2e8] px-3 py-[11px] text-[14px] font-[inherit] focus:border-gt-green focus:outline-none focus:ring-[3px] focus:ring-gt-green/[0.14]";
const labelText = "mb-[6px] block text-[13px] font-semibold text-[#3a4751]";

const guarantees = [
  "Free quote · no card, no commitment",
  "100% original, Turnitin-checked work",
  "Money-back guarantee if we miss the brief",
];

export function LeadCta() {
  const [lead, setLead] = useState<Lead>({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof Lead) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setLead((l) => ({ ...l, [field]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.name.trim()) return setError("Please enter your name.");
    if (!isValidEmail(lead.email)) return setError("Please enter a valid email address.");
    if (!lead.subject) return setError("Please choose the service you need.");
    if (!lead.message.trim()) return setError("Please add a few details about your brief.");
    setError("");
    setSent(true);
    // TODO: swap this for a real API route / server action to email the lead.
  };

  return (
    <section id="contact" className="bg-[linear-gradient(180deg,#0c1c2e,#0a1726)] py-[78px] max-[520px]:py-[52px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 items-center gap-14 px-7 max-[980px]:grid-cols-1">
        <div>
          <h2 className="m-0 font-serif text-[40px] font-semibold leading-[1.12] tracking-[-0.6px] text-white">
            Ready to hand off the hard part?
          </h2>
          <p className="mb-[26px] mt-[18px] max-w-[480px] text-[17px] text-[#bccbd8]">
            Send us your brief and get a no-obligation quote within the hour. Pay only when you&apos;re happy to proceed.
          </p>
          <div className="flex flex-col gap-[14px]">
            {guarantees.map((g) => (
              <div key={g} className="flex items-center gap-3 text-[15px] text-[#dbe6ef]">
                <span className="text-[18px] text-gt-mint">✓</span> {g}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-7 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.6)]">
          {sent ? (
            <div className="px-2.5 py-[30px] text-center">
              <div className="mx-auto mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#e7f3ee]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15795c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="m-0 font-serif text-[24px] font-semibold text-gt-navy">Thank you — request received.</h3>
              <p className="mt-2.5 text-[15px] text-gt-muted">
                A specialist will email your quote shortly. Check your inbox (and spam, just in case).
              </p>
            </div>
          ) : (
            <div>
              <h3 className="m-0 mb-4 font-serif text-[22px] font-semibold text-gt-navy">Request your free quote</h3>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className={labelText}>Full name</span>
                    <input value={lead.name} onChange={update("name")} placeholder="Your name" className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className={labelText}>Email</span>
                    <input type="email" value={lead.email} onChange={update("email")} placeholder="you@university.ac.uk" className={fieldClass} />
                  </label>
                </div>
                <label className="mt-3 block">
                  <span className={labelText}>Service needed</span>
                  <select value={lead.subject} onChange={update("subject")} className={`${fieldClass} bg-white`}>
                    <option value="">Choose a service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mt-3 block">
                  <span className={labelText}>Brief / details</span>
                  <textarea
                    value={lead.message}
                    onChange={update("message")}
                    rows={3}
                    placeholder="Subject, level, word count and deadline…"
                    className={`${fieldClass} resize-y`}
                  />
                </label>

                {error && <p className="mb-0 mt-[11px] text-[13px] font-medium text-[#c0392b]">{error}</p>}

                <button
                  type="submit"
                  className="mt-4 w-full cursor-pointer rounded-[10px] bg-gt-green py-[14px] text-[15.5px] font-semibold text-white transition-colors hover:bg-gt-green-dark"
                >
                  Send my request →
                </button>
                <p className="mt-3 text-center text-[12px] text-[#9aa6b0]">
                  By submitting you agree to our terms &amp; privacy policy. We never share your details.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
