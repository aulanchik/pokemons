import { client } from './client';

export const getPokemons = async (limit: number = 1000, offset: number = 0) => {
    const response = await client.get('pokemon', {
        params: { limit, offset }
    })

    const { results: pokemons, count: total } = response.data;
    return { pokemons, total };
}

export const getPokemonByName = async (name: string) => {
    const response = await client.get(`pokemon/${name}`);
    return response.data;
}
