"use client";

import ImmerCTA from "@/components/CTA";
import ImmerFooter from "@/components/Footer";
import ImmerHeader from "@/components/Header";
// ! Obviamente hay que modificar el nombre de la carpeta y hacer que renderice cada blog, de momento me centro en el diseño

import React from "react";

function Page() {
  return (
    <>
      <ImmerHeader
        iconUrl={"/assets/blog/immerNews.svg"}
        immerIconLink={"/blog"}
        iconWidth={190}
        iconHeight={180}
      />
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 mt-14">
        <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl">
              Suspendisse ut magna et ipsum sodales accumsan.
            </h1>
            <img
              src="https://dummyimage.com/200x200/ffffff/000000"
              alt="Imagen"
              className="justify-between w-full"
            />
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center md:space-x-2">
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                />
                <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
              </div>

              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                4 min read • 1,570 views
              </p>
            </div>
          </div>
          <div className="dark:text-gray-100">
            <p>Insert the actual text content here...</p>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              #Design
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              #News
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              #Concepts
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Nunc id magna mollis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Duis molestie, neque eget pretium lobortis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ImmerCTA />
      <ImmerFooter />
    </>
  );
}

export default Page;
