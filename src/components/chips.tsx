import { Box, Grid, Chip } from "@mui/material";

import { IPokemon } from "@/api/pokemon-api";
import Link from "next/link";

interface IChipsProps {
  pokemons: IPokemon[];
}

export default function Chips({ pokemons }: IChipsProps) {
  return (
    <Box maxWidth="50%">
      <Grid rowGap="10px" columnGap="6px" maxWidth="100%" container>
        {pokemons.map((pokemon) => (
          <Grid item key={pokemon.name}>
            <Link href={`/pokemons/${pokemon.name}`}>
              <Chip
                sx={{
                  height: "auto",
                  padding: "20px",
                  borderRadius: "44px",
                  boxSizing: "content-box",
                  fontSize: "20px",
                  lineHeight: "100%",
                  "& .MuiChip-label": {
                    display: "block",
                    padding: "0",
                  },
                }}
                label={pokemon.name}
                color="primary"
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
