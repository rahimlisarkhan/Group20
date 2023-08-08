import React, { Suspense, lazy } from "react";

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "shared/components/Layout/Layout";
import Header from "shared/components/Header";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("pages/Home"));
const Detailed = lazy(() => import("pages/Detailed"));
const Search = lazy(() => import("pages/Search"));
const FavoritePage = lazy(() => import("pages/Favorite"));
const MovieCreate = lazy(() => import("pages/MovieCreate"));

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Layout>
          <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
              <Route path="/" element={<Navigate to="/movies" replace />} />
              <Route path="/movies" element={<Home title={"Murad"} />} />
              <Route path="/favorite" element={<FavoritePage />} />
              <Route path="/create-movie" element={<MovieCreate />} />
              <Route path="/movies/:movie_id" element={<Detailed />} />

              <Route path="/search" element={<Search />} />
            </Routes>
          </Suspense>
        </Layout>
        <ToastContainer theme="dark" />
      </>
    );
  }
}

export default App;
