import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const SecondArticlesCard = ({
  id,
  img,
  btnTitle,
  tittle,
  desc,
  learnMoreLink,
}) => {
  return (
    <div
      id={id}
      className="w-full lg:h-[602px] h-fit flex flex-col items-center bg-[#F6F7F8] rounded-lg"
      style={{
        boxShadow:
          "0px 3px 2px 0px rgba(22, 2, 22, 0.10), 0px 6px 9px 0px rgba(22, 2, 22, 0.10)",
      }}
    >
      <div
        className="w-full h-[340px] lg:h-[220px] md:h-[250px] justify-center rounded-tr-[8px] rounded-tl-[8px] rounded-bl-[0px] rounded-br-[0px]
        sm:rounded-tl-[8px] sm:rounded-bl-[0px] sm:rounded-tr-[8px] sm:rounded-br-[0px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="w-full p-4 flex flex-col">
        <div className="bg-primary w-fit justify-center items-center rounded-lg p-2 gap-[10px] mb-2">
          <p className="text-white font-medium text-sm text-center leading-normal">
            {btnTitle}
          </p>
        </div>
        <p className="text-black text-xl font-bold not-italic leading-7 my-4">
          {tittle}
        </p>
        <p className="text-[#555555] text-sm font-normal not-italic leading-5 tracking-[0.056px] mb-6">
          {desc?.slice(0, 280) + "..."}
        </p>
        <Link
          href={learnMoreLink}
          className="w-[120px] p-1 flex flex-row gap-2 justify-start bg-[#F6F7F8] border-none text-start
             text-primary text-sm font-normal not-italic leading-normal mb-8 lg:mt-10 hover:underline transition"
        >
          Learn more
          <AiOutlineArrowRight className="mt-[5px]"/>
        </Link>
      </div>
    </div>
  );
};

export default SecondArticlesCard;
