import { Stack } from "@mui/material";
import Chips from "@/components/chips";
import axios from "axios";
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

export default async function Pokemons({
  params,
}: {
  params: { slug: string };
}) {
  const pokemon = await getPokemonByName(params.slug);
  const { results: pokemons } = await getPokemons();

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
