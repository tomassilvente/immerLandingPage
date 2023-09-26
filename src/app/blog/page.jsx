import BlogHero from "./components/blogHero";
import FeatureContent from "./components/featuredContent";
import MainContent from "./components/mainContent";

import ImmerFooter from "@/components/Footer";
import ImmerCTA from "@/components/CTA";
import ImmerHeader from "@/components/Header";
import {
  DummyContent,
  BloggersData,
} from "./components/demoData";


const Blog = () => {
  const LatestArticlesContentData = DummyContent;
  const featuredContent = DummyContent;
  const mostPopularBloggers = BloggersData;
  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
      <ImmerHeader
        iconUrl={"/assets/blog/immerNews.svg"}
        immerIconLink={"/blog"}
        iconWidth={190}
        iconHeight={180}
      />
      <BlogHero />
      <FeatureContent FeatureContent={featuredContent} />
      <MainContent
        LatestArticles={LatestArticlesContentData}
        PopularBloggers={mostPopularBloggers}
      />
      <ImmerCTA />
      <ImmerFooter />
    </div>
  );
};

export default Blog;
