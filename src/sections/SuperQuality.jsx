import Button from "../components/Button";
import shoe8 from "../assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize  text-slate-gray  font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-10 lg:max-w-lg info-text">
          Ensuring premium comfort and stlye, our meticulously crafted footwear
          is designed to elevate your performance and confidence and also
          provide you with unmatched quality, innocvation, and a touch of
          elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to excellence ensure's you satifaction
        </p>
        <div className="mt-10">
          <Button label="Explore Now" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center6">
        <img className="object-contain" src={shoe8} width={570} height={522} />
      </div>
    </section>
  );
};
export default SuperQuality;
