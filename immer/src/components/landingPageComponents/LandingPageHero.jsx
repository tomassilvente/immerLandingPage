import React from 'react';
import HeroImg from '/public/assets/LandingPage/home-hero.png';

const LandingPageHero = () => {
  return (
    <div className='w-full min-h-[65vh] sm:min-h-[50vh] sm:flex justify-between lg:justify-around items-center px-5 sm:px-16 py-8 sm:py-20 bg-[#ffffff] bg-homepage-mobile bg-cover bg-center sm:bg-homepage-hero sm:bg-[length:90vw_45rem] bg-no-repeat sm:bg-left'>
        <div className='sm:w-[45%] flex flex-col gap-8'>
            <h1 className='text-[2.7rem] leading-snug sm:leading-none sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:text-black font-bold'>
            Empower Your Entertainment Journey 
            </h1>
            <p className='hidden sm:block text-[#747474] text-lg lg:text-xl xl:text-2xl'>Connect, Create, Control with immer</p>
        </div>
        <div className='hidden sm:block w-[45%]'>
            <img src='/assets/LandingPage/home-hero.png' alt="hero" />
        </div>
    </div>
  )
}

export default LandingPageHero