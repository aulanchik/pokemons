"use client";

import { useState, useEffect } from "react";
import { getPokemons, getPokemonByName } from "@/api";
import { PokemonGrid } from "@/components";
import { Pokemon } from "@/types";

export default function Home() {
    const [pokemonsWithImages, setPokemonsWithImages] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemonsWithImages = async () => {
            const pokemons = await getPokemons(300);
            const pokemonsWithImages = await enhancePokemonsWithImages(pokemons);
            setPokemonsWithImages(pokemonsWithImages);
        };

        fetchPokemonsWithImages();
    }, []);

    const enhancePokemonsWithImages = async (pokemons: Pokemon[]) => {
        const pokemonDetailsPromises = pokemons.map(async (pokemon: Pokemon) => {
            const pokemonDetails = await getPokemonByName(pokemon.name);
            return {
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                image: pokemonDetails.sprites?.other.dream_world.front_default,
                types: pokemonDetails.types,
                stats: pokemonDetails.stats,
                abilities: pokemonDetails.abilities,
                sprites: pokemonDetails.sprites?.other.dream_world.front_default
            };
        });

        const pokemonsWithImages = await Promise.all(pokemonDetailsPromises);

        return pokemonsWithImages;
    };

    return (
        <main className="flex flex-col items-center">
            <PokemonGrid pokemons={pokemonsWithImages} />
        </main>
    );
}
