function Button({ text, type, className, variant, icon, onClick }) {
  const commonClasses = `text-sm uppercase p-2 rounded-lg ${className}`;

  const typeClasses =
    type === "fill"
      ? variant === "blue"
        ? "bg-primary1 text-white hover:bg-primary2"
        : "bg-white text-primary1 hover:bg-primary2 hover:text-white"
      : variant === "blue"
      ? "border-primary1 text-primary1 hover:border-primary3 hover:text-primary3"
      : "border-white text-white hover:border-primary4 hover:text-primary4";

  const borderClass = type === "outline" ? "border" : "";

  const iconClasses = icon
    ? "flex items-center justify-center w-2/5 p-2"
    : "w-full";

  return (
    <button
      onClick={onClick}
      className={`${typeClasses} ${borderClass} ${commonClasses} ${iconClasses}`}
    >
      {icon ? (
        <span className="flex items-center justify-center gap-2 text-2xl">
          {icon} {text}
        </span>
      ) : (
        text
      )}
    </button>
  );
}

export default Button;
