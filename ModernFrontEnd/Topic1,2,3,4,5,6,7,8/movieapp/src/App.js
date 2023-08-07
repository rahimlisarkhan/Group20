import React, { Suspense, lazy } from "react";
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
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route path="/" element={<Navigate to="/movies" replace />} />
            <Route path="/movies" element={<Home title={"Murad"} />} />
            <Route path="/movies/:movie_id" element={<Detailed />} />

            <Route path="/search" element={<Search />} />
          </Routes>
        </Suspense>
      </Layout>
    );
  }
}

export default App;
