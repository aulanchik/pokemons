"use client";

import { useState, useEffect } from "react";
import { getPokemons, getPokemonByName } from "@/api";
import { PokemonGrid } from "@/components";
import { Pokemon } from "@/types";

export default function Home() {
    const [pokemonsWithImages, setPokemonsWithImages] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemonsWithImages = async () => {
            const pokemons = await getPokemons();
            const pokemonsWithImages = await enhancePokemonsWithImages(pokemons);
            setPokemonsWithImages(pokemonsWithImages);
        };

        fetchPokemonsWithImages();
    }, []);

    const enhancePokemonsWithImages = async (pokemons: Pokemon[]) => {
        const pokemonDetailsPromises = pokemons.map((pokemon: Pokemon) => getPokemonByName(pokemon.name));

        const pokemonDetails = await Promise.all(pokemonDetailsPromises);

        const pokemonsWithImages = pokemonDetails.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default
        }));

        return pokemonsWithImages;
    };

    return (
        <main className="flex flex-col items-center">
            <PokemonGrid pokemons={pokemonsWithImages} />
        </main>
    );
}
