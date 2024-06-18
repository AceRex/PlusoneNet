import React from "react";

function Textarea({ placeholder, value, onChange, required, row }) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows={row}
      className="p-2 px-4 my-3 w-[100%] bg-neutral/20 placeholder:text-dark/20 placeholder:text-sm rounded-md border-2 border-neutral/90"
      required={required ? true : false}
    />
  );
}

export default Textarea;
