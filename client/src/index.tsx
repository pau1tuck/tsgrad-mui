import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { AppProvider } from "./providers/AppProvider";
import App from "./components/App";

ReactDOM.render(
  <HashRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </HashRouter>,
  document.getElementById("root")
);
