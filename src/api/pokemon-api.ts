import axios from "axios";

export const pokemonApi = axios.create({
  baseURL: process.env.POKEMON_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
