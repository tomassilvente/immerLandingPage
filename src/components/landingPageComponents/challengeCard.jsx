import React from 'react'

const ChallengeCard = ({img, title, desc, flexOption}) => {
  return (
    <div
      className="gap-3 block sm:flex xl:px-3 py-4 lg:py-8 md:py-6"
      style={{
        flexDirection: `${flexOption}`,
      }}
    >
      <img src={img} alt="" className="w-full sm:w-[40%]" />
      <div className="flex flex-col gap-7 py-3">
        <h1 className="text-black text-xl sm:text-2xl font-bold">{title}</h1>
        <p className="text-[#555555] sm:text-xl font-normal leading-8 -tracking-[0.096px] text-base">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ChallengeCard