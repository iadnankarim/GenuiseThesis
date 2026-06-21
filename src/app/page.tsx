import { ScrollProgress } from "@/components/genius-thesis/scroll-progress";
import { TopBar } from "@/components/genius-thesis/top-bar";
import { SiteHeader } from "@/components/genius-thesis/site-header";
import { Hero } from "@/components/genius-thesis/hero";
import { StatsStrip } from "@/components/genius-thesis/stats-strip";
import { About } from "@/components/genius-thesis/about";
import { Services } from "@/components/genius-thesis/services";
import { WhyUs } from "@/components/genius-thesis/why-us";
import { Process } from "@/components/genius-thesis/process";
import { SuccessStories } from "@/components/genius-thesis/success-stories";
import { Testimonials } from "@/components/genius-thesis/testimonials";
import { Faq } from "@/components/genius-thesis/faq";
import { LeadCta } from "@/components/genius-thesis/lead-cta";
import { SiteFooter } from "@/components/genius-thesis/site-footer";

export default function Home() {
  return (
    <div className="bg-white font-sans leading-[1.55] text-gt-ink antialiased">
      <ScrollProgress />
      <TopBar />
      <SiteHeader />
      <main id="top">
        <Hero />
        <StatsStrip />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <SuccessStories />
        <Testimonials />
        <Faq />
        <LeadCta />
      </main>
      <SiteFooter />
    </div>
  );
}
