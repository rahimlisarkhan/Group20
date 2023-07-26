import React, { Component } from "react";

export class Container extends Component {
  render() {
    return <main className="container">{this.props.children}</main>;
  }
}

export default Container;
