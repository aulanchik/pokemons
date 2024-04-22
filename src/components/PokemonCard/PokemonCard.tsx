import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalize, removeHyphens } from "@/utils";
import { useColorData } from "@/hooks";
import { PokemonType } from "@/types";

interface PokemonCardProps {
    name: string;
    image: string;
    types: PokemonType[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }: PokemonCardProps): JSX.Element => {
    const [backgroundColor, setBackgroundColor] = useState("");
    const [palette, setPalette] = useState<string[]>([]);
    const { paletteColors, dominantColor, loading } = useColorData(image);

    useEffect(() => {
        if (!loading && dominantColor) setBackgroundColor(dominantColor);
        if (!loading && paletteColors) setPalette(paletteColors);
    }, [loading, backgroundColor, palette]);

    return (
        <Link
            href={name}
            className={`group rounded-lg flex flex-row border-gray-300 shadow-xl transition 0.125s ease-in m-4 p-4`}
            style={{
                background: `${backgroundColor}`,
                opacity: backgroundColor ? 1 : 0,
                border: `1px solid ${backgroundColor}`
            }}
        >
            <div className="flex flex-col w-full h-full items-start content-center">
                <p className="text-white text-3xl leading-loose font-bold group-hover:underline">{capitalize(name)}</p>
                <div className="flex items-start content-center gap-2">
                    {types.map((type: PokemonType) => (
                        <div
                            key={type["slot"]}
                            style={{ border: `1px solid ${palette[3]}` }}
                            className="border rounded-full bg-white bg-opacity-80"
                        >
                            <span className="text-md text-black leading-loose p-2">
                                {removeHyphens(capitalize(type.type["name"]))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center stretch w-auto h-auto">
                <Image src={image} width={150} height={150} className="contain-strict" alt={name} />
            </div>
        </Link>
    );
};

export default PokemonCard;
