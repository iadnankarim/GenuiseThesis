export type ServiceCategory = "writing" | "research" | "editing";

export interface Service {
  title: string;
  cat: ServiceCategory;
  desc: string;
  icon: string; // SVG path data
}

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface Feature {
  num: string;
  title: string;
  desc: string;
}

export interface Stat {
  target: number;
  final: string;
  label: string;
  decimals?: number;
  comma?: boolean;
  suffix?: string;
}

export interface SuccessStory {
  gradient: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  tag: string;
  title: string;
  desc: string;
}

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why us" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Success stories" },
  { href: "#faq", label: "FAQ" },
];

export const serviceFilters: { value: "all" | ServiceCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "writing", label: "Writing" },
  { value: "research", label: "Research & theses" },
  { value: "editing", label: "Editing" },
];

export const services: Service[] = [
  {
    title: "Assignment Writing",
    cat: "writing",
    desc: "Custom assignments across 50+ subjects, mapped to your rubric and marking criteria.",
    icon: "M7 3h7l3.5 3.5V21H7zM14 3v4h4M10 12h4M10 16h4",
  },
  {
    title: "Essay Writing",
    cat: "writing",
    desc: "Argument-led essays with a clear thesis, structured evidence and a confident academic tone.",
    icon: "M5 5h14M5 10h14M5 15h9M5 20h6",
  },
  {
    title: "Dissertation Writing",
    cat: "research",
    desc: "End-to-end support from proposal and literature review through to final submission.",
    icon: "M5 4h11a2 2 0 0 1 2 2v15H7a2 2 0 0 0-2 2zM18 19H7",
  },
  {
    title: "Thesis Writing",
    cat: "research",
    desc: "Methodology, data analysis and rigorous argumentation for postgraduate research.",
    icon: "M3 8l9-4 9 4-9 4zM7 11v5c0 1.5 10 1.5 10 0v-5M21 8v5",
  },
  {
    title: "Coursework Writing",
    cat: "writing",
    desc: "Module-aligned coursework that targets learning outcomes and grade boundaries.",
    icon: "M8 4h8M8 4a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2M6 6H4v15h16V6h-2M9 13l2 2 4-4",
  },
  {
    title: "Projects & Capstones",
    cat: "research",
    desc: "Technical, business and capstone projects delivered with full documentation.",
    icon: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  },
  {
    title: "Editing & Proofreading",
    cat: "editing",
    desc: "Line editing, proofreading and originality checks to polish your own draft.",
    icon: "M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",
  },
];

export const stats: Stat[] = [
  { target: 12000, final: "12,000+", label: "Students helped", comma: true, suffix: "+" },
  { target: 520, final: "520+", label: "Verified experts", suffix: "+" },
  { target: 4.8, final: "4.8/5", label: "Average rating", decimals: 1, suffix: "/5" },
  { target: 98, final: "98%", label: "Delivered on time", suffix: "%" },
];

export const features: Feature[] = [
  { num: "01", title: "Subject-matter experts", desc: "Writers with verified Master's and PhD credentials in your exact field." },
  { num: "02", title: "100% original work", desc: "Written from scratch with Turnitin similarity reports available on request." },
  { num: "03", title: "Always on time", desc: "98% on-time delivery — dependable even on 24-hour turnarounds." },
  { num: "04", title: "Transparent pricing", desc: "A clear quote upfront with no hidden fees — ever." },
  { num: "05", title: "Free revisions", desc: "We refine the work against your tutor's feedback at no extra cost." },
  { num: "06", title: "Total confidentiality", desc: "Your identity stays private and your data stays encrypted and secure." },
];

export const processSteps: ProcessStep[] = [
  { title: "Share your brief", desc: "Tell us the subject, level, length and deadline." },
  { title: "Get matched & quoted", desc: "We pair you with the right expert and send a transparent quote." },
  { title: "Track progress", desc: "Message your writer and follow milestones in real time." },
  { title: "Review & revise", desc: "Read the draft and request free revisions if needed." },
  { title: "Submit with confidence", desc: "Receive your final, original work plus an originality report." },
];

export const successStories: SuccessStory[] = [
  {
    gradient: "linear-gradient(135deg,#0c1c2e,#173a55)",
    badge: "First-class",
    badgeBg: "#3fc49a",
    badgeColor: "#06231a",
    tag: "DISSERTATION · BUSINESS MGMT",
    title: "Consumer behaviour in retail tech",
    desc: "12,000 words · 4-week delivery · mixed-methods research design.",
  },
  {
    gradient: "linear-gradient(135deg,#123a30,#1c6b54)",
    badge: "Distinction",
    badgeBg: "#f0b738",
    badgeColor: "#3a2a00",
    tag: "MASTER'S THESIS · PUBLIC HEALTH",
    title: "Vaccine uptake in urban cohorts",
    desc: "18,000 words · statistical analysis · passed viva with distinction.",
  },
  {
    gradient: "linear-gradient(135deg,#2a2140,#4a3a6b)",
    badge: "Grade A",
    badgeBg: "#ffffff",
    badgeColor: "#0c1c2e",
    tag: "COURSEWORK · MECH ENGINEERING",
    title: "Finite element stress analysis",
    desc: "4,500 words · full calculations · annotated CAD appendix.",
  },
];

export const testimonials: Testimonial[] = [
  { name: "Aisha R.", role: "MSc Marketing · Manchester", initials: "AR", text: "My dissertation writer understood the brief better than I did. Clear structure, solid sources, and delivered three days early." },
  { name: "Daniel O.", role: "LLB Law · Leeds", initials: "DO", text: "I was drowning in deadlines. They turned around two essays in 48 hours and both came back with strong marks." },
  { name: "Priya S.", role: "BSc Nursing · Birmingham", initials: "PS", text: "Genuinely helpful from the first message. They explained the approach and kept me updated the whole way through." },
  { name: "Tomáš K.", role: "MBA · London", initials: "TK", text: "Professional, confidential and on time. The quote I was given was exactly what I paid — no surprises." },
  { name: "Grace W.", role: "BA History · Bristol", initials: "GW", text: "The proofreading service tightened my argument without changing my voice. Worth every penny." },
  { name: "Mohammed A.", role: "PhD Engineering · Glasgow", initials: "MA", text: "Rigorous methodology support that got my thesis past a tough viva. I couldn't have done it without them." },
];

export const faqs: Faq[] = [
  { q: "How do you guarantee original, plagiarism-free work?", a: "Every order is written from scratch by a subject expert and passed through Turnitin. We share a similarity report on request, so you can submit with confidence." },
  { q: "Who will be working on my assignment?", a: "We match you with a vetted writer who holds a relevant Master's or PhD in your subject area. You can message them directly throughout the project." },
  { q: "What happens if I need revisions?", a: "Revisions are free within the agreed scope. Share your tutor or examiner feedback and your writer will refine the work until it meets the brief." },
  { q: "How is my privacy protected?", a: "Your identity and order details are strictly confidential. We never share personal information and all payments are processed securely." },
  { q: "Can you meet tight deadlines?", a: "Yes. We deliver shorter briefs in as little as 24 hours. Urgent timelines are always priced transparently before you commit." },
  { q: "What subjects and levels do you cover?", a: "From undergraduate essays to PhD theses across 50+ disciplines including business, law, nursing, engineering and the social sciences." },
];

export const serviceOptions = [
  "Assignment Writing",
  "Essay Writing",
  "Dissertation Writing",
  "Thesis Writing",
  "Coursework Writing",
  "Project Writing",
  "Editing & Proofreading",
];
