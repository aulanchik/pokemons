import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(({ type = "text", ...props }, forwardRef) => {
    const inputContainerStyle = "relative w-full";
    const inputStyle =
        "w-full rounded-md px-10 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500";
    const iconStyle = "absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400";

    return (
        <div className={inputContainerStyle}>
            <input type={type} ref={forwardRef} className={inputStyle} {...props} />
            <MagnifyingGlassIcon className={iconStyle} />
        </div>
    );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
