import React from "react";
import { PokemonAbility } from "@/types";
import * as LabelPrimitives from "@radix-ui/react-label";
import { removeHyphens, capitalize } from "@/utils";

interface PokemonAbilitiesProps {
  abilities: PokemonAbility[];
}

const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ abilities }) => (
  <div className="m-1 p-2 flex flex-wrap gap-4 items-start content-center">
    {abilities.map((ability) => (
      <div
        key={ability.ability.name}
        className="px-4 py-2 rounded-full bg-blue-500 flex items-center justify-center bg-opacity-80"
      >
        <LabelPrimitives.Root className="text-white font-semibold">
          {removeHyphens(capitalize(ability.ability.name))}
        </LabelPrimitives.Root>
      </div>
    ))}
  </div>
);

export default PokemonAbilities;
