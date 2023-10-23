"use client"
import ImmerHeader from "@/components/Header";
import PrivacyHeader from "../privacy-policy/components/PrivacyHeader";
import ImmerFooter from "@/components/Footer";
import { useEffect, useState } from "react";

const CTAImg = [
    {
      id: "cta-1",
      img: "/assets/blog/cta.png",
    },
  ];

const TermsOfService = () => {
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
        <PrivacyHeader titleWhite={'Terms of '} titleOrange={' Service'} links={['Home >', 'Terms & Conditions >','Terms of Service']}/>
        <div className="m-5 md:m-20 font-light">
            <p>Effective Date: [Insert Date]</p>
            <p className="mt-4">At <span className=" text-primary font-semibold"> immer</span>, Please read these Terms of Service ("Agreement" or "TOS") carefully before using our website or any of ourservices.</p>
            <p className="font-semibold mt-4">1. Acceptance of Terms:</p>
            <p>By accessing or using the immer website and its services, you agree to be bound by these TOS. If you do not agree with any part of these terms, please do not use our services.</p>
            <p className="font-semibold mt-4">2. Changes to TOS:</p>
            <p>We reserve the right to update or change these TOS at any time. Any modifications will be effective upon posting on our website. Your continued use of our services after any changes indicate your acceptance of those changes.</p>
            <p className="font-semibold mt-4">3. Description of Services:</p>
            <p>immer provides a platform that offers access to information about our services, products, and promotions. We may also provide interactive features, such as email subscriptions, surveys, and feedback forms.</p>
            <p className="font-semibold mt-4">4. User Conduct:</p>
            <p>You agree not to:</p>
            <ul class="list-disc mx-7">
              <li>Use our services for any unlawful purpose or to promote illegal activities.</li>
              <li>Impersonate another person or entity or falsely state or misrepresent your affiliation with a person or entity.</li>
              <li>Attempt to gain unauthorized access to any portion of our website, systems, or networks.</li>
              <li>Engage in any activity that interferes with or disrupts our services or networks.</li>
            </ul>
            <p className="font-semibold mt-4">5. Intellectual Property:</p>
            <p>All content on the immer website, including text, graphics, logos, images, and software, is the property of immer and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our explicit permission.</p>
            <p className="font-semibold mt-4">6. Termination:</p>
            <p>We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for any violation of these TOS.</p>
            <p className="font-semibold mt-4">7. Disclaimer of Warranties:</p>
            <p>Our services are provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content on our website. Your use of our services is at your sole risk.</p>
            <p className="font-semibold mt-4">8. Limitation of Liability:</p>
            <p>To the fullest extent permitted by law, immer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>
            <p className="font-semibold mt-4">9. Governing Law:</p>
            <p>This Agreement is governed by and construed in accordance with the laws of the state of New York, without regard to its conflict of law principles.</p>
            <p className="font-semibold mt-4">10. Contact Information:</p>
            <p>If you have any questions about these TOS, please contact us at:</p>
            <p>Postal Address: 5 Union Square West, #1216, New York, NY 10003</p>
            <p className="">Email: <span className="underline text-primary font-semibold">support@immer.world</span></p>
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
export default TermsOfService;
