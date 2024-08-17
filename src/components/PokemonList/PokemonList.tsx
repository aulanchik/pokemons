import React from "react";
import { Pokemon } from "@/types";
import { PokemonCard } from "@/components";

interface PokemonListProps {
    pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => (
    <div className="lg:col-span-4 flex flex-col items-center py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} {...pokemon} />
            ))}
        </div>
    </div>
);

export default PokemonList;
