import { Stack } from "@mui/material";

import Chips from "@/components/chips";
import Card from "@/components/card";
import { getPokemonByName, getPokemons } from "@/api/pokemon-api";

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
