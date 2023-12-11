"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"
import FeaturedContentCard from "./featuredContentCard";
import FeatureContentButton from "./contentBtn";
import getData from "../../../firebase/firestore/getData";

// ! Encontré dos bug, el primero: al situarse ligeramente sobre el borde del filtrado aparece todo naranja, no permitiendo leer el texto. Segundo: Deberíamos agregar scheleton dummy pre-loading en varias partes

const FeatureContent = () => {

  const buttonData = [
    {
      btnName: "For Entertainers",
      btnAddress: "/blog",
    },
    {
      btnName: "For Vendors",
      btnAddress: "/blog",
    },
    {
      btnName: "For Organizers",
      btnAddress: "/blog",
    },
    {
      btnName: "For Administrator",
      btnAddress: "/blog",
    },
    {
      btnName: "For Attendees",
      btnAddress: "/blog",
    },
  ];
  const showHost = false;
  const [documentData, setDocumentData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState('All')
  let totalCont = 0

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
        background: "var(--light-color-base-tertiary-normal, #EDEEF1)"
      }}
      className="w-full flex  p-8 sm:p-12 lg:pl-24 lg:pr-24 px-5 sm:px-20"
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
            <button
              onClick={() => setCurrentIndex('All') }
              className={`${currentIndex === 'All' ? 'text-white text-center gap-2 not-italic lg:text-base text-sm font-bold bg-primary w-full sm:w-[auto] h-auto p-3 pt-2 pb-2 rounded-[8px] ' : 'bg-white text-primary gap-2 not-italic lg:text-base text-sm font-bold  w-full sm:w-[auto] h-auto p-3 pt-2 pb-2 rounded-[8px] hover:bg-primary hover:text-white'}`}
            >
              <p 
                className="">
                All
              </p>
            </button>
            {buttonData.map((button, index) => (
              <div onClick={() => {
                    setCurrentIndex(button.btnName)
                  }}>
                <FeatureContentButton
                  key={index}
                  clicked = {currentIndex === button.btnName}
                  btnName={button.btnName}
                />
              </div>
            ))}
          </div>
        </div>

        <>
          <div className="w-full relative flex items-center">
            <Image
              onClick={slideLeft}
              className="rounded-full border-none cursor-pointer hidden lg:block hover:bg-primary"
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
              {documentData.map((content) => (
                (currentIndex === content.category || currentIndex === 'All')
                ?
                <>
                <p className="hidden">{totalCont = 1}</p>
                <FeaturedContentCard
                  img={content.imageUrl}
                  category={content.category}
                  eventDate={content.eventDate}
                  title={content.title}
                  details={content.description}
                  id={content.id}
                  showHost={showHost}
                  key={content.id}
                />
                </>
                :  ''
              ))}
            </div>
              {totalCont === 0
                  ? <div className="w-full text-xl text-center">
                      No Articles for this Section
                    </div>
                  : ''}
            <Image
              onClick={slideRight}
              className="rounded-full border-none ml-1 cursor-pointer hidden lg:block hover:bg-primary"
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
