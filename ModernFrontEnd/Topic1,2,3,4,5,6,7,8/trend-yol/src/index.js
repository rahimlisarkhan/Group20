import React from "react";
import ReactDOM from "react-dom/client";
import { App as MyApp } from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

const intro = (
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

root.render(intro);
