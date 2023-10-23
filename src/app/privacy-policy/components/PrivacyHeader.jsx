import Link from "next/link";

export default function PrivacyHeader(){

    const BlogHeroImg = [
        {
          id: "hero-1",
          img: "/assets/blog/blog-hero-bg.png",
        },
        {
          id: "hero-2",
          img: "/assets/blog/blog-hero-guitar.png",
        },
      ];

    return(
    <div
      className="min-h-[full] bg-white bg-blogHero flex items-stretch min-w-full pt-24"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="h-full self-center gap-10 p-8  py-24 lg:pl-[120px] lg:pr-[120px] px-5 sm:px-12 flex flex-col
        justify-around  "
      >
            <p className="text-white ">Home {'>'} Privacy {'>'} Privacy Policy</p>
        <div className=" flex flex-col">
          <h1 className="flex text-[14vw] sm:text-[10vw] leading-[1.2] text-[#D9D9D9] drop-shadow-[2px_2px_0px_rgba(255,108,0,0.5)] font-bold">
            Privacy 
            <span className="text-[#FF6C00] ml-4"> Policy</span>
          </h1>
        <p className="text-white my-3">Go to:</p>
          <div className="flex">
            <select className="p-2 w-[70%]">
                <option value="/privacy-policy">Privacy Policy</option>
                <option value="/terms&conditions">Terms & Conditions</option>
            </select>
            <Link
              href="/blog"
              className="bg-primary text-center px-12 py-3 rounded-r-[8px]"
            >
              <p className="text-white font-semibold">
                Go
              </p>
            </Link>
          </div>
        </div>
        </div>
      </div>
)}