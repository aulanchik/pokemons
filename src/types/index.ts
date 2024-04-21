interface Pokemon {
    id: string;
    name: string;
    image: string;
    stats: PokemonStat[];
    types: PokemonType[];
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
}

interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

interface PokemonType {
    slot: number;
    type: {
        name: string;
    };
}

interface PokemonAbility {
    ability: {
        id: number;
        name: string;
    };
}

interface PokemonSprites {
    front_default: string;
    other: {
        dream_world: {
            front_default: string;
        };
    };
}

export type { Pokemon, PokemonType, PokemonStat, PokemonAbility, PokemonSprites };
