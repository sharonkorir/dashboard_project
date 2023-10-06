import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: {
      black: "rgb(72 72 72)",
      hoverBlack: "blackAlpha.900",
      grey: "rgb(238 238 238)",
      hoverGrey: "gray.100",
      blue: "rgb(77 126 220)",
      green: "rgb(72 72 72)",
      lightGrey: "rgb(238 238 238)",
    },
    text: {
      grey: "rgb(86 91 94)",
    },
    button: {
      50: "#29cc97",

      500: "#29cc97",

      900: "#29cc97",
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
