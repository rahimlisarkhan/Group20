import { useHomeState } from "shared/provider/HomeProvider/useHomeState";
import MovieCard from "feature/home/components/MovieCard";
import React, { Component, useEffect, useLayoutEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMovies } from "services/movie";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";
import { useHomeState } from "shared/provider/HomeProvider/useHomeState";

export const Home = () => {
  const { setUser } = useGlobalState();

  const { setMovies, movies, setShow, show, text, count, setText } =
    useHomeState();

  const handleText = () => {
    const newText = "Thanks man";

    setText((prevText) => newText + " " + prevText);
  };

  // as Components Did mount
  useEffect(() => {
    console.log("Component yaradildi...");

    const refetch = async () => {
      const res = await getMovies();
      console.log(res);

      setMovies(res.data.Search);
      setUser({
        fullname: "Kenan S.",
        vip: false,
      });
    };

    refetch();

    return () => {
      // as Components Did Unmount
      console.log("Componentden cixildi...");

      // setInputValue({});
    };
  }, []);

  //ShouldcomponentUpdate, ComponentDidUpdate
  useEffect(() => {
    console.log("Update oldu!");

    if (show) {
      setText("Hello");
    }
  }, [show]);

  // as Components willmount
  useLayoutEffect(() => {
    console.log("Component yaradilir...");
    setShow("");

    document.title = "Mehin";
  }, []);
  return (
    <Row as="main">
      {show && <h1 className="text-light">{text}</h1>}
      {/* <button onClick={() => setText("Thanks man!")}>Say thank!</button> */}
      <button onClick={handleText}>Say thank!</button>
      <Link className="btn btn-warning" to="/search">
        Search page
      </Link>
      <img src={images[count]} />
      {/* <button onClick={()=>setShow(!show)}>Say thank!</button> */}
      <button onClick={() => setShow((prevShow) => !prevShow)}>show</button>

      {movies?.map((movie, index) => (
        <Col key={"movie" + index} lg="3" md="3" sm="6">
          <MovieCard {...movie} />
        </Col>
      ))}
    </Row>
  );
};
