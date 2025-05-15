const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth, // Add this
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red rounded-full text-white hover:bg-white hover:text-coral-red hover:shadow-3xl transition-all duration-300 ease-in-out border-coral-red"
        }
        ${fullWidth ? "w-full" : ""} rounded-full`}
      type="button"
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="Arrow" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
