import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import LeanAgileIntro from "@/components/lean-agile-intro";
import TrainingPrograms from "@/components/training-programs";
import SuccessMetrics from "@/components/success-metrics";
import Testimonials from "@/components/testimonials";
import Workshops from "@/components/workshops";
import TeamStruggles from "@/components/team-struggles";
import FAQ from "@/components/faq";
import AboutGary from "@/components/about-gary";
import NewsletterCTA from "@/components/newsletter-cta";
import Footer from "@/components/footer";
import PWAInstall from "@/components/pwa-install";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PWAInstall />
      <Navigation />
      <Hero />
      <LeanAgileIntro />
      <TrainingPrograms />
      <SuccessMetrics />
      <Testimonials />
      <Workshops />
      <TeamStruggles />
      <FAQ />
      <AboutGary />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}
