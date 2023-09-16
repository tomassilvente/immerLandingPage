"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const [email, setEmail] = React.useState("");
  const [username, setUser] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();

  const SignInImg = "/assets/sign/signUp.svg";

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, username);

    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/adminblog");
  };
  return (
    <div className="w-full flex flex-row h-screen bg-white">
      <div
        className="hidden w-[40%] lg:flex lg:flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${SignInImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl text-center text-white invisible sm:visible ">
          Welcome to
        </h1>
        <Image
          className="invisible lg:visible"
          src="/assets/sign/immer_logo_white.svg"
          width={290}
          height={50}
          alt="immer-signUp-img"
        />
      </div>

      <div className="w-full lg:w-[60%] flex flex-col justify-center items-center">
        <h1 className="flex lg:hidden text-2xl text-center font-normal not-italic text-[#404547]">
          Welcome to
        </h1>
        <Image
          className="flex sm:block lg:hidden md:block md:mb-4 mb-4"
          src="/assets/blog/immer_logo.svg"
          width={200}
          height={1}
          alt="immer-logo"
        />
        <div className="flex flex-col mt-16 sm:mt-0 w-full sm:pl-32 sm:pr-32 pl-14 pr-14">
          <div className="flex justify-center lg:justify-start">
            <Image
              className="hidden sm:hidden md:hidden lg:block lg:mb-8 mb-16"
              src="/assets/blog/immer_logo.svg"
              width={140}
              height={1}
              alt="immer-logo2"
            />
          </div>
          <div className="flex justify-center">
            <Image
              className="mb-6 mt-2"
              src="/assets/sign/success.svg"
              width={150}
              height={1}
              alt="success-icon"
              style={{
                display: success ? "flex" : "none",
              }}
            />
          </div>
          <p
            className="text-center text-black mt-6 text-xl font-normal "
            style={{
              display: success ? "block" : "none",
            }}
          >
            You've successfully joined the waitlist
          </p>
          <form
            onSubmit={handleForm}
            className="form font-light text-black"
            style={{
              display: success ? "none" : "block",
            }}
          >
            <label htmlFor="name">
              <p className="pb-2 sm:text-xl text-sm text-[#404547] font-normal md:mt-8 mt-0">
                FULL NAME
              </p>
              <input
                className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
                onChange={(e) => setUser(e.target.value)}
                required
                type="name"
                name="name"
                id="name"
                placeholder="ex: Josh Josh"
              />
            </label>
            <label htmlFor="email">
              <p className="mb-2 sm:text-xl text-sm font-normal text-[#404547]">
                EMAIL
              </p>
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
              <p className="text-[#979797] sm:text-lg text-sm font-normal not-italic">
                By submitting this form you agree our
                <Link href="/signin">
                  <span className="underline pl-2 text-primary">
                    terms and conditions
                  </span>
                </Link>
              </p>
            </label>
            <button
              className="font-normal text-xl bg-primary text-white mt-8 py-3 w-[100%] rounded-[8px]"
              type="submit"
              onClick={() => setSuccess(!success)}
            >
              Sign up
            </button>
          </form>

          <Link
            href="/home"
            className="text-xl text-center font-normal ml-[5%] sm:ml-0 row-start-3 bg-primary text-white mt-8 py-3 w-[100%] rounded-[8px]"
            type="submit"
            style={{
              display: success ? "block" : "none",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
