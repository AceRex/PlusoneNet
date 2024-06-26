import React from "react";

function Input({ type, placeholder, value, onChange, required, accept }) {
  return (
    <input
      type={type}
      accept={accept}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="p-2 px-4 my-3 w-[100%] bg-neutral/20 placeholder:text-dark/20 placeholder:text-sm rounded-md border-2 border-neutral/90"
      required={required ? true : false}
    />
  );
}

export default Input;
