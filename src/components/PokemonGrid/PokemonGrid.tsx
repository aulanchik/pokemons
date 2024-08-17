"use client";

import React, { useCallback, useState } from "react";
import { PokemonList, SearchBar } from "@/components";
import { removeDuplicates, debounce } from "@/utils";
import { Pokemon } from "@/types";

interface PokemonGridProps {
    pokemons: Pokemon[];
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }): JSX.Element => {
    const [query, setQuery] = useState<string>("");

    const uniquePokemons = removeDuplicates(pokemons, (pokemon: Pokemon) => pokemon.id);

    const filteredPokemons = uniquePokemons.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSearch = useCallback(
        debounce((searchQuery: string) => setQuery(searchQuery), 500),
        []
    );

    return (
        <div className="h-full md:px-6 py-6">
            <SearchBar query={query} onQuery={handleSearch} />
            <PokemonList pokemons={filteredPokemons} />
        </div>
    );
};

export default PokemonGrid;
