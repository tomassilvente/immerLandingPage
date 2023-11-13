"use client";

import ImmerCTA from "@/components/CTA";
import ImmerFooter from "@/components/Footer";
import ImmerHeader from "@/components/Header";
import getData from "@/firebase/firestore/getData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Page() {
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("blogs");
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
      <hr className="mt-20"/>
      {
          documentData.map(post =>(
            <Link href={`/blog/${post.id}`}>
                <div className="xl:max-w-5xl md:max-w-3xl max-w-xl mx-auto mt-5">
                    <article className="p-2 dark:bg-gray-800 dark:text-gray-50 m-2 rounded-xl  max-h-[260px] overflow-clip">
                        <div className="m-5">
                            <div className="grid grid-cols-12">
                                    <h1 className="text-3xl font-bold col-start-1 md:col-end-9 col-end-12">
                                        {post.title}
                                    </h1>
                                    <div className="col-start-9 col-end-12 md:flex hidden">
                                        <img
                                            src={post.profilePic}
                                            alt=""
                                            className="w-[40px] h-[40px] border rounded-full dark:bg-gray-500 dark:border-gray-700"
                                        />
                                        <p className="ml-3 mt-2">{post.user} </p>
                                    </div>
                            </div>
                            <div className="grid grid-cols-6 mt-4">
                                <div className={`md:flex-row md:items-center dark:text-gray-400 col-start-1 md:col-end-4 col-end-6`}>
                                    <div className=" my-3">
                                        <Markdown remarkPlugins={[remarkGfm]}>
                                            {post.description}
                                        </Markdown>
                                    </div>
                                </div>
                                    <img
                                    src={post.imageUrl}
                                    alt="Imagen"
                                    className="col-start-5 col-end-6 ml-2 hidden md:block"
                                    />
                            </div>
                        </div>
                    </article>
                </div>
            </Link>
          ))
        }
      <ImmerCTA />
      <ImmerFooter />
    </div>
  );
}

export default Page;
