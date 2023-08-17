"use client";

import Link from "next/link";
import React, { useState } from "react";

export const NavBar = () => {

    let pages=[
        {name: "Home", active:true, href:'#'},
        {name: "Updates", active:true,  href:'/'},
        {name: "Our Mission", active:true,  href:'/'},
        {name: "Contact", active:true,  href:'/'},
    ]

  return (
    <header
      className="flex flex-row w-full justify-between items-center
     fixed z-20 top-0 left-0 pl-5 pr-5 bg-white"
    >
      <div className="ml-20 flex text-black">
            <Link href='/'><img className="w-[225px] xl:w-[280px] pt-1"  src='../immerNews.svg' /></Link>
            <div  className="flex pt-7  pl-10 xl:pl-28 text-lg font-light">
            {pages.map(page =>{
                return(
                    <Link type="page" className=" pb-5 pl-10 active:text-[#FF6C00] active:font-semibold active:underline active:decoration-[6px] underline-offset-[22px] " href={page.href}> {page.name} </Link>
                )
                })}
            </div>
            <button href='/' className=" bg-[#FF6C00] font-semibold text-white text-sm xl:ml-40 xl:my-5 xl:px-7 rounded-lg ">Join the Waitlist</button>
      </div>
    </header>
  );
};