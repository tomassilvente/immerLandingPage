import React from 'react';
import ChallengeCard from './challengeCard';

const MainContentImg = [
    {
      id: "hero-1",
      img: "/assets/LandingPage/home-content-bg.png",
    },
    {
      id: "hero-2",
      img: "/assets/LandingPage/home-content-bg-r.png",
    },
    {
        id: "hero-3",
        img: "/assets/LandingPage/what-is-entertainment.png",
      }
  ];

const MainContent = () => {
  return (
    <div
      className="py-28 w-full"
      style={{
        backgroundImage: `url(${MainContentImg[0].img}), url(${MainContentImg[1].img}), url(${MainContentImg[0].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top, right center, left bottom",
        backgroundSize: "45vw 50rem",
      }}
    >
      <div className="lg:pl-28 lg:pr-28 px-5 sm:px-20">
        <div className="w-full flex flex-col-reverse sm:flex-row gap-8 items-center">
          <div className="sm:w-[40%]">
            <img
              src="/assets/LandingPage/what-is-entertainment.png"
              alt="what is entertainment"
              className="rounded-lg w-full"
            />
          </div>
          <div className="sm:w-[60%] flex flex-col">
            <div className="mb-4">
              <h2 className="text-[#232323] font-bold text-2xl xl:text-4xl tracking-[0.4%]">
                What is Entertainment?
              </h2>
              <div className="mt-5 w-[75vw] sm:w-[35vw] h-3 bg-gradient-to-r from-[#FF6C00] to-[#FF6C0000]"></div>
            </div>
            <p className="text-[#555555] text-justify font-normal text-sm xl:text-base sm:pr-28 leading-normal">
              Entertainment serves as the very pulse of human connection — a
              harmonious interplay of instances that elevate, motivate, and
              deeply touch our sentiments.
            </p>
            <p className="mt-4 text-[#555555] text-justify font-normal text-sm xl:text-base sm:pr-28 leading-normal">
              Here at Immer, we don't merely engage in entertainment; we
              specialize in crafting indelible experiences that forge a
              meaningful connection between artists and their audiences.
            </p>
            
          </div>
        </div>
        <div className="mt-16">
          <p className="text-[#555555] text-justify sm:tracking-wider text-sm sm:text-base xl:text-lg sm:pr-28">
            Challenges in Today's Entertainment Landscape:
          </p>
          <div id='MainContent' className="mt-4 sm:mt-8 flex flex-col gap-2 sm:gap-5">
            <h2 className="text-[#232323] font-bold text-2xl xl:text-4xl tracking-[0.4%]">
              Live Events Today
            </h2>
            <div className="mt-5 w-[75vw] sm:w-[45vw] h-3 bg-gradient-to-r from-[#FF6C00] to-[#FF6C0000]"></div>
            <p className="text-[#555555] text-justify font-normal text-sm xl:text-base pr-28 leading-normal">
              Traditional event planning ties down artists and frustrates fans.
              It's time to free creativity and offer genuine experiences.
            </p>
            
          </div>
        </div>
        <div className="mt-24 px-5 sm:px-14 lg:px-20 xl:px-28 flex flex-col gap-10">
          <ChallengeCard
            img="/assets/LandingPage/high-prices.png"
            title="High Prices"
            desc="Inflated ticket prices due to markups imposed by promoters, hindering their ability to    support their favorite entertainers directly."
            flexOption="row"
          />
          <ChallengeCard
            img="/assets/LandingPage/limited-access.png"
            title="Limited Access"
            desc="Real entertainment shouldn&#39;t be scarce. Let&#39;s unlock genuine experiences for artists and fans alike."
            flexOption="row-reverse"
          />
          <ChallengeCard
            img="/assets/LandingPage/fragmented-experiences.png"
            title="Fragmented Experiences"
            desc="Entertainment deserves seamless experiences, not fragmented processes."
            flexOption="row"
          />
          <ChallengeCard
            img="/assets/LandingPage/minimal-interaction.png"
            title="Minimal Interaction"
            desc="True entertainment thrives on interaction, not on outdated, limiting systems."
            flexOption="row-reverse"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent