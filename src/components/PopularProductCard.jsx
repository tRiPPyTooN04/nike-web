import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div
      className="flex flex-1 flex-col w-full max-sm:w-full
    "
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] rounded-lg" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-slate-gray text-lg">{rating}</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p
        className="mt-2 font-montserrat font-semibold leading-normal
      text-coral-red "
      >
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
