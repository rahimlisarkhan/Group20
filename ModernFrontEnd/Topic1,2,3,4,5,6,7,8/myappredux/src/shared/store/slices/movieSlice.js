import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies, getSearchMovie } from "../../../services/movie";

export const allMovieAsync = createAsyncThunk("movie/fetchMovie", async () => {
  try {
    const response = await getMovies();
    // The value we return becomes the `fulfilled` action payload
    return response.data.Search;
  } catch (err) {
    console.log(err.message);
  }
});

export const searchMovieAsync = createAsyncThunk(
  "movie/searchFetch",
  async (title) => {
    try {
      const res = await getSearchMovie(title);
      return res.data.Search;
    } catch (err) {
      console.log("err", err.message);
    }
  }
);

const initialState = {
  movies: [],
  favorite: [],
  movieCount: 0,
  isLoading: false,
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
    builder
      .addCase(allMovieAsync.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.movieCount = action.payload.length;
      })
      .addCase(searchMovieAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(searchMovieAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      });
  },
});

export const { setFavMovie } = movieSlice.actions;

export const selMovieState = (state) => state.movieState;

export default movieSlice.reducer;
