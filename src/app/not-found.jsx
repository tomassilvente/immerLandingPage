import ImmerFooter from "@/components/Footer";
import ImmerCTA from "@/components/CTA";
import ImmerHeader from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
    <ImmerHeader
        iconUrl={"/immer logo_orange.svg"}
        immerIconLink="/"
        iconWidth={120}
        iconHeight={100}
    />
    <div>
            <div className="flex mt-[70px] justify-center items-center lg:text-[250px] text-[100px] font-bold">
                <p>4</p>
                <Image className="lg:w-[200px] w-[70px]" width={200} height={200} src={'/favicon_io/android-chrome-512x512.png'} alt={'img'}/>
                <p >4</p>
            </div>
            <div className="text-center mb-[100px] ">
                <p className="lg:text-3xl text-xl">Page not found :(</p>
                <p className="my-10">The Page you are looking for doesn't exist or an other error occurred.</p>
                <Link className="bg-primary text-white hover:bg-[#d6844a] p-[14px] rounded-[8px]" href='/'>Home Page</Link>
            </div>
        </div>
    <div className="hidden lg:block">
      <ImmerCTA />
    </div>
    <ImmerFooter/>
    </div>
  );
}