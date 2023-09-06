import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-[#FFFFFF] py-16">
      <div className="container mx-auto w-[1540px] h-[477px] left-[191px] top-[140px] gap-[20px]">
        <div className="flex items-center">
          <div className="lg:w-[605px] h-[477px] ">
            <img
              src="/iStock-1366076847 1.png"
              alt="About Us"
              className="rounded-lg w-full"
            />
          </div>
          <div className="lg:w-[924px] h-[477px] lg:px-[48px]">
            <div className="mb-4 w-[795px] h-[116px]">
              <h2 className="text-[#232323] w-[795px] h-[72px] font-bold text-inter text-5xl line-height: 1 tracking-[0.4%]">Introducing a New Era with Immer</h2>
              <div className="w-[669px] h-[20px] bg-gradient-to-r from-[#FF6C00] to-[#FF6C0000] mt-2"></div>
            </div>
            <p className="text-[#555555] mb-12 text-inter w-[924px] h-[72px] font-normal text-2xl leading-9 tracking-[0.4%]">
            Shake off the old. Embrace evolution. With Immer, control and creativity return to the rightful hands: Yours.
            </p>
            <a
              href="/about"
              className="text-[#FF7711] w-[126px] h-[36px] hover:underline transition font-bold text-2xl leading-9 tracking-[0.4%]"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
