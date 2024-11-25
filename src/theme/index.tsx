import { extendTheme } from "@chakra-ui/react";
import { ColorStyle as colors } from "./ColorStyle";
// Supports weights 200-800
import "@fontsource-variable/manrope";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Manrope Variable, sans-serif",
      },
    },
  },
  colors,
});
