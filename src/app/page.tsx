"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { getPokemons, getPokemonByName } from "@/api";
import { PokemonGrid } from "@/components";
import { Pokemon } from "@/types";

export default function Home() {
    const [pokemonsWithImages, setPokemonsWithImages] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const ITEMS_PER_PAGE = 25;

    const observer = useRef<IntersectionObserver | null>(null);
    const observeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchPokemonsWithImages = async () => {
            setLoading(true);
            const offset = (currentPage - 1) * ITEMS_PER_PAGE;
            const { pokemons, total } = await getPokemons(ITEMS_PER_PAGE, offset);
            if (pokemons.length === 0 || offset >= total) {
                setHasMore(false);
                setLoading(false);
                return;
            }
            const pokemonsWithImages = await enhancePokemonsWithImages(pokemons);
            setPokemonsWithImages((prevPokemons) => [...prevPokemons, ...pokemonsWithImages]);
            setLoading(false);
        };

        fetchPokemonsWithImages();
    }, [currentPage]);

    useEffect(() => {
        if (!hasMore || !observeRef.current) return;

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };

        observer.current = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setCurrentPage((prevPage) => prevPage + 1);
            }
        }, options);

        observer.current.observe(observeRef.current);

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [hasMore]);

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
            <Suspense fallback={<div>Loading...</div>}>
                <PokemonGrid pokemons={pokemonsWithImages} />
            </Suspense>
            {hasMore && <div ref={observeRef} style={{ height: "10px" }}></div>}
        </main>
    );
}
