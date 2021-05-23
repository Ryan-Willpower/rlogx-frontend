import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  textStyles: {
    header: {
      fontSize: "32px",
      fontWeight: "bold",
    },
    title: {
      fontSize: "20px",
    },
    text: {
      fontSize: "16px",
    },
  },
  radii: {
    default: "5px",
  },
});
