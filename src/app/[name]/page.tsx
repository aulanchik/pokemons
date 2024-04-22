"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components";
import * as LabelPrimitives from "@radix-ui/react-label";
import { capitalize, formatEntry, removeHyphens } from "@/utils";
import { Pokemon, PokemonStat, PokemonType, PokemonAbility } from "@/types";
import { getPokemonByName } from "@/api";

export default function Page({ params }: { params: { name: string } }) {
    const [pokemon, setPokemon] = useState<Pokemon>();
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

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center content-start h-screen">
            <div className="p-2 flex flex-col items-center spaces-y-8 w-full">
                <Header />
                <div className=" flex flex-col items-center m-8">
                    <div className="flex flex-cols pt-8">
                        <Image
                            src={pokemon.sprites?.other.dream_world.front_default}
                            alt={pokemon.name}
                            height={300}
                            width={300}
                        />
                    </div>
                    <h1 className="text-black font-bold text-2xl">{capitalize(pokemon.name)}</h1>
                    <div className="mt-4 grid grid-cols-2 gap-4 m-8">
                        {pokemon.stats.map((statObject: PokemonStat) => {
                            const statName = formatEntry(statObject.stat.name);
                            const statValue = statObject.base_stat;

                            return (
                                <div
                                    className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full h-full"
                                    key={statName}
                                >
                                    <div key={statName} className="flex flex-col items-center">
                                        <h3 className="p-2 text-black dark:text-white">
                                            <p className="font-bold text-left">
                                                {statName}: {statValue}
                                            </p>
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <LabelPrimitives.Root className="text-xl font-semibold text-black dark:text-white">
                        Belongs to
                    </LabelPrimitives.Root>
                    <div className="mt-4 flex flex-wrap gap-4 items-center space-2">
                        {pokemon.types.map((type: PokemonType) => (
                            <div
                                key={type["slot"]}
                                className="px-4 py-2 rounded-full dark:bg-orange-800 flex items-center justify-center"
                            >
                                <LabelPrimitives.Root className="text-black dark:text-white">
                                    {removeHyphens(capitalize(type.type["name"]))}
                                </LabelPrimitives.Root>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-xl font-semibold text-black dark:text-white pt-8">Abilities</h2>
                    <div className="mt-4 flex flex-wrap gap-4 items-center space-2">
                        {pokemon.abilities.map((ability: PokemonAbility) => (
                            <div
                                key={ability.ability["id"]}
                                className="px-4 py-2 rounded-full dark:bg-blue-800 flex items-center justify-center"
                            >
                                <LabelPrimitives.Root className="text-black dark:text-white">
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
