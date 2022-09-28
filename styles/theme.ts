import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#2A2E34",
    primary: "#FBE134",
    textColor: "#FFFFFF",
    quaternary: "#8A8787",
    textColorLight: "rgba(186, 186, 186, 0.574)",
    textColorHover: "#e9e9e9",
  },
  fonts: {
    body: "Roboto Mono, sans-serif",
    heading: "Roboto Mono, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Roboto Mono",
        color: "white",
        backgroundColor: "secondary",
      },
      html: {
        scrollBehavior: "smooth",
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary",
        borderRadius: "2px",
      },
    }),
  },
});

export default theme;
