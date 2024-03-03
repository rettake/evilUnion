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
