import Image from "next/image";
import Link from "next/link";

const BlogFooter = () => {
  return (
    <footer className="bg-[#0D0D0D] p-8 sm:p-12 lg:pl-20 lg:pr-20">
      <section id="upper-footer" className="w-full">
        <div className="w-full flex flex-col gap-4 sm:flex-row text-white pb-8">
          <div className="lg:w-[55%] md:w-2/4 w-full flex flex-col">
            <div className="mb-8">
              <Image
                src="/assets/blog/immer_logo.svg"
                width={150}
                height={50}
                alt="instagram-icon"
                priority
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex w-full">
                <p className="text-white text-[19px] font-normal not-italic mb-8 lg:w-[78%] md:w-[78%] w-full">
                  Empowering entertainers. All-in-one control for event
                  coordination, venue booking, marketing, and ticket sales.
                </p>
              </div>
              <div className="flex flex-row w-full">
                <p
                  className="text-white lg:text-[28px] text-2xl mt-2 leading-[22px]
                 -tracking-[0.15px] font-semibold not-italic"
                >
                  Follow Us
                </p>
                <div className="flex flex-row lg:ml-8 ml-5 mt-1 gap-4">
                  <Link href="https://www.instagram.com">
                    <Image
                      className=""
                      src="/assets/blog/instagram.svg"
                      width={30}
                      height={30}
                      alt="instagram-icon"
                      priority
                    />
                  </Link>
                  <Link href="https://www.x.com">
                    <Image
                      className=""
                      src="/assets/blog/x.svg"
                      width={30}
                      height={30}
                      alt="instagram-icon"
                      priority
                    />
                  </Link>
                  <Link href="https://www.facebook.com">
                    <Image
                      className=""
                      src="/assets/blog/fb.svg"
                      width={30}
                      height={30}
                      alt="instagram-icon"
                      priority
                    />
                  </Link>
                  <Link href="https://www.threads.com">
                    <Image
                      className=""
                      src="/assets/blog/Threads.svg"
                      width={30}
                      height={30}
                      alt="instagram-icon"
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] md:w-2/4 w-full flex flex-row pt-2">
            <div className=" lg:w-2/4 md:w-[40%] w-2/4 flex flex-col text-white">
              <p className="text-primary mb-4 text-2xl font-semibold not-italic leading-[39px] tracking-[-0.52px]">
                Navigate
              </p>
              <p className="mb-4  text-[17px] not-italic font-medium leading-[31px] tracking-[-0.42px]">
                Home
              </p>
              <p className="mb-4  text-[17px] not-italic font-medium leading-[31px] tracking-[-0.42px]">
                Updates
              </p>
              <p className="mb-4 text-[17px] not-italic font-medium leading-[31px] tracking-[-0.42px]">
                Our Mission
              </p>
            </div>
            <div className="lg:w-2/4 md:w-[60%] w-2/4 flex flex-col">
              <p className="text-primary mb-4 text-2xl font-semibold not-italic leading-[39px] tracking-[-0.52px]">
                Contact Us
              </p>
              <p className="w-full mb-4 lg:break-normal break-words text-[17px] not-italic font-medium leading-[31px] tracking-[-0.42px]">
                immer.world@gmail.com
              </p>
              <p className="mb-4 text-[17px] sm:break-all not-italic font-medium leading-[31px] tracking-[-0.42px]">
                5 Union Square West, #1216
              </p>
              <p className="mb-4  text-[17px] not-italic font-medium leading-[31px] tracking-[-0.42px]">
                New York, New York 10003
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className=" h-px w-full border-slate-800" />
      <section
        id="lower-footer"
        className="w-full flex sm:flex-row flex-col text-white lg:text-base text-xs font-semibold 
        not-italic tracking-tight leading-6 mt-8 gap-4"
      >
        <div className="justify-start lg:w-[55%] w-full">
          <p className="sm:text-start  text-center lg:text-base text-sm leading-[31px] font-semibold not-italic">
            Copyright © 2023 immer. All rights reserved
          </p>
        </div>
        <div
          className="lg:w-[45%] justify-start w-full flex flex-row sm:pt-0 pt-2 
        text-end "
        >
          <div className="lg:w-2/4 md:w-[40%] w-2/4 ">
            <p className="lg:text-base text-sm text-left leading-[31px] font-semibold not-italic">
              Terms & Conditions
            </p>
          </div>
          <div className="lg:w-2/4 md:w-[60%] w-2/4 ">
            <p className="lg:text-base text-sm sm:text-left text-right leading-[31px] font-semibold not-italic ">
              Privacy & Policy
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default BlogFooter;
