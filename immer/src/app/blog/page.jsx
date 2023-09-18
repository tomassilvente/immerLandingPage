import BlogHero from "@/components/blogComponents/blogHero";
import FeatureContent from "@/components/blogComponents/featuredContent";
import MainContent from "@/components/blogComponents/mainContent";
import ImmerFooter from "@/components/immerFooter";
import ImmerCTA from "@/components/immerCTA";
import ImmerHeader from "@/components/immerHeader";
import {
  DummyContent,
  BloggersData,
} from "@/components/blogComponents/demoData";


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
