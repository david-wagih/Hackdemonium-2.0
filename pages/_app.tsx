import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* Add Header */}
      <Component {...pageProps} />
      {/* Add footer */}
    </ChakraProvider>
  );
}

export default MyApp;
