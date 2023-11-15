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
  const [blogs, setBlogs] = useState([]);
  const id = useParams().id;
  let newBlogs = []
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const { result, error } = await getData("users", id);
        if (error) {
          console.error("Error fetching document:", error);
        } else {
          setDocumentData(result);
          setBlogs(result.blogs)
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);

  const fetchBlogs = async (blogId) => {
    let { result, error } = await getData("blogs", blogId);
    if (error) {
      console.error("Error fetching document:", error);
    } else {
      result = {...result, id:blogId}
      console.log(result)
      newBlogs.push(result)
      setBlogs(newBlogs)
    }
  };
  
  blogs.map(blog => fetchBlogs(blog))

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
                        className={documentData.instagram ? '' : 'hidden'}
                        >
                        <FaInstagram />
                    </Link>
                    <Link
                        href={documentData.facebook ? documentData.facebook : '/'} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={documentData.facebook ? '' : 'hidden'}
                        >
                        <FaFacebook />
                    </Link>
                    <Link
                        href={documentData.pinterest ? documentData.pinterest : '/'} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={documentData.pinteres ? '' : 'hidden'}
                        >
                        <FaPinterest />
                    </Link>
                    <Link
                        href={documentData.X ? documentData.X : '/'} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={documentData.X ? '' : 'hidden'}
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
                  <p className="text-2xl text-center my-10">BLOGS</p>
                  <div className="flex text-xl space-x-5 overflow-clip">
                     {
                      blogs?
                        blogs.map(blog =>(
                          <Link href={`/blog/${blog.id}`}>
                            <div className="h-[200px] w-[150px] border border-primary text-black rounded-xl p-2 text-sm text-center bg-gray-300 overflow-clip">
                              {blog.title}
                              <img
                                src={blog.imageUrl}
                                alt=""
                                className="h-[120px] w-[120px] rounded-lg mt-4 mx-[6px]"
                              />
                            </div>
                          </Link>
                        ))
                      : 'NOO'
                     }
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
