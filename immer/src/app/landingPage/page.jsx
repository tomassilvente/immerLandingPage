"use client";

import React from "react";
import AboutSection from "@/components/landingPageComponents/aboutSection";
import LandingPageHero from "@/components/landingPageComponents/LandingPageHero";
import LandingPageCTA from "@/components/landingPageComponents/landingPageCTA";
import MainContent from "@/components/landingPageComponents/mainContent";
import BlogFooter from "@/components/blogComponents/blogFooter";
import BlogHeader from "@/components/blogComponents/blogHeader";
import BlogCTA from "@/components/blogComponents/blogCTA";
import ArticlesSection from "@/components/landingPageComponents/articlesSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
      <BlogHeader iconUrl={"/immer logo_orange.svg"} immerIconLink={"/"} iconWidth={135} iconHeight={100}/>
      <LandingPageHero />
      <LandingPageCTA />
      <MainContent />
      <AboutSection />
      <ArticlesSection />
      <BlogCTA />
      <BlogFooter />
    </div>
  );
};

export default LandingPage;
