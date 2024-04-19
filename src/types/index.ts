interface Pokemon {
    id: string;
    name: string;
    image: string;
    types: {
        slot: number;
        type: {
            name: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;
        };
    }[];
    sprites: {
        front_default: string;
    };
}

export type { Pokemon };
