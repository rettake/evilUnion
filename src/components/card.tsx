import { Typography, Box, Stack } from "@mui/material";
import { PokeAPI } from "pokeapi-types";

import Image from "next/image";

export default async function Card({ pokemon }: { pokemon: PokeAPI.Pokemon }) {
  return (
    <Box
      padding="44px"
      sx={{ background: "rgb(0, 0, 0)" }}
      width="50%"
      maxHeight="500px"
    >
      <Typography
        fontSize="48px"
        fontWeight="700"
        lineHeight="100%"
        letterSpacing="0%"
        textTransform="capitalize"
        color="rgb(160, 160, 160)"
        mb="44px"
      >
        {pokemon.name}
      </Typography>
      <Box width="100%" height="200px" position="relative" mb="44px">
        <Image
          src={pokemon.sprites.front_default}
          layout="fill"
          objectFit="contain"
          alt={pokemon.name}
        />
      </Box>
      <Stack>
        <Typography
          fontSize="17px"
          fontWeight="400"
          lineHeight="150%"
          letterSpacing="0%"
          color="rgb(160, 160, 160)"
        >
          Снялся в {pokemon.moves.length} сериях
        </Typography>
        <Typography
          fontSize="17px"
          fontWeight="400"
          lineHeight="150%"
          letterSpacing="0%"
          color="rgb(160, 160, 160)"
        >
          Id: {pokemon.id}
        </Typography>
        <Typography
          fontSize="17px"
          fontWeight="400"
          lineHeight="150%"
          letterSpacing="0%"
          color="rgb(160, 160, 160)"
        >
          height: {pokemon.height}
        </Typography>
        <Typography
          fontSize="17px"
          fontWeight="400"
          lineHeight="150%"
          letterSpacing="0%"
          color="rgb(160, 160, 160)"
        >
          attack:{" "}
          {pokemon.stats.find((stat) => stat.stat.name === "attack")?.base_stat}
        </Typography>
      </Stack>
    </Box>
  );
}
