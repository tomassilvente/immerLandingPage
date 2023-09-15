import Link from "next/link";
import Image from "next/image";

const SecondBloggersCard = ({
  img,
  category,
  eventDate,
  title,
  details,
  hostTitle,
  hostName,
  hostImage,
  id,
}) => {
  const truncatedDetails = (details ?? "").split("\n").slice(0, 3).join("\n");
  const truncatedTitle = (title ?? "").split("\n").slice(0, 2).join("\n");
  const truncatedHostName = (hostName ?? "").split("\n").slice(0, 1).join("\n");
  const hostTitle2 = (hostTitle ?? "").split("\n").slice(0, 1).join("\n");

  return (
    <div
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className="p-4 pb-2 w-full mt-1 mb-3 bg-white rounded-md hidden lg:flex lg:flex-row "
    >
      <div id="image-section" className="">
        <div
          className="mb-3 sm:w-[155px] w-[140px] h-[179px] rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="flex justify-end p-3">
            <div className="text-white bg-primary w-20 p-2 h-7 rounded-lg">
              <Link href={`/event/${category}`}>
                <p className="text-[10px] font-bold uppercase text-center">
                  {category}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <p className="mb-1 text-[#232323] text-xs font-normal text-left ml-1">
          {eventDate}
        </p>
      </div>
      <div id="details-section" className="p-2 flex flex-col">
        <Link href={`/event/${id}`}>
          <p className="mb-3 text-lg font-bold text-primary line-clamp-2 text-left ml-1">
            {truncatedTitle}
          </p>
        </Link>
        <p className="text-xs font-normal text-[#232323]  line-clamp-3 text-left ml-1">
          {truncatedDetails}
        </p>
        <div id="blog-author1" className="mt-2">
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
                <p className="ml-3 mt-2 leading-5 text-left text-xs font-bold line-clamp-1 not-italic text-[#343A40]">
                  By {truncatedHostName}
                </p>
                <p className="text-xs ml-3 text-left leading-5 font-normal line-clamp-1 not-italic text-[#6C757D]">
                  {hostTitle2}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondBloggersCard;
