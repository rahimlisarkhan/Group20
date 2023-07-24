import React, { Component, memo } from "react";

class Card extends Component {
  colors = [
    "red",
    "yellow",
    "blue",
    "brown",
    "green",
    "orange",
    "purple",
    "lime",
  ];

  constructor() {
    super();
    this.state = {
      currentColor: null,
    };

    this.randomMethod = this.randomMethod.bind(this);
  }

  componentDidMount() {
    this.randomMethod();
  }

  randomMethod() {
    let randomnumber = Math.floor(Math.random() * this.colors.length);
    console.log("randomnumber:", randomnumber);

    this.setState({ currentColor: this.colors[randomnumber] });
  }

  render() {
    console.log(this.state);

    return (
      <div
        style={{ width: 100, height: 100, background: this.state.currentColor }}
        onClick={this.randomMethod}
      >
        Card
      </div>
    );
  }
}

export default memo(Card);
