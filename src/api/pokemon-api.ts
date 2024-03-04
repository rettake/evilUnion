import axios from "axios";

export interface IPokemons {
  count: number;
  next: string;
  previous: null | string;
  results: IPokemon[];
}

export interface IPokemon {
  name: string;
  url: string;
}

export const pokemonApi = axios.create({
  baseURL: process.env.POKEMON_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getPokemonByName(name: string) {
  const response = await axios(`${process.env.POKEMON_API}/pokemon/${name}`, {
    method: "GET",
  });

  return response.data;
}

export async function getPokemons() {
  const response = await axios(`${process.env.POKEMON_API}/pokemon?limit=10`, {
    method: "GET",
  });

  return response.data;
}
