"use client";

import React, { useState } from "react";
import { PokemonCard, SearchInput } from "@/components";
import { Pokemon } from "@/types";

interface PokemonGridProps {
    pokemons: Pokemon[];
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }): JSX.Element => {
    const [query, setQuery] = useState<string>("");

    const filteredPokemons = pokemons.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4">
            <div className="lg:col-span-4 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-black dark:text-white mt-8">Pokemon Collection</h2>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
                <SearchInput
                    type="text"
                    placeholder="Search for pokemons..."
                    className="w-full lg:w-3/4 px-4 py-2 border rounded-md focus:outline-none"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {filteredPokemons.map((pokemon, index) => (
                        <PokemonCard key={index} name={pokemon.name} image={pokemon.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonGrid;
