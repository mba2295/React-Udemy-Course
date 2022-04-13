import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import AuthenticationContextProvider from "./contexts/authenticationContext";

ReactDOM.render(
  <AuthenticationContextProvider>
    <App />
  </AuthenticationContextProvider>,
  document.getElementById("root")
);
