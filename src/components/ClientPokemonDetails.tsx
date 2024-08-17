"use client";

import React from "react";
import Image from "next/image";
import { useGetDominantColor } from "@/hooks";
import { PokemonIntro, PokemonAbilities, PokemonStats, PokemonTypes } from "@/components";
import { Pokemon } from "@/types";

interface ClientPokemonDetailsProps {
    pokemon: Pokemon;
}

const ClientPokemonDetails = ({ pokemon }: ClientPokemonDetailsProps) => {
    const image = pokemon.sprites?.other.dream_world.front_default;
    const { color, loading } = useGetDominantColor(image);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{ background: color || "transparent" }}
            className="flex flex-col items-center border rounded-lg m-6 p-4"
        >
            <div className="flex flex-cols m-4 content-strict">
                <Image src={image} alt={pokemon.name} height={250} width={250} />
            </div>
            <PokemonIntro name={pokemon.name} />
            <PokemonTypes types={pokemon.types} />
            <PokemonStats stats={pokemon.stats} />
            <PokemonAbilities abilities={pokemon.abilities} />
        </div>
    );
};

export default ClientPokemonDetails;
