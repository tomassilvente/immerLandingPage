"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const [email, setEmail] = React.useState("");
  const [user, setuser] = React.useState("");
  const [success, setSuccess] = React.useState(false)
  const router = useRouter();

  const SignInImg = '/assets/sign/signUp.svg'

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }


    console.log(result);
    return router.push("/adminblog");
  };
  return (
    <div className="flex h-[975px] bg-white">
      <div className="lg:w-[50%] sm:w-[80%] w-0 grid content-center place-items-center"
      style={{
        backgroundImage: `url(${SignInImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
        <h1 className="text-4xl text-center invisible sm:visible ">Welcome to</h1>
        <Image className="invisible sm:visible" src={'/assets/sign/immer_logo_white.svg'} width={400} height={1} />
      </div>
      <div className="sm:p-10 xl:p-20 grid-rows-3 md:w-[60%]">
      <h1 className="text-2xl ml-20 text-center text-primary mt-20 sm:mt-0 sm:invisible">Welcome to</h1>
      <Image className="ml-[170px] mt-2 sm:m-0 sm:w-0" src={'/assets/blog/immer_logo.svg'} width={250} height={1} />
        <div className="mt-20 sm:mt-0 ml-20 sm:ml-0 lg:mx-20 mb-30">
        <Image className="mb-8 mt-20 sm:w-[120px] w-0" src={'/assets/blog/immer_logo.svg'} width={250} height={1} />
        <Image 
          className=" 2xl:mx-[35%]  lg:ml-[23%] md:ml-[20%] sm:ml-[10%]  mb-20 mt-20 ml-32  " 
          src={'/assets/sign/success.svg'} 
          width={200} height={1} 
          style={{
            display:
              success
              ? "flex"
              : "none"
          }}/>
          <p 
            className='ml-16 sm:ml-0 text-center text-black font-light mb-20 text-xl '
            style={{
              display:
                success
                ? "block"
                : "none"
            }}
          >
            You've successfully joined the waitlist
          </p>
          <form 
            onSubmit={handleForm} 
            className="form font-light text-black"
            style={{
              display:
                success
                ? "none"
                : "block"
            }}
            >
            <label className="row-start-1 row-end-2" htmlFor="email">
              <p className="pb-4 ">FULL NAME</p>
              <input
                className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
                onChange={(e) => setuser(e.target.value)}
                required
                type="name"
                name="name"
                id="name"
                placeholder="ex: Josh Josh"
              />
            </label>
            <label className="row-start-2  row-end-3" htmlFor="password">
              <p className="mb-4">EMAIL</p>
              <input
                className="w-[100%] lg:h-14 h-12 rounded-lg p-5 mb-8 bg-[#dddddd]"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="ex: example@mail.com"
              />
            </label>
            <label>
              <p className=" text-[#b9b9b9]">
                By submitting this form you agree our 
                <Link href='/signin'> 
                  <span className="underline pl-2 text-[#FF6C00]">
                    terms and conditions
                  </span>
                </Link>
              </p>
            </label>
            <button 
              className="row-start-3 bg-primary text-white mt-8 py-3 w-[100%] rounded-[8px]" 
              type="submit" 
              onClick={() => setSuccess(!success)}>
                Sign up
            </button>
          </form>
          
          <button 
              className="ml-10 sm:ml-0 row-start-3 bg-primary text-white mt-8 py-3 w-[100%] rounded-[8px]" 
              type="submit"
              style={{
                display:
                  success
                  ? "block"
                  : "none"
              }}
              onClick={() => setSuccess(!success)}>
               Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;