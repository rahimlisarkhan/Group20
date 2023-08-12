import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "shared/store";
// import { GlobalProvider } from "shared/provider/GlobalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <GlobalProvider> */}
        <App />
        {/* </GlobalProvider> */}
      </Router>
    </Provider>
  </React.StrictMode>
);
