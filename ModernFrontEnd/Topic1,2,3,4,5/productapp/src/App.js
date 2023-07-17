import { PanelPage } from "pages/PanelPage";
import { ToastContainer } from "react-toastify";

import "styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { LifePage } from "pages/LifePage";
import { Component } from "react";
import Card from "pages/Card";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isShow: false,
      price: 0,
    };
  }

  render() {
    return (
      <>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* {this.state.isShow && (
          <LifePage title="Test" price={this.state.price} />
        )} */}
        {/* <PanelPage />; */}
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          Show component
        </button>
        <ToastContainer />
      </>
    );
  }
}

export default App;
