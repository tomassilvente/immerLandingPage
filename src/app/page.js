import AboutSection from "@/components/landingPageComponents/aboutSection";
import LandingPageHero from "@/components/landingPageComponents/LandingPageHero";
import LandingPageCTA from "@/components/landingPageComponents/landingPageCTA";
import MainContent from "@/components/landingPageComponents/mainContent";
import ArticlesSection from "@/components/landingPageComponents/articlesSection";
import ImmerFooter from "@/components/Footer";
import ImmerCTA from "@/components/CTA";
import ImmerHeader from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
      <ImmerHeader
        iconUrl={"/immer logo_orange.svg"}
        immerIconLink="/"
        iconWidth={120}
        iconHeight={100}
      />
      <LandingPageHero />
      <LandingPageCTA />
      <MainContent />
      <AboutSection />
      <ArticlesSection />
      <ImmerCTA />
      <ImmerFooter />
    </div>
  );
}
