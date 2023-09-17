import BlogHero from "@/components/blogComponents/blogHero";
import FeatureContent from "@/components/blogComponents/featuredContent";
import MainContent from "@/components/blogComponents/mainContent";
import BlogCTA from "@/components/blogComponents/blogCTA";
import BlogFooter from "@/components/blogComponents/blogFooter";


import {
  DummyContent,
  BloggersData,
} from "@/components/blogComponents/demoData";
import BlogHeader from "@/components/blogComponents/blogHeader";

const Blog = () => {
  const LatestArticlesContentData = DummyContent;
  const featuredContent = DummyContent;
  const mostPopularBloggers = BloggersData;
  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
      <BlogHeader iconUrl={"/assets/blog/immerNews.svg"} immerIconLink={"/blog"} iconWidth={190} iconHeight={180}/>
      <BlogHero />
      <FeatureContent FeatureContent={featuredContent} />
      <MainContent
        LatestArticles={LatestArticlesContentData}
        PopularBloggers={mostPopularBloggers}
      />
      <BlogCTA />
      <BlogFooter />
    </div>
  );
};

export default Blog;
