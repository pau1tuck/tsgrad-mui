import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { AppProvider } from "./providers/AppProvider";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import App from "./components/App";

ReactDOM.render(
  <AppProvider>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </AppProvider>,
  document.getElementById("root")
);
