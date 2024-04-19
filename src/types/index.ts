interface Pokemon {
    id: string;
    name: string;
    image: string;
    types?: {
        slot: number;
        type: {
            name: string;
        };
    }[];
    stats?: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    abilities?: {
        ability: {
            name: string;
        };
    }[];
    sprites?: {
        front_default: string;
    };
}

interface PokemonShort {
    id: string;
    name: string;
    image: string;
}

export type { Pokemon, PokemonShort };
