const apiUrl = process.env.NEXT_PUBLIC_POKEMON_API_URL;

const fetchResource = async (resourceUrl: string) => {
    const response = await fetch(`${apiUrl}${resourceUrl}`);
    const payload = await response.json();

    if (!response.ok) {
        throw new Error(payload.message || "Failed to fetch resource");
    }

    return payload;
};

const getPokemons = async (limit: number = 100, offset: number = 0) => {
    const response = await fetchResource(`/pokemon?limit=${limit}&offset=${offset}`);

    const pokemons = response.results;
    const total = response.count;
    return { pokemons, total };
};

const getPokemonByName = async (name: string) => {
    const response = await fetchResource(`/pokemon/${name}`);
    return response;
};

export { getPokemons, getPokemonByName };
