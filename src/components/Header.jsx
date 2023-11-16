"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export const NavigationList = [
  {
    NavName: "Home",
    NavAddress: "/",
  },
  {
    NavName: "Updates",
    NavAddress: "/blog",
  },
  {
    NavName: "Our Mission",
    NavAddress: "/#MainContent",
  },
  {
    NavName: "Contact",
    NavAddress: "/contact-us",
  },
];

export default function ImmerHeader({
  immerIconLink,
  iconUrl,
  iconWidth,
  iconHeight,
}) {
  const NavList = NavigationList;
  const currentPath = usePathname();

  const [isFeedOpen, setIsFeedOpen] = useState(false);

  const setFeedOpen = () => {
    
    setIsFeedOpen(!isFeedOpen);
  };


  return (
    <header className="flex flex-row w-full sm:h-24 h-20 fixed z-20 top-0 left-0 justify-between items-center p-4 pt-1 pb-1 pr-4 md:pr-10 md:p-12 md:pt-7 md:pb-7 mt-0 sm:p-12 lg:pl-20 lg:pr-20  bg-white">
      <div id="company-name" className="text-left md:w-1/5 lg:-mt-2 -mt-0">
        <Link href={immerIconLink} className="w-full">
          <Image
            className="mt-0"
            src={iconUrl}
            width={iconWidth}
            height={iconHeight}
            alt="immer-image"
            priority
          />
        </Link>
      </div>
      {isFeedOpen
        ?
        <div
        id="Nav-container"
        className="md:w-[91.5%] sm:w-[87%] w-[95%] lg:hidden rounded-lg absolute bg-white text-center mt-44 py-5 text-2xl space-y-5"
      >
        <img onClick={setFeedOpen} src='../../assets/blog/cross.png' className= " absolute ml-[94%] mt-[2%] w-[40px] h-[36px]"/>
        {NavList.map((NavData) => (
          
          <p
            key={NavData.NavAddress}
            className="  not-italic font-normal "
            
            style={{
              color:
                currentPath === NavData.NavAddress
                  ? "#ff6c00"
                  : "var(--light-color-base-primary-dark, #000)",
            }}
          >
            <Link className="hover:text-[#FF6C00]" href={NavData.NavAddress}>{NavData.NavName}</Link>
          </p>
          
        ))}
        <img onClick={setFeedOpen} src='../../assets/blog/dropDown.svg' className="ml-[44%] sm:ml-[45%] md:ml-[46%] h-[7px]"/>
      </div>
        : ''
      }

      <div
        id="Nav-container"
        className="hidden lg:flex md:flex-row w-3/5 gap-4 lg:gap-12 md:gap-5 justify-center text-red-800"
      >
        {NavList.map((NavData) => (
          <p
            key={NavData.NavAddress}
            className="lg:text-xl text-base not-italic font-normal "
            id={currentPath === NavData.NavAddress ? "headerUnderline" : "none"}
            style={{
              color:
                currentPath === NavData.NavAddress
                  ? "#ff6c00"
                  : "var(--light-color-base-primary-dark, #000)",
            }}
          >
            <Link className="hover:text-[#FF6C00]" href={NavData.NavAddress}>{NavData.NavName}</Link>
          </p>
        ))}
      </div>

      <div
        id="btn-container"
        className="w-1/5 hidden lg:flex md:flex-row md:gap-2 lg:gap-4 sm:justify-end"
      >
        <Link
          href="/sign-up"
          className="bg-primary hover:bg-[#d6844a] p-[14px] lg:pl-6 pl-2 lg:pr-6 pr-2 rounded-[8px]"
        >
          <p className="text-white lg:text-base text-xs font-bold">
            Join the Waitlist
          </p>
        </Link>
      </div>

      {/* Menu Icon shown on small devices */}
      <div
        onClick={setFeedOpen}
        id="btn-container"
        className="text-2xl text-slate-800 hover:text-primary sm:text-3xl flex flex-row gap-4 justify-end lg:hidden"
      >
        <AiOutlineMenu />
      </div>
    </header>
  );
}
