"use client";
import Image from "next/image";
import Link from "next/link";

import FeaturedContentCard from "./featuredContentCard";
import FeatureContentButton from "./contentBtn";
import { BtnProps } from "./demoData";

const FeatureContent = ({ FeatureContent }) => {
  const buttonData = BtnProps;
  const showHost = false;

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 550;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 550;
  };

  return (
    <div
      style={{
        background: "var(--light-color-base-tertiary-normal, #EDEEF1)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="w-full flex justify-center p-8 sm:p-12 lg:pl-24 lg:pr-24 px-5 sm:px-20"
    >
      <section className="w-full text-center">
        <div
          id="content-buttons"
          className="w-full  relative flex items-center pt-3 pb-12"
        >
          <div
            className="h-full w-full flex flex-row  gap-[7%] lg:ml-20 pl-1 pr-1
            overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <Link
              href="/all"
              className="bg-primary w-full sm:w-[auto] h-auto p-3 pt-2 pb-2 rounded-[8px]"
            >
              <p className="text-white text-center gap-2 not-italic lg:text-base text-sm font-bold">
                All
              </p>
            </Link>
            {buttonData.map((button, index) => (
              <FeatureContentButton
                key={index}
                btnAddress={button.btnAddress}
                btnName={button.btnName}
              />
            ))}
          </div>
        </div>

        <>
          <div className="w-full relative flex items-center">
            <Image
              onClick={slideLeft}
              className="rounded-full border-none cursor-pointer hidden lg:block"
              src="/assets/blog/left.svg"
              width={40}
              height={40}
              alt="arrow-image"
              priority
            />
            <div
              id="slider"
              className="h-full lg:p-8 p-0 flex flex-row gap-4 
              overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {FeatureContent.map((content) => (
                <FeaturedContentCard
                  img={content.img}
                  category={content.category}
                  eventDate={content.eventDate}
                  title={content.title}
                  details={content.details}
                  id={content.id}
                  showHost={showHost}
                  hostTitle={content.hostTitle}
                  hostName={content.hostName}
                  hostImage={content.hostImage}
                  key={content.id}
                />
              ))}
            </div>
            <Image
              onClick={slideRight}
              className="rounded-full border-none ml-1 cursor-pointer hidden lg:block"
              src="/assets/blog/right.svg"
              width={40}
              height={40}
              alt="arrow-image"
              priority
            />
          </div>
        </>
      </section>
    </div>
  );
};

export default FeatureContent;
