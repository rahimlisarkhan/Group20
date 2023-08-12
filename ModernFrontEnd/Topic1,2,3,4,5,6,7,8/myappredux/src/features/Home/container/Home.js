import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavMovie,
  selMovieState,
  allMovieAsync,
} from "../../../shared/store/slices/movieSlice";

function Home() {
  const movieState = useSelector(selMovieState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allMovieAsync());
  }, []);

  console.log("state", movieState);

  const handleSend = () => {
    const data = [1, 3, 4, 5];

    dispatch(setFavMovie(data));
  };

  return (
    <div>
      Home
      <button onClick={handleSend}>Send Data</button>
    </div>
  );
}

export default Home;
