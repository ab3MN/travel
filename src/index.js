import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={App} />{" "}
    </BrowserRouter>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
