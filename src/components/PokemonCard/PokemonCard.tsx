import React from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalize, removeHyphens } from "@/utils";
import { PokemonType } from "@/types";

interface PokemonCardProps {
    name: string;
    image: string;
    types: PokemonType[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }: PokemonCardProps): JSX.Element => {
    return (
        <Link
            href={name}
            className={`group rounded-lg flex border-1 border-gray-300 bg-white dark:bg-gray-800 shadow-lg m-4 dark:border-gray-700 dark:hover:shadow-indigo-300 p-4`}
        >
            <div className="flex flex-col w-full h-full items-start content-center">
                <p className="text-black text-2xl leading-loose font-bold dark:text-white group-hover:underline">
                    {capitalize(name)}
                </p>
                <div className="flex items-start content-center gap-2">
                    {types.map((type: PokemonType) => (
                        <div
                            key={type["slot"]}
                            className="border rounded-full bg-white dark:bg-gray-700 dark:border-gray-700"
                        >
                            <span className="text-sm leading-loose font-semibold text-black dark:text-white p-2">
                                {removeHyphens(capitalize(type.type["name"]))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-auto h-auto">
                <Image src={image} width={150} height={150} className="contain-strict" alt={name} />
            </div>
        </Link>
    );
};

export default PokemonCard;
