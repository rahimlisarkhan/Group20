import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import movieState from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movieState,
  },
});
