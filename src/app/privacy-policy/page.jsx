"use client"
import ImmerHeader from "@/components/Header";
import PrivacyHeader from "./components/PrivacyHeader";
import ImmerFooter from "@/components/Footer";
import { useEffect, useState } from "react";

const CTAImg = [
    {
      id: "cta-1",
      img: "/assets/blog/cta.png",
    },
  ];

 

const PrivacyPolicy = () => {
    const CTABackground = CTAImg;

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (loading === true) {
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1);
        return () => clearTimeout(timeout);
      }
    }, [loading]);
  
  return (
    <div className={`${loading ? 'slide-enter' : 'slide-active'}`}>
        <ImmerHeader iconUrl={"/assets/blog/immerNews.svg"}
        immerIconLink={"/blog"}
        iconWidth={190}
        iconHeight={180}/>
        <PrivacyHeader titleWhite={'Privacy'} titleOrange={'Policy'} links={['Home >', ' Privacy >',' Privacy Policy']}/>
        <div className="m-5 md:m-20 font-light">
            <p>Effective Date: [Insert Date]</p>
            <p className="mt-4">At <span className=" text-primary font-semibold"> immer</span>, we understand that your privacy is of utmost importance. This Privacy Policy aims to provide you with clear and comprehensive information about how we collect, use, and protect your personal data when you use our website.</p>
            <p className="font-semibold mt-4">1. Information We Collect:</p>
            <p>We collect various types of information when you interact with immer, including:</p>
            <p>a. <span className="underline">Personal information:</span> When you subscribe to our email list, register on our website, or participate in surveys or promotions, we may collect personal information such as your name, email address, postal address, and any other information you choose to provide.</p>
            <p>b. <span className="underline">Automatically Collected information:</span> We use cookies, web beacons, and similar tracking technologies to automatically collect non-personal information about your interactions with our website. This information may include your IP address, browser type, operating system, referral URLs, pages viewed, and access times.</p>
            <p className="font-semibold mt-4">2. How We Use Your Information:</p>
            <p>We use the information we collect for various purposes, including:</p>
            <p>a. <span className="underline">Email Marketing:</span> We use your email address to send you marketing communications about immer's products, services, promotions, and events. You have the option to opt out of receiving these communications at any time by following the instructions provided in the emails.</p>
            <p>b. <span className="underline">Personalization:</span> We may use your information to personalize your experience on our website, such as showing you content and offers that align with your interests.</p>
            <p>c. <span className="underline">Analytics:</span> We analyze non-personal information to improve our website's functionality, content, and performance. This data helps us understand how visitors interact with our site and how we can enhance their experience.</p>
            <p className="font-semibold mt-4">3. How We Protect Your Information:</p>
            <p>We take your data security seriusly and employ reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no data transmission over the internet or storage system can be guaranteed as 100% secure.</p>
            <p className="font-semibold mt-4">4. Disclosure of Information:</p>
            <p>We do not sell trade, or rent your personal information to third parties. However, we may disclose your information in the following circumstances:</p>
            <p>a. <span className="underline">Legal Compliance:</span> We may share your information if required by law, regulation, or legal process.</p>
            <p className="font-semibold mt-4">5. Your Choices:</p>
            <p>You have control over your personal information:</p>
            <p>a. <span className="underline">Opt-Out:</span> You can opt out of receiving marketing communications from us by clicking the "unsubscribe" link provided in our emails.</p>
            <p className="font-semibold mt-4">6. Cookies:</p>
            <p>Cookies are small data files stored on your device when you visit our website. They help us analyze user behavior, improve site functionality, and provide a more personalized experience. You can manage cookies through your browser settings.</p>
            <p className="font-semibold mt-4">7. Changes to this Privacy Policy:</p>
            <p>We may update this Privacy Policy to reflect changes in our practices, regulatory requirements, or for other operational reasons. Any changes will be posted on this page with an updated effective date.</p>
            <p className="font-semibold mt-4">8. Contact Us:</p>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at: Postal Address: 5 Union Square West, #1216, New York, NY 10003</p>
            <p className="">Email: <span className="underline text-primary font-semibold">support@immer.world</span></p>
            <p className="mt-5">We are committed to addressing your inquiries promptly and ensuring that your personal data is handled in accordance with applicable privacy laws.</p>
        </div>
        <div
      className="sm:h-[300px] h-auto w-full lg:pl-28 lg:pr-28 px-5 sm:px-20 flex flex-col"
      style={{
        backgroundImage: `url(${CTABackground[0].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
        </div>
        <ImmerFooter />
    </div>
    
  )}
export default PrivacyPolicy;
