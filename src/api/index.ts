const POKEMON_ENDPOINT = "https://pokeapi.co/api/v2";

const fetchResource = async (resourceUrl: string) => {
    const response = await fetch(resourceUrl);
    const payload = await response.json();

    if (!response.ok) {
        throw new Error(payload.message || "Failed to fetch resource");
    }

    return payload;
};

const getPokemons = async (limit: number = 100, offset: number = 0) => {
    const response = await fetchResource(`${POKEMON_ENDPOINT}/pokemon?limit=${limit}&offset=${offset}`);

    const pokemons = response.results;
    const total = response.count;
    return { pokemons, total };
};

const getPokemonByName = async (name: string) => {
    const response = await fetchResource(`${POKEMON_ENDPOINT}/pokemon/${name}`);
    return response;
};

export { getPokemons, getPokemonByName };
