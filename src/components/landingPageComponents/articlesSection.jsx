"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArticlesCard from "./articlesCard";
import SecondArticlesCard from "./secondArticleCard";
import getData from "../../firebase/firestore/getData";

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
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("blogs", null);
        if (error) {
          console.error("Error fetching document:", error);
        } else {
          if (Array.isArray(result)) {
            setDocumentData(result.slice(0, 3));
          } else {
            console.error("Document data is not valid:", result);
          }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);

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
              id={documentData[0]?.id}
              img={documentData[0]?.imageUrl}
              btnTitle={documentData[0]?.category}
              tittle={documentData[0]?.title}
              desc={documentData[0]?.description}
              learnMoreLink={`/blog/${documentData[0]?.id}`}
            />
            <ArticlesCard
              id={documentData[1]?.id}
              img={documentData[1]?.imageUrl}
              btnTitle={documentData[1]?.category}
              tittle={documentData[1]?.title}
              desc={documentData[1]?.description}
              learnMoreLink={`/blog/${documentData[1]?.id}`}
            />
          </div>
          <div className="lg:w-[40%] gap-8 sm:gap-4 w-full">
            <SecondArticlesCard
              id={documentData[2]?.id}
              img={documentData[2]?.imageUrl}
              btnTitle={documentData[2]?.category}
              tittle={documentData[2]?.title}
              desc={documentData[2]?.description}
              learnMoreLink={`/blog/${documentData[3]?.id}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
