import { PanelPage } from "pages/PanelPage";
import { ToastContainer } from "react-toastify";

import "styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { LifePage } from "pages/LifePage";
import { Component } from "react";
import Card from "pages/Card";
import { ErrorBoundary } from "shared/components/ErrorBoundary";
import { getMovie } from "service/movie";
import { JokesPage } from "pages/JokesPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isShow: false,
      price: 0,
    };
  }

  // componentDidMount() {
  //   // const getReqeust = async () => {
  //   //   const data = await getMovie();
  //   //   console.log(data);
  //   // };

  //   // getReqeust();

  //   (async () => {
  //     const res = await getMovie({ query: "game" });

  //     this.setState({ jokes: res.data.results });
  //     console.log(data);
  //   })();
  // }

  render() {
    return (
      <>
        <JokesPage />
        {/* <ErrorBoundary name="CardComponent">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ErrorBoundary> */}

        {/* {this.state.isShow && (
          <LifePage title="Test" price={this.state.price} />
        )} */}
        {/* <PanelPage />; */}
        {/* <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          Show component
        </button> */}
        <ToastContainer />
      </>
    );
  }
}

export default App;
