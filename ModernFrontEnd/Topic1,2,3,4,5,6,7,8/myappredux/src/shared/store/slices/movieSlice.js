import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../../services/movie";

export const allMovieAsync = createAsyncThunk("movie/fetchMovie", async () => {
  const response = await getMovies();
  // The value we return becomes the `fulfilled` action payload
  return response.data.Search;
});

const initialState = {
  movies: [],
  favorite: [],
  movieCount: 0,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setFavMovie: (state, action) => {
      state.favorite = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(allMovieAsync.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.movieCount = action.payload.length;
    });
  },
});

export const { setFavMovie } = movieSlice.actions;

export const selMovieState = (state) => state.movieState;

export default movieSlice.reducer;
