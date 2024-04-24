import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalize, removeHyphens } from "@/utils";
import { useGetDominantColor } from "@/hooks";
import { PokemonType } from "@/types";

interface PokemonCardProps {
    id: string;
    name: string;
    image: string;
    types: PokemonType[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, image, types }: PokemonCardProps): JSX.Element | null => {
    const [background, setBackground] = useState<string>("");
    const { color, loading } = useGetDominantColor(image);

    useLayoutEffect(() => {
        if (!loading && color) setBackground(color);
    }, [loading, background]);

    if (loading || !background) return null;

    return (
        <Link
            id={id}
            href={name}
            style={{ background: `${background}` }}
            className="group flex flex-cols rounded-lg m-2 p-4"
        >
            <div className="flex items-center gap-4">
                <div className="flex flex-col flex-grow">
                    <p className="text-white line-clamp-1 text-2xl break-words w-[200px] font-bold leading-loose group-hover:underline">
                        {capitalize(name)}
                    </p>
                    <div className="flex gap-2">
                        {types.map((type: PokemonType) => (
                            <div
                                key={type["slot"]}
                                style={{ border: `1px solid ${background}` }}
                                className="border rounded-full bg-white bg-opacity-90"
                            >
                                <span className="text-md text-black font-semibold leading-loose p-2">
                                    {removeHyphens(capitalize(type.type["name"]))}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={image} width={85} height={100} className="contain-strict" alt={name} />
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
