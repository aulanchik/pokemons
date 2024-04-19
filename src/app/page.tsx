"use client";

import { useState, useEffect } from "react";
import { getPokemons, getPokemonByName } from "@/api";
import { PokemonGrid } from "@/components";
import { PokemonShort } from "@/types";

export default function Home() {
    const [pokemonsWithImages, setPokemonsWithImages] = useState<PokemonShort[]>([]);

    useEffect(() => {
        const fetchPokemonsWithImages = async () => {
            const pokemons = await getPokemons();
            const pokemonsWithImages = await enhancePokemonsWithImages(pokemons);
            setPokemonsWithImages(pokemonsWithImages);
        };

        fetchPokemonsWithImages();
    }, []);

    const enhancePokemonsWithImages = async (pokemons: PokemonShort[]) => {
        const pokemonDetailsPromises = pokemons.map(async (pokemon: PokemonShort) => {
            const pokemonDetails = await getPokemonByName(pokemon.name);
            return {
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                image: pokemonDetails.sprites.front_default
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
