import React, { lazy } from "react";
import "./styles/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "shared/components/Layout/Layout";
import Header from "shared/Header";

const Home = lazy(() => import("pages/Home"));
const Detailed = lazy(() => import("pages/Detailed"));
const Search = lazy(() => import("pages/Search"));

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/movies/:movie_id" element={<Detailed />} />

          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
