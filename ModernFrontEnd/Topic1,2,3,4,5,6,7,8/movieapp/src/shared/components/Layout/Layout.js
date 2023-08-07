import React, { Component } from "react";

export class Layout extends Component {
  age = 34;

  handleForm() {}

  render() {
    return (
      <div className="bg-dark full-viewport">
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
