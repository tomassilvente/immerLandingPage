import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full lg:pl-28 lg:pr-28 px-5 sm:px-20 pb-16">
      <div className="flex flex-col-reverse sm:flex-row gap-8 items-center">
        <div className="sm:w-[40%]">
          <img
            src="/iStock-1366076847 1.png"
            alt="About Us"
            className="rounded-lg w-full"
          />
        </div>
        <div className="sm:w-[60%] flex flex-col">
          <div className="mb-4">
            <h2 className="text-[#232323] font-bold text-2xl xl:text-4xl tracking-[0.4%]">
              Introducing a New Era with Immer
            </h2>
            <div className="mt-5 w-[75vw] sm:w-[35vw] h-3 bg-gradient-to-r from-[#FF6C00] to-[#FF6C0000]"></div>
          </div>
          <p className="text-[#555555] text-justify font-normal text-sm xl:text-base sm:pr-28 leading-normal">
            Shake off the old. Embrace evolution. With Immer, control and
            creativity return to the rightful hands: Yours.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
