"use client";
import { useState } from "react";

const BlogCta = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // add email to newsletter database

    // clear input
    setEmail("");
  }

  return (
    <>
      <div className="flex h-[100vh] w-full flex-col gap-10 bg-[url('/blog-cta-bg.png')] bg-cover px-40 pt-36">
        <h2 className="text-[48px] font-[500] text-[#495057]">
          Join the
          <span className="font-[700] text-[#FF6C00]">immer</span> Revolution
        </h2>
        <p className="text-[26px] font-[400] text-[#1E1E1E] drop-shadow-xl">
          Are you ready to join the future of event coordination? Sign up now to
          be the first to know when immer launches. Don't miss out on the
          opportunity to redefine the way you experience live events.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-4/5  overflow-clip  rounded-r-md border border-gray-400 text-black shadow-[10px_10px_4px_0px_#00000030]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-4/5 px-5 py-5 text-xl"
          />
          <button
            type="submit"
            className="w-1/5 bg-[#FF6C00] px-[auto] py-5 text-lg font-bold text-white">
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogCta;
