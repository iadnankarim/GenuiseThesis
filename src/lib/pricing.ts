export interface QuoteInput {
  service: string;
  level: string;
  pages: string;
  deadline: string;
  email: string;
}

export interface Estimate {
  low: number;
  high: number;
  summary: string;
}

const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const BASE_RATE: Record<string, number> = { undergrad: 11, masters: 15, phd: 20 };
const DEADLINE_MULT: Record<string, number> = { "14": 1, "7": 1.2, "3": 1.45, "1": 1.9 };
const LEVEL_LABEL: Record<string, string> = {
  undergrad: "Undergraduate",
  masters: "Master's",
  phd: "PhD",
};

/**
 * Validate the quote form and compute a price range.
 * Returns either an `error` string or an `estimate`.
 */
export function calculateQuote(q: QuoteInput): { error: string } | { estimate: Estimate } {
  const pages = parseInt(q.pages, 10);
  if (!q.service) return { error: "Please choose a service." };
  if (!q.level) return { error: "Please select an academic level." };
  if (!pages || pages < 1) return { error: "Please enter the number of pages." };
  if (!q.deadline) return { error: "Please choose a deadline." };
  if (!emailRe.test(q.email)) return { error: "Please enter a valid email address." };

  const base = BASE_RATE[q.level];
  const mult = DEADLINE_MULT[q.deadline];
  const editingFactor = q.service === "Editing & Proofreading" ? 0.45 : 1;
  const mid = pages * base * mult * editingFactor;
  const low = Math.max(20, Math.round(mid * 0.92));
  const high = Math.round(mid * 1.14);
  const summary = `${LEVEL_LABEL[q.level]} ${q.service.toLowerCase()}, ${pages} page${pages > 1 ? "s" : ""}.`;

  return { estimate: { low, high, summary } };
}

export function isValidEmail(value: string): boolean {
  return emailRe.test(value);
}
