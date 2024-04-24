"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components";
import * as LabelPrimitives from "@radix-ui/react-label";
import { capitalize, formatEntry, removeHyphens } from "@/utils";
import { Pokemon, PokemonStat, PokemonType, PokemonAbility } from "@/types";
import { useGetDominantColor } from "@/hooks";
import { getPokemonByName } from "@/api";

export default function Page({ params }: { params: { name: string } }) {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [background, setBackground] = useState<string>("");
    const image = pokemon?.sprites.other.dream_world.front_default || "";

    const { color, loading } = useGetDominantColor(image);
    const { name } = params;

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const fetchedPokemon = await getPokemonByName(name);
                setPokemon(fetchedPokemon);
            } catch (error) {
                console.error("Error fetching Pokemon:", error);
            }
        }

        fetchPokemon();

        return () => {
            setPokemon(undefined);
        };
    }, [name]);

    useEffect(() => {
        if (!loading && color) {
            setBackground(color);
        }
    }, [loading, color]);

    if (loading || !pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center content-start h-screen">
            <div className="flex flex-col items-center spaces-y-8 p-8">
                <Header />
                <div
                    style={{ background: `${background}` }}
                    className="flex flex-col items-center border rounded-lg m-6 p-4"
                >
                    <div className="flex flex-cols m-4 content-strict">
                        <Image src={image} alt={pokemon.name} height={250} width={250} />
                    </div>
                    <p className="text-white font-bold text-xl text-center">Details</p>
                    <p className="text-white font-bold text-3xl">{capitalize(pokemon.name)}</p>
                    <div className="m-1 p-2 flex flex-wrap gap-4 items-start content-center">
                        {pokemon.types.map((type: PokemonType) => (
                            <div
                                key={type["slot"]}
                                className="px-4 py-2 rounded-full bg-orange-500 flex items-center justify-center"
                            >
                                <LabelPrimitives.Root className="text-white font-semibold">
                                    {removeHyphens(capitalize(type.type["name"]))}
                                </LabelPrimitives.Root>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-2xl font-semibold text-white text-center p-2">Stats</h2>
                    <div className="mt-2 grid grid-cols-2 gap-4 p-2">
                        {pokemon.stats.map((statObject: PokemonStat) => {
                            const statName = formatEntry(statObject.stat.name);
                            const statValue = statObject.base_stat;

                            return (
                                <div className="grid grid-cols-[repeat(auto-fit, minmax(200px,1fr))]" key={statName}>
                                    <div key={statName} className="flex flex-col items-start content-center">
                                        <h3 className="text-white p-2 inline-block">
                                            <p className="text-lg inline-block">
                                                {statName} : <span className="font-bold text-xl">{statValue}</span>
                                            </p>
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <h2 className="text-2xl font-semibold text-white text-center p-2">Abilities</h2>
                    <div className="m-1 p-2 flex flex-wrap gap-4 items-start content-center">
                        {pokemon.abilities.map((ability: PokemonAbility) => (
                            <div
                                key={ability.ability["id"]}
                                className="px-4 py-2 rounded-full bg-blue-500 flex items-center justify-center bg-opacity-80"
                            >
                                <LabelPrimitives.Root className="text-white font-semibold">
                                    {removeHyphens(capitalize(ability.ability["name"]))}
                                </LabelPrimitives.Root>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
