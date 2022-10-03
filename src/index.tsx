import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
