import axios from "axios";

import { Stack } from "@mui/material";

import Chips from "@/components/chips";
import Card from "@/components/card";

async function getPokemonByName(name: string) {
  const response = await axios(`${process.env.POKEMON_API}/pokemon/${name}`, {
    method: "GET",
  });

  return response.data;
}

async function getPokemons() {
  const response = await axios(`${process.env.POKEMON_API}/pokemon?limit=10`, {
    method: "GET",
  });

  return response.data;
}

export default async function Home() {
  const { results: pokemons } = await getPokemons();
  const pokemon = await getPokemonByName(pokemons[0].name);

  return (
    <Stack
      sx={{ maxWidth: "1280px", padding: "0 150px", margin: "54px auto 0" }}
      columnGap={"12px"}
      rowGap={"24px"}
      direction="row"
    >
      <Chips pokemons={pokemons}></Chips>
      <Card pokemon={pokemon} />
    </Stack>
  );
}
