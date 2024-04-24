"use client";

import React, { useState } from "react";
import { PokemonCard, SearchInput } from "@/components";
import { Pokemon } from "@/types";

interface PokemonGridProps {
    pokemons: Pokemon[];
}

const removeDuplicates = (pokemons: Pokemon[]) =>
    pokemons.filter((pokemon, index) => pokemons.findIndex((otherPokemon) => otherPokemon.id === pokemon.id) === index);

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }): JSX.Element => {
    const [query, setQuery] = useState<string>("");

    const filteredPokemons = removeDuplicates(pokemons).filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className="w-full py-6 md:px-6">
            <div className="container mx-auto md:my-4 flex flex-col md:flex-row place-items-center justify-around md:items-center space-y-2">
                <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">PokeDeX Wiki</h1>
                <div className="relative w-full max-w-md md:ml-4">
                    <SearchInput placeholder="Search for pokemons..." onChange={handleSearch} value={query} />
                </div>
            </div>
            <div className="lg:col-span-4 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredPokemons.map((pokemon: Pokemon) => (
                        <PokemonCard key={pokemon.id} {...pokemon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonGrid;
