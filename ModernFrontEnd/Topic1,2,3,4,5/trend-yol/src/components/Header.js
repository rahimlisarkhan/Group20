import React, { Component } from "react";
import { Navigation } from "./Navigation";
import { HeaderInfo } from "./HeaderInfo";

export class Header extends Component {
  render() {
    return (
      <header>
        <Navigation />
        <HeaderInfo />
      </header>
    );
  }
}
