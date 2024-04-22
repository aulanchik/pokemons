import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const Header: React.FC = () => (
    <div className="absolute top-0 left-0 m-4">
        <Link href="/" className="text-blue-500 dark:text-blue dark:hover:text-blue-100 hover:underline">
            <div className="flex items-center gap-4">
                <ArrowLeftIcon className="h-6 w-6" />
                <span>Back</span>
            </div>
        </Link>
    </div>
);

export default Header;
