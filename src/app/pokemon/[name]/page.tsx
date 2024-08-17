import React from "react";
import { getPokemonByName } from "@/api";
import { Header, ClientPokemonDetails } from "@/components";

const Page = async ({ params }: { params: { name: string } }) => {
    const pokemon = await getPokemonByName(params.name);

    if (!pokemon) return <div>Pokemon not found</div>;

    return (
        <div className="flex flex-col items-center content-start h-screen">
            <div className="flex flex-col items-center spaces-y-8 p-8">
                <Header />
                <ClientPokemonDetails pokemon={pokemon} />
            </div>
        </div>
    );
};

export default Page;
