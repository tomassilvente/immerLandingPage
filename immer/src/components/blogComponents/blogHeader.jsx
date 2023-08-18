"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const NavigationList = [
  {
    NavName: "Home",
    NavAddress: "/home",
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
        className="text-left w-1/5 text-xl md:text-2xl lg:text-3xl font-bold not-italic"
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
        className="hidden sm:flex sm:flex-row w-3/5 gap-4 lg:gap-12 md:gap-5 justify-center"
      >
        {NavList.map((NavData) => (
          <p
            key={NavData.NavAddress}
            className="lg:text-xl text-base not-italic font-normal"
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
        className="w-1/5 hidden sm:flex sm:flex-row md:gap-2 lg:gap-4 justify-end"
      >
        <Link
          href="/blog"
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
        className="w-1/5 flex flex-row gap-4 justify-end sm:hidden"
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
