import React from "react";
import { PokemonType } from "@/types";
import * as LabelPrimitives from "@radix-ui/react-label";
import { capitalize, removeHyphens } from "@/utils";

interface PokemonTypesProps {
  types: PokemonType[];
}

const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => (
  <div className="m-1 p-2 flex flex-wrap gap-4 items-start content-center">
    {types.map((type) => (
      <div
        key={type.slot}
        className="px-4 py-2 rounded-full bg-orange-500 flex items-center justify-center"
      >
        <LabelPrimitives.Root className="text-white font-semibold">
          {removeHyphens(capitalize(type.type.name))}
        </LabelPrimitives.Root>
      </div>
    ))}
  </div>
);

export default PokemonTypes;
