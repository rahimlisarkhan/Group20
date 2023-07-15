import { PanelPage } from "pages/PanelPage";
import { ToastContainer } from "react-toastify";

import "styles/global.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <PanelPage />;
      <ToastContainer />
    </>
  );
}

export default App;
