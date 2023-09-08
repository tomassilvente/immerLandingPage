import React from 'react'

const ChallengeCard = ({img, title, desc, flexOption}) => {
  return (
    <div 
        className='gap-3 block sm:flex xl:px-3'
        style={{
            flexDirection: `${flexOption}`
        }}
        >
        <img src={img} alt="" className='w-full sm:w-[50%] lg:w-[60%] xl:w-[70%]' />
        <div className='flex flex-col gap-7 py-3'>
            <h1 className='text-black text-xl sm:text-2xl font-bold'>{title}</h1>
            <p className='text-[#555555] text-sm sm:text-base'>{desc}</p>
        </div>
    </div>
  )
}

export default ChallengeCard