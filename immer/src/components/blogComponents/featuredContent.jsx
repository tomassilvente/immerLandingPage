"use client"

import Link from "next/link";
import ContentCard from "./ContentCard";
import FeatureContentButton from "./contentBtn";
import { BtnProps } from "./demoData";

const FeatureContent = ({ FeatureContent }) => {
  const buttonData = BtnProps;
  const showHost = false;
  const maxCardsToShow = 4;
  const displayedContent = FeatureContent.slice(0, maxCardsToShow);

  return (
    <div
      style={{
        background: "var(--light-color-base-tertiary-normal, #EDEEF1)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="flex justify-center p-8 sm:p-12 lg:pl-20 lg:pr-20"
    >
      <section className="w-full text-center">
        <div
          id="content-buttons"
          className="w-full flex flex-col sm:flex-row content-center items-center gap-5 sm:gap-[1%]
           justify-between pt-3 pb-12"
        >
          <Link
            href="/all"
            className="bg-primary w-full sm:w-[auto] h-12 sm:h-auto p-3 pt-2 pb-2 rounded-[8px]"
          >
            <p
              className="text-white text-center gap-2 not-italic tracking-widest
             lg:text-base text-sm font-bold "
            >
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

        <div id="cards" className="gap-1">
          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {displayedContent.map((content) => (
                <ContentCard
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

        </div>
      </section>
    </div>
  );
};

export default FeatureContent;
