
const FeatureContentButton = ({ btnName, clicked }) => {
  return (
    <button
    className={`${clicked ? 'text-white text-center gap-2 not-italic lg:text-base text-sm font-bold bg-primary w-full sm:w-[auto] h-auto p-3 pt-2 pb-2 rounded-[8px] ' : 'bg-white text-primary gap-2 not-italic lg:text-base text-sm font-bold  w-full sm:w-[auto] h-auto p-3 pt-2 pb-2 rounded-[8px] hover:bg-primary hover:text-white'}`}
    >
      <p>
        {btnName}
      </p>
    </button>
  );
};

export default FeatureContentButton;
