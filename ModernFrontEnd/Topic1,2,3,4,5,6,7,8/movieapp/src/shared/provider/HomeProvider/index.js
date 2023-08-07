import { createContext, useState } from "react";

export const homeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [movieSort, setMovieSort] = useState([]);
  const [text, setText] = useState("Hello");
  const [movies, setMovies] = useState(null);

  const [count, setCount] = useState(0);

  const [show, setShow] = useState(false);

  const values = {
    movieSort,
    setMovieSort,
    text,
    setText,
    movies,
    setMovies,
    count,
    setCount,
    show,
    setShow,
  };

  return <homeContext.Provider value={values}>{children}</homeContext.Provider>;
};
