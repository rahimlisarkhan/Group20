import { createContext, useReducer } from "react";
import { ADD_FAVORITE, ADD_MOVIES, FILL_MOVIES } from "./types";

export const globalContext = createContext({
  count: null,
});

const initialState = {
  movies: [],
  favorite: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case FILL_MOVIES:
      return { ...state, movies: action.payload };

    case ADD_MOVIES:
      return { ...state, favorite: [action.payload, ...state.favorite] };

    case ADD_FAVORITE:
      const movieID = action.payload.imdbID;

      const isHasMovie = state.favorite.findIndex(
        (item) => item.imdbID === movieID
      );

      if (isHasMovie === -1) {
        return { ...state, favorite: [action.payload, ...state.favorite] };
      }

      let newFavList = state.favorite.filter(
        (movie) => movie.imdbID !== movieID
      );

      return { ...state, favorite: newFavList };
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};
