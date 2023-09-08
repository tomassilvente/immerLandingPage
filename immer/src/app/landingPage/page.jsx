"use client";
import React from 'react';
import AboutSection from '@/components/landingPageComponents/aboutSection';
import LandingPageHero from '@/components/landingPageComponents/LandingPageHero';
import LandingPageCTA from '@/components/landingPageComponents/landingPageCTA';
import MainContent from '@/components/landingPageComponents/mainContent';


const LandingPage = () => {

  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
      <div className='py-5 font-bold text-2xl text-center bg-blue-700 w-full'>Navbar</div>
      <LandingPageHero />
      <LandingPageCTA />
      <MainContent />
      <AboutSection />
      <div className='py-5 font-bold text-2xl text-center bg-yellow-700 w-full'>Article cards</div>
      <div className='py-5 font-bold text-2xl text-center bg-green-700 w-full'>Footer</div>
    </div>
  )
}
  
export default LandingPage