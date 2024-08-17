import React from "react";
import { capitalize } from "@/utils";

interface PokemonDetailsProps {
    name: string;
}

const PokemonIntro: React.FC<PokemonDetailsProps> = ({ name }) => (
    <div className="flex flex-col items-center">
        <p className="text-white text-3xl font-bold">{capitalize(name)}</p>
    </div>
);

export default PokemonIntro;
