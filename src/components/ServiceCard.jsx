const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      class="flex-1 sm:w-[350px] sm:min-w-[350px]
   w-full rounded-[20px] shadow-3xl px-10 py-15"
    >
      <div className="mt-5 w-11 h-11 justify-center flex items-center rounded-full bg-coral-red">
        <img src={imgURL} alt={label} className="w-[24px] h-[24px]" />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mb-5 font-montserrat text-lg  leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
