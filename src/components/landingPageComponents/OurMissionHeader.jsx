"use client"
import Link from "next/link";
import { useState } from "react";

export default function OurMissionHeader({titleWhite, titleOrange, links }){

    const [currentLink, setCurrentLink] = useState('/privacy-policy')

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
        <div className="flex">
          {links.map(link=><p className="text-white ml-1">{link}</p>)}
        </div>
        <div className="flex flex-col">
          <h1 className="text-[11vw] sm:text-[9vw] leading-[1.2] text-[#D9D9D9] drop-shadow-[2px_2px_0px_rgba(255,108,0,0.5)] font-bold">
            {titleWhite}
            <span className="text-[#FF6C00] ml-4">{titleOrange}</span>
          </h1>
        <p className="text-white my-3">Go to:</p>
          <div className="flex">
            <select 
              onChange={e => setCurrentLink(e.target.value)}
              className="p-2 w-[70%]">
                <option value="/privacy-policy">Privacy Policy</option>
                <option value="/terms-of-service">Terms of Services</option>
                <option value="/our-mission">Our Mission</option>
                <option value="/contact-us">Contact</option>
            </select>
            <Link
              href={currentLink}
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