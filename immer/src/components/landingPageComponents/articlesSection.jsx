import Link from "next/link";
import Image from "next/image";
import React from "react";

const MainContentImg = [
  {
    id: "hero-1",
    img: "/assets/LandingPage/home-content-bg.png",
  },
  {
    id: "hero-2",
    img: "/assets/LandingPage/home-content-bg-r.png",
  },
];

const ArticlesSection = () => {
  return (
    <section
      className="w-full lg:pl-28 lg:pr-28 px-5 sm:px-20 pb-16 py-16"
      style={{
        backgroundImage: `url(${MainContentImg[0].img}), url(${MainContentImg[1].img}), url(${MainContentImg[0].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom, right top",
        backgroundSize: "45vw 50rem",
      }}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <p>Stay Ahead with Immer</p>
          <p>Dive into our blog for the latest in entertainment evolution. </p>
          <Link
            href="/blog"
            className="flex flex-row gap-2 w-[200px] justify-center bg-white border-[2px] border-solid rounded-[8px] border-primary text-center
             text-primary"
          >
            See All Articles
            <Image
              src="/articles-icon.svg"
              width={20}
              height={10}
              alt="articles-icon"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col w-full">
          <div className="flex flex-col w-[60%]">First two cards</div>
          <div className="w-[40%]">Second card</div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
