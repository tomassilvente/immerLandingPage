"use client";

import ImmerCTA from "@/components/CTA";
import ImmerFooter from "@/components/Footer";
import ImmerHeader from "@/components/Header";
import getData from "@/firebase/firestore/getData";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {

  const [documentData, setDocumentData] = useState([]);

  const id = useParams().id
  
  console.log(documentData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("blogs", id);
        if (error) {
          console.error("Error fetching document:", error);
        } else {
          // if (Array.isArray(result)) {
            setDocumentData(result);
          // } else {
          //   console.error("Document data is not valid:", result);
          // }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ImmerHeader
        iconUrl={"/assets/blog/immerNews.svg"}
        immerIconLink={"/blog"}
        iconWidth={190}
        iconHeight={180}
      />
      <div className="md:max-w-3xl max-w-lg py-16 mx-auto space-y-12 mt-14">
        <article className="space-y-8  p-2 dark:bg-gray-800 dark:text-gray-50">
          <div className="m-5">
            <h1 className="text-4xl text-center font-bold ">
              {documentData.title}
            </h1>
            <div className="grid grid-cols-6 mt-8">
            
            <div className="col-start-1 col-end-4 md:flex-row md:items-center dark:text-gray-400">
              <div className="flex mt-2 items-center md:space-x-2">
                <img
                  src={documentData.profilePic}
                  alt=""
                  className="w-[50px] h-[50px] border rounded-full dark:bg-gray-500 dark:border-gray-700"
                />
                <div> 
                  <p className="">{documentData.user} • July 19th, 2021</p>
                  <p className="text-xs md:mt-0">
                    4 min read • 1,570 views
                  </p>
                </div>
              </div>
              <p className="dark:text-gray-100 mx-3 my-5">{documentData.description}</p>
            </div>
            {
              documentData.imageUrl 
              ? <Image
                  src={documentData.imageUrl}
                  width={200}
                  height={200}
                  alt="Imagen"
                  className="ml-[90px] col-start-4 col-end-6"
                />
              :  <img
                  src="https://dummyimage.com/200x200/ffffff/000000"
                  alt="Imagen"
                  className="ml-[90px] col-start-4 col-end-6"
                />
            }
          
          </div>
          
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              #Design
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              #News
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              #Concepts
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Nunc id magna mollis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Duis molestie, neque eget pretium lobortis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ImmerCTA />
      <ImmerFooter />
    </>
  );
}

export default Page;  