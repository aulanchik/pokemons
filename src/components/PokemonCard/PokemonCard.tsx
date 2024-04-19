import React from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalize } from "@/utils";

interface PokemonCardProps {
    name: string;
    image: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image }: PokemonCardProps): JSX.Element => {
    return (
        <Link
            href={name}
            className="group rounded-lg border border-gray-300 bg-white hover:shadow-2xl m-4 px-5 py-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-indigo-300"
        >
            <Image src={image} width={200} height={200} alt={name} />
            <h1 className="text-black text-[24px] text-center font-bold dark:text-white mt-auto mb-auto group-hover:underline">
                {capitalize(name)}
            </h1>
        </Link>
    );
};

export default PokemonCard;
