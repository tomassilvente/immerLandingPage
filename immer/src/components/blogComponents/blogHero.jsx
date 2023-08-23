import Image from "next/image";
import React from "react";

const BlogHeroImg = [
  {
    id: "hero-1",
    img: "/assets/blog/blog-hero-bg.png",
  },
  {
    id: "hero-2",
    img: "/assets/blog/blog-hero-guitar.png",
  }
];

const BlogHero = () => {

  return (
    <div
      className="sm:min-h-[full] flex items-stretch min-w-full pt-24"
      style={{
        backgroundImage: `url(${BlogHeroImg[0].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="h-full self-center gap-10 p-8 sm:p-12 sm:py-36 lg:pl-20 lg:pr-20 flex flex-col
        md:flex-row justify-around md:gap-0 md:items-center"
      >
        <div className="md:w-[40%] flex flex-col gap-10">
          <h1 className="text-[15vw] sm:text-[11vw] md:text-[7vw] leading-[1.2] text-[#D9D9D9] drop-shadow-[2px_2px_0px_rgba(255,108,0,0.5)] font-bold">
            Explore <br/> the world of <span className="text-[#FF6C00]">immer</span>
          </h1> 
        </div>
        <div className="md:w-[45%]">
          <Image
            src={BlogHeroImg[1].img}
            width={460}
            height={260}
            id={BlogHeroImg[1].id}
            alt={BlogHeroImg[1].id}
          />
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-[#A9A9A9] text-xs md:text-sm">MM/DD/YY</p>
            <p className="text-[#FF6C00] text-sm md:text-base">
              Gorem ipsum dolor sit amet, consecteur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
