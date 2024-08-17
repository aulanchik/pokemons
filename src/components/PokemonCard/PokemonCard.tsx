"use client";

import React, { useState, useLayoutEffect, memo } from "react";
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

const PokemonCard: React.FC<PokemonCardProps> = memo(({ id, name, image, types }) => {
    const [background, setBackground] = useState<string>("");
    const { color, loading } = useGetDominantColor(image);

    useLayoutEffect(() => {
        if (!loading && color) setBackground(color);
    }, [loading, background]);

    if (loading || !background) return null;

    return (
        <Link
            id={id}
            href={`/pokemon/${name}`}
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
                            <TypeBadge
                                key={type.slot}
                                color={background}
                                typeName={removeHyphens(capitalize(type.type.name))}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src={image}
                        width={85}
                        height={100}
                        layout="intrinsic"
                        className="contain-strict"
                        alt={name}
                    />
                </div>
            </div>
        </Link>
    );
});

const TypeBadge: React.FC<{ color: string; typeName: string }> = ({ color, typeName }) => (
    <div style={{ borderColor: color }} className="border rounded-full bg-white bg-opacity-90">
        <span className="text-md text-black font-semibold leading-loose p-2">{typeName}</span>
    </div>
);

export default PokemonCard;
