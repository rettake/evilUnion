import { Box, Stack, Typography } from "@mui/material";
import { UiClickIcon } from "./UI/ui-click-icon";

export default function Header() {
  return (
    <header>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        sx={{ maxWidth: "1280px", padding: "0 150px", margin: "100px auto 0" }}
      >
        <Box border="1px solid rgb(255, 255, 255)" padding="7px">
          <Typography
            fontSize="12px"
            fontWeight="400"
            lineHeight="112%"
            textTransform="uppercase"
          >
            Покемоны API
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" gap="10px">
          <UiClickIcon />
          <Typography fontSize="12px" fontWeight="600" lineHeight="100%">
            Нажмите на <br />
            нужного Покемона
          </Typography>
        </Stack>
      </Stack>
    </header>
  );
}
