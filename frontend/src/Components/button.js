function Button({ text, type, className, variant }) {
  return (
    <>
      {type === "fill" ? (
        <button
          className={`${
            variant === "blue"
              ? "bg-primary1 text-white hover:bg-primary2"
              : "bg-white text-primary1 hover:bg-primary2 hover:text-white"
          } ${className} uppercase text-sm  p-2 w-[100%] rounded-lg`}
        >
          {text}
        </button>
      ) : type === "outline" ? (
        <button
          className={`${
            variant === "blue"
              ? "border-primary1 text-primary1 hover:border-primary3 hover:text-primary3 "
              : "border-white text-white hover:border-primary4 hover:text-primary4"
          }  border ${className} text-sm uppercase p-2 w-[100%] rounded-lg`}
        >
          {text}
        </button>
      ) : null}
    </>
  );
}

export default Button;
