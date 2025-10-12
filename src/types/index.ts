export interface Pokemon {
    id: string;
    name: string;
    image: string;
    stats: PokemonStat[];
    types: PokemonType[];
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
}

export interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface PokemonType {
    slot: number;
    type: {
        name: string;
    };
}

export interface PokemonAbility {
    ability: {
        id: number;
        name: string;
    };
}

export interface PokemonSprites {
    front_default: string;
    other: {
        dream_world: {
            front_default: string;
        };
    };
}

export interface ColorData {
    loading: boolean;
}

export interface DominantColorData extends ColorData {
    color: string | null;
}

export interface PaletteColorData extends ColorData {
    palette: Array<string> | null;
}

