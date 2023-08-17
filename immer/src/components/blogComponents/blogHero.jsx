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
    className='sm:min-h-[75vh] flex items-stretch min-w-full w-screen'
    style={{
      backgroundImage: `url(${BlogHeroImg[0].img})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
    >
      <div className="h-full self-end p-8 sm:p-12 lg:pl-20 lg:pr-20 flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-[45%] flex flex-col gap-10">
          <span className="bg-white h-[1px] w-full flex"></span>
          <h1 className="text-[15vw] sm:text-[12vw] md:text-[8vw] leading-[1.2] text-[#D9D9D9] drop-shadow-[2px_2px_0px_rgba(255,108,0,0.5)] font-bold">Explore the world of <span className="text-[#FF6C00]">immer</span></h1>
          <span className="bg-white h-[1px] w-full flex opacity-50"></span>
        </div>
        <div className="md:w-[45%]">
          <Image
            src={BlogHeroImg[1].img}
            width={562}
            height={337}
            id={BlogHeroImg[1].id}
            alt={BlogHeroImg[1].id}
          />
          <div className="mt-5 flex flex-col gap-4">
            <p className="text-[#A9A9A9] text-xs md:text-sm">MM/DD/YY</p>
            <p className="text-[#FF6C00] text-base md:text-lg">Gorem ipsum dolor sit amet, consecteur adipiscing elit.</p>
            <p className="text-[#FFFFFF] text-xs md:text-sm">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogHero;
