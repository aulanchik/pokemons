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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className="w-full py-6 px-4 md:px-6">
            <div className="container mx-auto md:my-4 flex flex-col md:flex-row place-items-center md:items-center justify-around">
                <h1 className="text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl">PokeDeX Wiki</h1>
                <div className="relative w-full max-w-md md:ml-4">
                    <SearchInput placeholder="Search for pokemons..." onChange={handleSearch} value={query} />
                </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {filteredPokemons.map((pokemon: Pokemon) => (
                        <PokemonCard key={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.types} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonGrid;
