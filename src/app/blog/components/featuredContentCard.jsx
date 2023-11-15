import Link from "next/link";
import Image from "next/image";

const FeaturedContentCard = ({
  img,
  category,
  eventDate,
  title,
  details,
  hostTitle,
  hostName,
  hostImage,
  showHost,
  id,
}) => {

  return (
    <Link href={`/blog/${id}`}>
    <div
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className={`w-[245px] flex flex-col cursor-pointer hover:scale-105 ease-out duration-300
         mb-8 p-4 pb-2 h-[421px] bg-white rounded-md ${
           showHost ? "min-h-[490px]" : "h-[421px]"
         }`}
    >
      <div
        className="mb-3 w-full h-[229px] rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="flex justify-end p-3">
          <div className="text-white bg-primary w-20 p-2 h-7 rounded-lg">
            <Link href={`/blog/${category}`}>
              <p className="text-[7px] font-bold uppercase text-center">
                {category}
              </p>
            </Link>
          </div>
        </div>
      </div>
      <p className="mb-1 text-[#232323] text-xs font-normal text-left ml-1">
        {eventDate}
      </p>
      
        <p className="mb-3 text-lg font-bold line-clamp-2 text-primary text-left ml-1 whitespace-normal">
          {title?.split("\n").slice(0, 2).join("\n")}
        </p>
        <p className="text-xs font-normal text-[#232323] line-clamp-3 whitespace-normal text-left mx-2">
          {details?.split("\n").slice(0, 3).join("\n").replace(/([*_`~#])/g, '')}
        </p>
      {showHost && (
        <Link href="/author">
          <hr className="my-2" />
          <div id="host-section" className="flex flex-row">
            <Image
              className="rounded-full border-none ml-1"
              src={hostImage}
              width={55}
              height={55}
              alt="host-image"
              priority
            />
            <div className="flex flex-col w-full">
              <p className="ml-3 mt-2 leading-5 text-left text-xs font-bold not-italic text-[#343A40]">
                By {hostName}
              </p>
              <p className="text-xs ml-3 text-left leading-5 font-normal not-italic text-[#6C757D]">
                {hostTitle}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
    </Link>
  );
};

export default FeaturedContentCard;
