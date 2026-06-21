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
  image: string;
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
  icon: string; // SVG path data
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
  { num: "01", title: "Subject-matter experts", desc: "Writers with verified Master's and PhD credentials in your exact field.", icon: "M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 2 6 2s6-1 6-2v-5" },
  { num: "02", title: "100% original work", desc: "Written from scratch with Turnitin similarity reports available on request.", icon: "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6zM9 12l2 2 4-4" },
  { num: "03", title: "Always on time", desc: "98% on-time delivery — dependable even on 24-hour turnarounds.", icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2" },
  { num: "04", title: "Transparent pricing", desc: "A clear quote upfront with no hidden fees — ever.", icon: "M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V5a2 2 0 0 1 2-2h6.6a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8zM7.5 7.5h.01" },
  { num: "05", title: "Free revisions", desc: "We refine the work against your tutor's feedback at no extra cost.", icon: "M21 12a9 9 0 1 1-3-6.7M21 3v5h-5" },
  { num: "06", title: "Total confidentiality", desc: "Your identity stays private and your data stays encrypted and secure.", icon: "M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3" },
];

export const universities = [
  "Oxford",
  "Cambridge",
  "UCL",
  "Manchester",
  "Edinburgh",
  "Leeds",
  "Bristol",
  "Warwick",
  "Birmingham",
  "Glasgow",
  "Nottingham",
  "Durham",
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
  { name: "Aisha R.", role: "MSc Marketing · Manchester", initials: "AR", image: "https://randomuser.me/api/portraits/women/68.jpg", text: "My dissertation writer understood the brief better than I did. Clear structure, solid sources, and delivered three days early." },
  { name: "Daniel O.", role: "LLB Law · Leeds", initials: "DO", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "I was drowning in deadlines. They turned around two essays in 48 hours and both came back with strong marks." },
  { name: "Priya S.", role: "BSc Nursing · Birmingham", initials: "PS", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "Genuinely helpful from the first message. They explained the approach and kept me updated the whole way through." },
  { name: "Tomáš K.", role: "MBA · London", initials: "TK", image: "https://randomuser.me/api/portraits/men/46.jpg", text: "Professional, confidential and on time. The quote I was given was exactly what I paid — no surprises." },
  { name: "Grace W.", role: "BA History · Bristol", initials: "GW", image: "https://randomuser.me/api/portraits/women/65.jpg", text: "The proofreading service tightened my argument without changing my voice. Worth every penny." },
  { name: "Mohammed A.", role: "PhD Engineering · Glasgow", initials: "MA", image: "https://randomuser.me/api/portraits/men/52.jpg", text: "Rigorous methodology support that got my thesis past a tough viva. I couldn't have done it without them." },
  { name: "Chloe M.", role: "MSc Psychology · Edinburgh", initials: "CM", image: "https://randomuser.me/api/portraits/women/90.jpg", text: "They matched me with a writer who actually knew my field. The literature review was sharper than anything I'd have managed alone." },
  { name: "James T.", role: "BSc Computer Science · Warwick", initials: "JT", image: "https://randomuser.me/api/portraits/men/76.jpg", text: "Fast, clear and reliable. The code appendix and report were both spot on, and the revisions were turned around overnight." },
  { name: "Fatima Z.", role: "MA Education · Nottingham", initials: "FZ", image: "https://randomuser.me/api/portraits/women/12.jpg", text: "Stress-free from start to finish. Transparent pricing, regular updates, and a final piece I was genuinely proud to submit." },
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
