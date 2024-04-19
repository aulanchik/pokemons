import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", ...props }, forwardRef) => {
    const inputStyle = "flex h-10 w-full border rounded-md px-4 py-2 text-lg";
    const textStyle = "text-black";

    return (
      <input
        type={type}
        ref={forwardRef}
        className={`${inputStyle} ${textStyle}`}
        {...props}
      />
    );
  }
);

export default SearchInput;
