"use client"
import BlogHero from "./components/blogHero";
import FeatureContent from "./components/featuredContent";
import MainContent from "./components/mainContent";
import React, { useEffect, useState } from "react";
import ImmerFooter from "@/components/Footer";
import ImmerCTA from "@/components/CTA";
import ImmerHeader from "@/components/Header";
import {BloggersData} from "./components/demoData";


const Blog = () => {
  const mostPopularBloggers = BloggersData
  const [documentData, setDocumentData] = useState([]);

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

  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
      <ImmerHeader
        iconUrl={"/assets/blog/immerNews.svg"}
        immerIconLink={"/blog"}
        iconWidth={190}
        iconHeight={180}
      />
      <BlogHero />
      <FeatureContent FeatureContent={documentData} />
      <MainContent
        LatestArticles={documentData}
        PopularBloggers={mostPopularBloggers}
      />
      <ImmerCTA />
      <ImmerFooter />
    </div>
  );
};

export default Blog;
