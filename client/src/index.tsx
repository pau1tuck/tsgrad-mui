//import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { AppProvider } from "./providers/AppProvider";
import App from "./components/_app";

ReactDOM.render(
  <AppProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </AppProvider>,
  document.getElementById("root")
);
