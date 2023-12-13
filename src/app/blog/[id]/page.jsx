"use client";

import ImmerCTA from "@/components/CTA";
import ImmerFooter from "@/components/Footer";
import ImmerHeader from "@/components/Header";
import getData from "@/firebase/firestore/getData";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Page() {
  const [relatedPosts, setRelatedPosts] = useState([]);

  const [documentData, setDocumentData] = useState([]);


  const wordsPerMinute = 200;
  const totalWords = documentData.description?.split(/\s+/).length;
  const estimatedReadingTime = Math.ceil(totalWords / wordsPerMinute);
  const id = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("blogs", id);
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

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const { result: currentPost, error: currentPostError } = await getData("blogs",id);
        if (currentPostError) {
          return console.error("Error fetching current document:", currentPostError);
        }
        const { result: allPosts, error: allPostsError } = await getData("blogs");
        if (allPostsError) {
          return console.error("Error fetching all documents:", allPostsError);
        }

        const filteredRelatedPosts = allPosts.filter((post) => post.id !== id);

        const randomRelatedPosts = [];
        while (
          randomRelatedPosts.length < 3 &&
          filteredRelatedPosts.length > 0
        ) {
          const randomIndex = Math.floor(
            Math.random() * filteredRelatedPosts.length
          );
          randomRelatedPosts.push(
            filteredRelatedPosts.splice(randomIndex, 1)[0]
          );
        }

        setRelatedPosts(randomRelatedPosts);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      }
    };

    fetchRelatedPosts();
  }, [id]);

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
        <article className="p-2 bg-[#fefefeb6]  m-2">
          <div className="m-5">
            <h1 className="text-4xl text-center font-bold ">
              {documentData.title}
            </h1>
            <div className="justify-center items-center mt-8">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={documentData.imageUrl}
                  alt="Imagen"
                  className="lg:max-h-[500px] min-h-[200px] lg:max-w-[500px] sm:max-w-[55%] max-w-[70%] min-w-[40%]"
                />
              </div>
              <div className={`md:flex-row md:items-center `}>
                <div className="flex mt-10 items-center md:space-x-2">
                  <img
                    src={documentData.profilePic}
                    alt=""
                    className="w-[55px] h-[55px] border rounded-full "
                  />
                  <div>
                    <p className="ml-4">{documentData.user} </p>
                    <p className="text-xs md:mt-0 ml-4">
                      {estimatedReadingTime} min read
                    </p>
                  </div>
                </div>

                <div className=" my-6 h-100% overflow-hidden">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {documentData.description}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap m-2 py-6 space-x-2 border-t border-dashed text-white dark:border-gray-400 mt-10">
            <a
              rel="noopener noreferrer"
              href="/blog"
              className="px-3 py-1 rounded-sm hover:underline  bg-primary"
            >
              {documentData.category}
            </a>
          </div>
          <div className="m-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <div className="space-y-1 list-disc mb-20">
              {relatedPosts.map((post, index) => (
                <li key={index}>
                  <a
                    rel="noopener noreferrer"
                    href={`/blog/${post.id}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ImmerCTA />
      <ImmerFooter />
    </div>
  );
}

export default Page;
