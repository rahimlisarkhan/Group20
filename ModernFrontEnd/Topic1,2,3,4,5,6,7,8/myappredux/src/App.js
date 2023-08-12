import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./features/Home/container/Home";

function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} width={100} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
      </header>
      <Home />
    </div>
  );
}

export default App;
