import React, { createContext, useState } from "react";

export let globalContext = createContext();

function GlobalProvider({ children }) {
  let [count, setCount] = useState(0);
  let [hello, setHello] = useState("!");
  const [products, setProducts] = useState([]);

  const handleHello = (text) => {
    setHello(text);
  };

  const value = {
    count,
    setCount,
    handleHello,
    hello,
    products,
    setProducts,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}

export default GlobalProvider;
