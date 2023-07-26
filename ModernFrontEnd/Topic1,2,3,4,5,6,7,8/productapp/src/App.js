import { PanelPage } from "pages/PanelPage";
import { ToastContainer } from "react-toastify";

import "styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { LifePage } from "pages/LifePage";
import { Component, Suspense, lazy } from "react";
import Card from "shared/components/Card";
import { ErrorBoundary } from "shared/components/ErrorBoundary";
import { getMovie } from "service/movie";
// import { JokesPage } from "pages/JokesPage";
import CategoryPage from "pages/CategoryPage";

import { Navigate, Route, Routes } from "react-router-dom";

// import Header from "shared/components/Header";
import JokesDetail from "pages/JokesDetail";
import ErrorPage from "pages/ErrorPage";
import { AboutPage } from "pages/AboutPage";
import { ROUTER } from "shared/constant/router";
import JokesDetailSetting from "pages/JokesDetailSetting";

const Header = lazy(() => import("shared/components/Header"));
const JokesPage = lazy(() => import("pages/JokesPage"));

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<h4>Loading....</h4>}>
          <Header />

          <Routes>
            <Route path="/" element={<Navigate to={ROUTER.HOME} replace />} />

            <Route path={ROUTER.HOME} element={<PanelPage />} />

            <Route path="/jokes" element={<JokesPage />} />
            <Route path="/jokes/:jokes_id" element={<JokesDetail />} />
            <Route
              path="/jokes/:jokes_id/setting"
              element={<JokesDetailSetting />}
            />

            {/* <Route
            path="/jokes/:jokes_id/setting/password"
            element={<JokesDetailSettingPassword />}
          /> */}

            <Route path="/category" element={<CategoryPage />} />
            <Route path={ROUTER.ABOUT + "/*"} element={<AboutPage />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
