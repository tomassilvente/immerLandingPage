"use client";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
  } from "react-icons/fa";
import ImmerCTA from "@/components/CTA";
import ImmerFooter from "@/components/Footer";
import ImmerHeader from "@/components/Header";
import getData from "@/firebase/firestore/getData";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const [documentData, setDocumentData] = useState([]);

  const id = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("users", id);
        if (error) {
          console.error("Error fetching document:", error);
        } else {
          setDocumentData(result);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(/assets/LandingPage/home-content-bg.png), url(/assets/LandingPage/home-content-bg-r.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top, right center, left bottom",
      }}
    >
      <ImmerHeader
        iconUrl={"/assets/blog/immerNews.svg"}
        immerIconLink={"/blog"}
        iconWidth={190}
        iconHeight={180}
      />
      <div className="xl:max-w-5xl md:max-w-3xl max-w-xl pt-16 mx-auto mt-14">
        <article className="p-2 dark:bg-gray-800 dark:text-gray-50 m-2">
          <div className="m-5">
              <div className={`md:flex-row md:items-center dark:text-gray-400`}>
                <div className="flex mt-10 items-center md:space-x-2">
                  <img
                    src={documentData.imageUrl}
                    alt=""
                    className="w-[100px] h-[100px] border rounded-full dark:bg-gray-500 dark:border-gray-700"
                  />
                  <div>
                    <p className="ml-3 text-3xl">{documentData.username} </p>
                  </div>
                    <Link
                        href={documentData.instagram}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[26px] h-5 bg-white text-[#232323]"
                        >
                        {FaInstagram}
                    </Link>
                    <Link
                        href={documentData.facebook}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[26px] h-5 bg-white text-[#232323]"
                        >
                        {FaFacebook}
                    </Link>
                    <Link
                        href={documentData.pinterest}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[26px] h-5 bg-white text-[#232323]"
                        >
                        {FaPinterest}
                    </Link>
                    <Link
                        href={documentData.X}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[26px] h-5 bg-white text-[#232323]"
                        >
                        {FaTwitter}
                    </Link>
                </div>
                <div className="m-2 text-lg">
                    {documentData.bio}
                </div>
              </div>
          </div>
        </article>
      </div>
      <ImmerCTA />
      <ImmerFooter />
    </div>
  );
}

export default Page;
