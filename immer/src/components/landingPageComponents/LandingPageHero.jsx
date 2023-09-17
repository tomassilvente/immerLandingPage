import React from "react";

const LandingPageHero = () => {
  return (
    <div
      className="w-full min-h-[100vh] md:min-h-[20vh] lg:min-h-[60vh]  pt-24 md:pt-32 lg:pt-40 sm:flex justify-between
       lg:justify-around items-center  py-8 sm:py-20 bg-[#ffffff] bg-homepage-mobile lg:pl-20 lg:pr-20 px-5 sm:px-20
       bg-cover bg-center sm:bg-homepage-hero sm:bg-[length:90vw_45rem] bg-no-repeat sm:bg-left"
    >
      <div className="sm:w-[45%] flex flex-col gap-8">
        <h1
          className="text-4xl text-white leading-snug sm:leading-none sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
         sm:text-black font-bold"
        >
          Empower Your Entertainment Journey
        </h1>
        <p className="hidden sm:block text-[#747474] text-lg lg:text-xl xl:text-2xl">
          Connect, Create, Control with immer
        </p>
      </div>
      <div className="hidden sm:block w-[45%]">
        <img src="/assets/LandingPage/home-hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default LandingPageHero;
