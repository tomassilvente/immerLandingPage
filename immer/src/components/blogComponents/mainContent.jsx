import Link from "next/link";
import BloggersCard from "./bloggersCard";
import SecondBloggersCard from "./secondBloggerCard";
import ContentCard from "./ContentCard";

const MainContent = ({ LatestArticles, PopularBloggers }) => {
  const showHost = true;
  const maxArticlesToShow = 4;
  const maxBloggersToShow = 3;
  const displayedArticles = LatestArticles.slice(0, maxArticlesToShow);
  const displayedBloggers = PopularBloggers.slice(0, maxBloggersToShow);
  const secondBloggers = LatestArticles.slice(0, 2);

  return (
    <main id="main-content" className="p-8 sm:p-12 lg:pl-20 lg:pr-20">
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-6 w-full">
        <section id="articles" className="lg:w-[55%] w-full">
          <div className="flex flex-row justify-between mb-6">
            <p className="text-2xl font-bold not-italic text-[#1E1E1E] leading-6 tracking-[0.5px]">
              Latest Articles
            </p>
            <Link href="/articles">
              <p className="font-normal text-[#1E1E1E] text-base not-italic tracking-[0.5px] leading-6">
                View All
              </p>
            </Link>
          </div>
          <div className="grid gap-x-3 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-3 pl-1 pr-1">
            {displayedArticles.map((content) => (
              <ContentCard
                img={content.img}
                category={content.category}
                eventDate={content.eventDate}
                title={content.title}
                details={content.details}
                id={content.id}
                showHost={showHost}
                hostTitle={content.hostTitle}
                hostName={content.hostName}
                hostImage={content.hostImage}
                key={content.id}
              />
            ))}
          </div>
        </section>
        <section id="bloggers" className="lg:w-[45%] w-full">
          <div className="flex flex-row justify-between mb-6">
            <p className="text-2xl font-bold not-italic text-[#1E1E1E] leading-6 tracking-[0.5px]">
              Popular Bloggers
            </p>
            <Link href="/bloggers">
              <p className="font-normal text-[#1E1E1E] text-base not-italic tracking-[0.5px] leading-6">
                View All
              </p>
            </Link>
          </div>
          <div className="grid gap-x-3 md:grid-cols-2 lg:grid-cols-1 lg:gap-x-3 pl-1 pr-1">
            {displayedBloggers.map((content) => (
              <BloggersCard
                id={content.id}
                pinterestLink={content.pinterestLink}
                instagramLink={content.instagramLink}
                twitterLink={content.twitterLink}
                facebookLink={content.facebookLink}
                bio={content.bio}
                followers={content.followers}
                bloggerName={content.bloggerName}
                bloggerImage={content.bloggerImage}
                key={content.id}
              />
            ))}
            {secondBloggers.map((content) => (
              <SecondBloggersCard
                img={content.img}
                category={content.category}
                eventDate={content.eventDate}
                title={content.title}
                details={content.details}
                id={content.id}
                hostTitle={content.hostTitle}
                hostName={content.hostName}
                hostImage={content.hostImage}
                key={content.id}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
