// import MovieCard from "feature/home/components/MovieCard";
import React, { Component, useEffect, useLayoutEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { getMovies } from "services/movie";
import {
  ADD_FAVORITE,
  FILL_MOVIES,
} from "shared/provider/GlobalProvider/types";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";
import MovieCard from "./home/components/MovieCard";

export const Home = () => {
  const { state, dispatch } = useGlobalState();

  // as Components Did mount
  useEffect(() => {
    const refetch = async () => {
      const res = await getMovies();
      console.log(res);

      dispatch({ type: FILL_MOVIES, payload: res.data.Search });

      // setMovies(res.data.Search);
    };

    refetch();
  }, []);

  return (
    <div className="d-flex gap-4 flex-wrap py-5">
      {state.movies?.map((movie, index) => (
        <MovieCard
          key={"movie" + index}
          {...movie}
          onFav={() => dispatch({ type: ADD_FAVORITE, payload: movie })}
        />
      ))}
    </div>
  );
};
