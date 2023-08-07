import { createContext, useState } from "react";

export const globalContext = createContext({
  count: null,
});

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});

  const value = {
    user,
    setUser,
    product,
    setProduct,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};
