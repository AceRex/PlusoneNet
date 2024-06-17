import React from "react";

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 px-4 my-3 w-[100%] bg-neutral/20 placeholder:text-dark/20 placeholder:text-sm rounded-md border-2 border-neutral/90"
    />
  );
}

export default Input;
