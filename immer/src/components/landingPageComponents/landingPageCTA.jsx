import React, { useState } from 'react'

const LandingPageCTA = () => {
    const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // add email to newsletter database

    // clear input
    setEmail("");
  };

  return (
    <div className='bg-[#000000] py-10 lg:py-20 px-10 xl:px-24 flex flex-col gap-5 lg:flex-row justify-between items-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:px-16 font-bold'>
            Be the First to Experience the Evolution of Entertainment!
        </h1>
        <div>
            <p className='text-base'>
            Unlock unique benefits by joining us ahead of the crowd. Sign up now for exclusive early access and updates.
            </p>
            <form
                onSubmit={handleSubmit}
                className="mt-8 sm:mt-4 flex flex-col gap-4 sm:block overflow-clip sm:rounded-md text-black">
            <input
                placeholder='Enter your email address'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="sm:w-4/5 rounded-lg sm:rounded-none px-5 py-3 text-base focus:outline-none"
            />
            <button
                type="submit"
                className="sm:w-1/5 rounded-[2rem] sm:rounded-none bg-[#FF6C00] px-[auto] py-3 text-base text-white">
                Sign up
            </button>
        </form>

        </div>
    </div>
  )
}

export default LandingPageCTA