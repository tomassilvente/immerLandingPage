import Link from "next/link";

const FeatureContentButton = ({ btnAddress, btnName }) => {
  return (
    <Link
      href={btnAddress}
      className="bg-white w-full sm:w-[auto]  p-3 pt-2 pb-2 rounded-[8px]"
    >
      <p
        className="text-primary text-center gap-2 not-italic tracking-widest
       lg:text-base text-sm font-bold "
      >
        {btnName}
      </p>
    </Link>
  );
};

export default FeatureContentButton;
