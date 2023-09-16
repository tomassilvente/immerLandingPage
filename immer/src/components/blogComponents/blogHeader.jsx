"use client";

import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai"
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
    NavAddress: "/our-mission",
  },
  {
    NavName: "Contact",
    NavAddress: "/contact-us",
  },
];

export default function BlogHeader() {
  const NavList = NavigationList;
  const [selectedNav, setSelectedNav] = useState("Updates");

  return (
    <header
      className="flex flex-row w-full sm:h-24 h-20 fixed z-20 top-0 left-0 justify-between items-center
        p-4 pt-1 pb-1 pr-4 md:pr-10 md:p-12 md:pt-7 md:pb-7 mt-0 sm:p-12 lg:pl-20 lg:pr-20  bg-white"
    >
      <div
        id="company-name"
        className="text-left md:w-1/5 text-xl md:text-2xl lg:text-3xl font-bold not-italic"
      >
        <Link href="/blog" className="w-full">
          <Image
            className=""
            src="/assets/blog/immerNews.svg"
            width={190}
            height={180}
            alt="host-image"
            priority
          />
        </Link>
      </div>

      <div
        id="Nav-container"
        className="hidden lg:flex md:flex-row w-3/5 gap-4 lg:gap-12 md:gap-5 justify-center"
      >
        {NavList.map((NavData) => (
          <p
            key={NavData.NavAddress}
            className="lg:text-xl text-base not-italic font-normal"
            id={
              NavData.NavName === selectedNav
              ? "headerUnderline"
              : "none"
            }
            style={{
              color:
                NavData.NavName === selectedNav
                  ? "#ff6c00"
                  : "var(--light-color-base-primary-dark, #000)",
            }}
          >
            <Link
              href={NavData.NavAddress}
              onClick={() => setSelectedNav(NavData.NavName)}
            >
              {NavData.NavName}
            </Link>
          </p>
        ))}
      </div>

      <div
        id="btn-container"
        className="w-1/5 hidden lg:flex md:flex-row md:gap-2 lg:gap-4 sm:justify-end"
      >
        <Link
          href="/signup"
          className="bg-primary p-[14px] lg:pl-6 pl-2 lg:pr-6 pr-2 rounded-[8px]"
        >
          <p className="text-white lg:text-base text-xs font-bold">
            Join the Waitlist
          </p>
        </Link>
      </div>

      {/* Menu Icon shown on small devices */}
      <div
        id="btn-container"
        className="text-2xl text-slate-800 hover:text-primary sm:text-3xl flex flex-row gap-4 justify-end lg:hidden"
      >
        <AiOutlineMenu />
      </div>
    </header>
  );
}
