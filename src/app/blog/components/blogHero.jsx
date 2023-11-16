import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogHeroImg = [
  {
    id: "hero-1",
    img: "/assets/blog/blog-hero-bg.png",
  },
  {
    id: "hero-2",
    img: "/assets/blog/blog-hero-guitar.png",
  },
];

const BlogHero = () => {
  return (
    <div
      className="sm:min-h-[full] bg-white sm:bg-blogHero flex items-stretch min-w-full pt-10 sm:pt-24"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="h-full self-center gap-10 p-8 sm:p-4 sm:py-36 lg:pl-[120px] lg:pr-[120px] px-5 sm:px-12 flex flex-col
        md:flex-row justify-around md:gap-0 md:items-center"
      >
        <div className="md:w-[40%] flex flex-col gap-10">
          <h1 className="hidden sm:block text-[15vw] sm:text-[11vw] md:text-[7vw] leading-[1.2] text-[#D9D9D9] drop-shadow-[2px_2px_0px_rgba(255,108,0,0.5)] font-bold">
            Explore <br /> the world of{" "}
            <span className="text-[#FF6C00]">immer</span>
          </h1>
          <div className="hidden w-[60%] md:block lg:hidden">
            <Link
              href="/blog"
              className="bg-primary text-center block px-5 py-3 rounded-[8px]"
            >
              <p className="text-white text-sm font-semibold">
                Join the Waitlist
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center sm:block md:w-[45%]">
          <Image
            className="rounded-xl sm:rounded-md"
            src={'/assets/blog/blog-hero-guitar.png'}
            width={460}
            height={260}
            id={BlogHeroImg[1].id}
            alt={BlogHeroImg[1].id}
          />
          <div className="hidden sm:flex mt-3 flex-col gap-2">
            <p className="text-[#A9A9A9] text-xs md:text-sm">MM/DD/YY</p>
            <p className="text-[#FF6C00] text-sm md:text-base">
              Gorem ipsum dolor sit amet, consecteur adipiscing elit.
            </p>
          </div>
          <div className="sm:hidden mt-5 text-center">
            <h2 className="text-primary font-bold text-xl">
              Explore the world of immer
            </h2>
            <p className="text-[#232323] text-justify text-sm mt-4">
             Nihil dicta quia possimus pariatur molestias esse voluptatem similique
              non consequuntur magni veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
