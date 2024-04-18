import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button } from "./ButtonStyle";
import { InputStyle as Input } from "./InputStyle";
// Supports weights 100-900
// Supports weights 100-900
// Supports weights 200-800
import "@fontsource-variable/karla";
export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Karla Variable",
      },
    },
  },
  colors: {
    primary: "#F05B2D",
    secondary: "#253470",
  },
  components: {
    Button,
    Input,
  },
});
