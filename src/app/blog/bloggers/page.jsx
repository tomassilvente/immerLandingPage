"use client";

import ImmerCTA from "@/components/CTA";
import ImmerFooter from "@/components/Footer";
import ImmerHeader from "@/components/Header";
import getData from "@/firebase/firestore/getData";
import React, { useEffect, useState } from "react";
import BloggersCard from "../components/bloggersCard";
import Link from "next/link";

function Page() {
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("users");
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
      <div className="grid grid-cols-2">
        {documentData.map((content) => (
            content.isAdmin
            ? <Link href={`/bloggers/${content.id}`}>
                {console.log(content.id)}
                <BloggersCard
                    id={content.id}
                    pinterestLink={content.pinterest}
                    instagramLink={content.instagram}
                    twitterLink={content.X}
                    facebookLink={content.facebook}
                    bio={content.bio}
                    followers={100}
                    bloggerName={content.username}
                    bloggerImage={content.imageURL}
                    key={content.id}
                />
            </Link>
            : ''
        ))}
      </div>
      <ImmerCTA />
      <ImmerFooter />
    </div>
  );
}

export default Page;
