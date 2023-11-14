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
import Link from "next/link";

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
          console.log(result)
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
        <article className="p-2 dark:bg-gray-800 dark:text-gray-50 bg-gray-300 m-2 rounded-lg">
          <div className="m-5">
              <div className={`md:items-center dark:text-gray-400`}>
                  <p className=" text-center text-5xl ">{documentData.username} </p>
                  <div className="flex space-x-4 justify-center items-center my-8">
                    <Link
                        href={documentData.instagram ? documentData.instagram : '/'} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                        >
                        <FaInstagram />
                    </Link>
                    <Link
                        href={documentData.facebook ? documentData.facebook : '/'} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                        >
                        <FaFacebook />
                    </Link>
                    <Link
                        href={documentData.pinterest ? documentData.pinterest : '/'} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                        >
                        <FaPinterest />
                    </Link>
                    <Link
                        href={documentData.X ? documentData.X : '/'} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="  "
                        >
                        <FaTwitter />
                    </Link>
                  </div>
                  <div className="flex ">
                    <img
                      src={documentData.imageURL}
                      alt=""
                      className="max-h-[400px] max-w-[800px] rounded-lg"
                    />
                    <div className="m-5 ml-14 text-xl">
                        {documentData.bio}
                    </div>
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
