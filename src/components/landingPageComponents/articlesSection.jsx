import Link from "next/link";
import Image from "next/image";
import React from "react";
import ArticlesCard from "./articlesCard";
import SecondArticlesCard from "./secondArticleCard";

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

const ArticlesData = [
  {
    id: "card-1",
    img: "/jazz-img.png",
    btnTitle: "Behind the Scenes",
    title: "Transparent Pricing: How immer Puts Ticket Pricing in Your Hands",
    desc: "Explore the intuitive immer platform that allows organizers to manage all aspects of their events effortlessly.",
    learnMoreLink: "/learn",
  },
  {
    id: "card-2",
    img: "/event-img.png",
    btnTitle: "App Features",
    title: "immer as Your Event Companion: Enhancing Your Live Experience",
    desc: "Check out our interactive features and opportunities to engage with other event-goers during live events!",
    learnMoreLink: "/learn",
  },
  {
    id: "card-3",
    img: "/event2-img.png",
    btnTitle: "Empowering Entertainers",
    title:
      "Say Goodbye to Event Coordinators: How immer Empowers Independent Entertainers",
    desc: "immer eliminates the need for dedicated event coordinators or promoters",
    learnMoreLink: "/learn",
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
          <p className="text-black lg:text-5xl md:text-4xl text-3xl py-6 pb-2 font-bold not-italic tracking-[0.192px] leading-[72px]">
            Stay Ahead with Immer
          </p>
          <div className="mt-5 w-[75vw] sm:w-[45vw] h-3 bg-gradient-to-r from-[#FF6C00] to-[#FF6C0000]"></div>
          <p className="text-black text-2xl font-normal leading-[36px] tracking-[0.096px] pt-6 pb-4">
            Dive into our blog for the latest in entertainment evolution. 
          </p>
          <Link
            href="/blog"
            className="flex flex-row gap-2 w-[200px] justify-center bg-white border-[2px] border-solid rounded-[8px] border-primary text-center
             text-primary text-base font-medium leading-[24px] tracking-[0.064px] p-3 mb-10 hover:underline transition"
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
        <div className="flex lg:flex-row flex-col gap-4 w-full mt-6">
          <div className="flex flex-col gap-8 sm:gap-4 w-full lg:w-[60%]">
            <ArticlesCard
              id={ArticlesData[0].id}
              img={ArticlesData[0].img}
              btnTitle={ArticlesData[0].btnTitle}
              tittle={ArticlesData[0].title}
              desc={ArticlesData[0].desc}
              learnMoreLink={ArticlesData[0].learnMoreLink}
              flexDirection={ArticlesData[0].flexDirection}
            />
            <ArticlesCard
              id={ArticlesData[1].id}
              img={ArticlesData[1].img}
              btnTitle={ArticlesData[1].btnTitle}
              tittle={ArticlesData[1].title}
              desc={ArticlesData[1].desc}
              learnMoreLink={ArticlesData[1].learnMoreLink}
              flexDirection={ArticlesData[1].flexDirection}
            />
          </div>
          <div className="lg:w-[40%] gap-8 sm:gap-4 w-full">
            <SecondArticlesCard
              id={ArticlesData[2].id}
              img={ArticlesData[2].img}
              btnTitle={ArticlesData[2].btnTitle}
              tittle={ArticlesData[2].title}
              desc={ArticlesData[2].desc}
              learnMoreLink={ArticlesData[2].learnMoreLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
