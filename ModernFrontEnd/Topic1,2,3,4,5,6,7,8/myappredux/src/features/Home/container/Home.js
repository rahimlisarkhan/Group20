import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavMovie,
  selMovieState,
  allMovieAsync,
  searchMovieAsync,
} from "../../../shared/store/slices/movieSlice";

function Home() {
  const movieState = useSelector(selMovieState);
  const dispatch = useDispatch();

  const inRef = useRef();

  useEffect(() => {
    if (!movieState.movie?.length) {
      dispatch(allMovieAsync());
    }
  }, []);

  console.log("state", movieState);

  const handleSend = () => {
    const data = [1, 3, 4, 5];

    dispatch(setFavMovie(data));
  };

  const handleSearch = () => {
    const value = inRef.current.value;

    dispatch(searchMovieAsync(value));
  };

  if (movieState.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <h1 className="text-lg">Home</h1>
      <div>
        <input ref={inRef} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button onClick={handleSend}>Send Data</button>
    </div>
  );
}

export default Home;
