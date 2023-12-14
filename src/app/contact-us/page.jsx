"use client";
import ImmerHeader from "@/components/Header";
import ImmerFooter from "@/components/Footer";
import { useEffect, useState, useRef } from "react";
import OurMissionHeader from "@/components/landingPageComponents/OurMissionHeader";

const CTAImg = [
  {
    id: "cta-1",
    img: "/assets/blog/cta.png",
  },
];

const ContactUs = () => {
  const formRef = useRef();
  const CTABackground = CTAImg;
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    const fullName = formRef.current["fullName"].value;
    const email = formRef.current["email"].value;
    const message = formRef.current["message"].value;

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        message,
      }),
    });
    console.log(await response.json());

    // Clear form fields
    formRef.current.reset();

    // Show success tick for a brief moment
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  useEffect(() => {
    if (loading === true) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <div className={`${loading ? "slide-enter" : "slide-active"}`}>
      <ImmerHeader
        iconUrl={"/assets/blog/immerNews.svg"}
        immerIconLink={"/blog"}
        iconWidth={190}
        iconHeight={180}
      />
      <OurMissionHeader
        titleWhite={"Contact"}
        titleOrange={"Us    "}
        links={["Home >", " Contact >", "Contact Us"]}
      />
      <div className="w-[80%] m-5 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 bg-[#EDEEF1] dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-400">
              Wanna be part of immer world? Get in touch to know you more.
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={sendMail}
          noValidate
          className="space-y-6 mt-4"
        >
          <div>
            <label htmlFor="fullName" className="text-xl font-bold">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-700"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xl font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-3 rounded dark:bg-gray-700"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xl font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-700"
            ></textarea>
          </div>
          {isSuccess && (
            <div
              className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-primary text-white rounded-full"
              style={{ fontSize: "1.5rem" }}
            >
              ✔
            </div>
          )}
          <button
            className="row-start-3 bg-primary text-white mt-8 py-3 w-[100%] rounded-[8px]"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <div
        className="sm:h-[300px] h-auto w-full lg:pl-28 lg:pr-28 px-5 sm:px-20 flex flex-col"
        style={{
          backgroundImage: `url(${CTABackground[0].img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <ImmerFooter />
    </div>
  );
};

export default ContactUs;
