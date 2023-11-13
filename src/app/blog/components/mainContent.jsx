"use client";

import Link from "next/link";
import Image from "next/image";
import BloggersCard from "./bloggersCard";
import SecondBloggersCard from "./secondBloggerCard";
import ContentCard from "./ContentCard";
import { useState, useEffect } from "react";
import getData from "../../../firebase/firestore/getData";

const MainContent = ({ LatestArticles, PopularBloggers }) => {
  const showHost = true;
  const maxArticlesToShow = 2;

  const secondBloggers = LatestArticles.slice(0, 2);
  const [documentData, setDocumentData] = useState([]);
  const displayedArticles = documentData.slice(0, maxArticlesToShow);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("blogs", null);
        if (error) {
          console.error("Error fetching document:", error);
        } else {
          if (Array.isArray(result)) {
            setDocumentData(result);
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

  const [bloggersData, setbloggersData] = useState([]);
  const maxBloggersToShow = 3;
  const displayedBloggers = bloggersData.slice(0, maxBloggersToShow);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("users", null);
        if (error) {
          console.error("Error fetching document:", error);
        } else {
          if (Array.isArray(result)) {
            console.log(result)
            setbloggersData(result);
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
    <main
    style={{
      backgroundImage: `url(/assets/LandingPage/home-content-bg.png), url(/assets/LandingPage/home-content-bg-r.png)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left top, right center, left bottom",
    }}
      id="main-content"
      className="p-8 sm:p-12 lg:pl-28 lg:pr-28 px-5 sm:px-20"
    >
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-6 w-full">
        <section id="articles" className="lg:w-[55%] w-full">
          <div className="flex flex-row justify-between mb-6">
            <p className="text-2xl font-bold not-italic text-[#1E1E1E] leading-6 tracking-[0.5px]">
              Latest Articles
            </p>
            <Link href="/blog/all" className="hidden sm:block">
              <p className="font-normal text-[#1E1E1E] text-base not-italic tracking-[0.5px] leading-6">
                View All
              </p>
            </Link>
            <Link
              href="https://www.instagram.com"
              className="block lg:hidden md:hidden"
            >
              <Image
                src="/assets/blog/arrow.svg"
                width={24}
                height={24}
                alt="arrow-icon"
                priority
              />
            </Link>
          </div>
          <div className="grid gap-x-3 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-3 pl-1 pr-1">
            {displayedArticles.map((content) => (
              <ContentCard
                img={content.imageUrl}
                category={content.category}
                eventDate={content.eventDate}
                title={content.title}
                details={content.description}
                id={content.id}
                showHost={showHost}
                hostName={content.user}
                hostImage={content.profilePic}
                key={content.id}
              />
            ))}
          </div>
        </section>
        <section id="bloggers" className="lg:w-[45%] w-full">
          <div className="flex flex-row justify-between mb-6">
            <p className="text-2xl font-bold not-italic text-[#1E1E1E] leading-6 tracking-[0.5px]">
              Popular Bloggers
            </p>
            <Link href="/bloggers" className="hidden sm:block">
              <p className="font-normal text-[#1E1E1E] text-base not-italic tracking-[0.5px] leading-6">
                View All
              </p>
            </Link>
            <Link
              href="https://www.instagram.com"
              className="block lg:hidden md:hidden"
            >
              <Image
                src="/assets/blog/arrow.svg"
                width={24}
                height={24}
                alt="arrow-icon"
                priority
              />
            </Link>
          </div>
          <div className="grid gap-x-3 md:grid-cols-2 lg:grid-cols-1 lg:gap-x-3 pl-1 pr-1 ">
            {displayedBloggers.map((content) => (
              content.isAdmin?
                <BloggersCard
                  id={content.id}
                  // pinterestLink={content.pinterestLink}
                  // instagramLink={content.instagramLink}
                  // twitterLink={content.twitterLink}
                  // facebookLink={content.facebookLink}
                  // bio={content.bio}
                  // followers={content.followers}
                  bloggerName={content.username}
                  bloggerImage={content.imageUrl}
                  key={content.id}
                />
                : ''
            ))}
            {secondBloggers.map((content) => (
              <SecondBloggersCard
                img={content.img}
                category={content.category}
                eventDate={content.eventDate}
                title={content.title}
                details={content.details}
                id={content.id}
                hostTitle={content.hostTitle}
                hostName={content.hostName}
                hostImage={content.hostImage}
                key={content.id}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
