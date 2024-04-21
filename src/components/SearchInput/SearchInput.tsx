import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(({ type = "text", ...props }, forwardRef) => {
    const inputStyle =
        "w-full rounded-md px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500";
    const textStyle = "text-black";

    return (
        <div>
            <input type={type} ref={forwardRef} className={`${inputStyle} ${textStyle}`} {...props} />
            <MagnifyingGlassIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
    );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
