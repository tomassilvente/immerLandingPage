import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

const BloggersCard = ({
  id,
  pinterestLink,
  instagramLink,
  twitterLink,
  facebookLink,
  bio,
  followers,
  bloggerName,
  bloggerImage,
}) => {
  // const bioInfo = bio.split("\n").slice(0, 2).join("\n");
  const aspectRatio = 24 / 24;
  const calculatedHeight = Math.round(24 / aspectRatio);

  const socialMediaLinks = [
    { icon: <FaFacebook />, url: facebookLink },
    { icon: <FaTwitter />, url: twitterLink },
    { icon: <FaPinterest />, url: pinterestLink },
    { icon: <FaInstagram />, url: instagramLink },
  ];

  console.log(id)

  return (
    <div
      style={{ boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className="flex flex-col bg-white h-[145px] content-center p-2 pb-3 pt-3 mb-7 hover:scale-105 ease-out duration-300 overflow-hidden"
    >
      <div id="TopBloggerProfile" className="mb-3 flex flex-row">
        <div id="imageRow">
          <img
            className="rounded-full border-none ml-1 h-[70px] w-[80px]"
            src={bloggerImage}
            alt="blogger-image "
            priority
          />
        </div>
        <div id="bloggersInfoRow" className="flex flex-col w-full ml-2 mt-2 ">
          <div id="nameAndSocials" className="flex flex-row justify-between">
            <div id="nameRow">
              <Link href={`/blog/bloggers/${id}`}>
                <p className="text-primary ml-2 text-base font-medium not-italic leading-5 tracking-[-0.5px]">
                  {bloggerName}
                </p>
              </Link>
            </div>
            <div id="socials-raw" className="flex flex-row" >
              {socialMediaLinks.map((item, index) => (
                <Link
                  href={'/'}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[26px] h-5 bg-white text-[#232323]"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div id="followers" className="flex flex-row mt-1 ml-1">
            <Image
              src="/assets/blog/man.png"
              width={24}
              height={calculatedHeight}
              alt="man-icon"
              priority
            />
            <p className="text-[#2B262C] text-xs font-normal leading-[18px] mt-2 ml-1">
              {followers} followers
            </p>
          </div>
        </div>
      </div>
      <div id="bio">
        <p className="text-[#747474] mx-5 text-sm font-normal not not-italic leading-[18px] line-clamp-2">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default BloggersCard;
