import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: {
      black: "blackAlpha.800",
      hoverBlack: "blackAlpha.900",
      grey: "gray.200",
      hoverGrey: "gray.100",
      blue: "blue.600",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
