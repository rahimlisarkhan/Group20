import MovieCard from "feature/home/components/MovieCard";
import React, { Component, useEffect, useLayoutEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMovies } from "services/movie";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";
import { HomeProvider } from "shared/provider/HomeProvider";
import { useHomeState } from "shared/provider/HomeProvider/useHomeState";

const images = ["", "", ""];

const Home = (props) => {
  // const handleProcess = () => {
  //   if (inputValue.length) {
  //     alert("Process et");
  //     return;
  //   }

  //   navigate("/")
  // };

  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
};

export default Home;
