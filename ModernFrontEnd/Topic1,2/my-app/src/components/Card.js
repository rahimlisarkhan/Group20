import React from "react";

export class Card extends React.Component {
  helloKenan() {
    console.log("Hello Kenan");
  }

  render() {
    console.log(this.props);

    const { title, price, isNew, spanInfo, sayHelloBook } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h1>{price}</h1>
        <h1>New: {isNew}</h1>
        <div>{spanInfo}</div>

        {/* <button onClick={this.helloKenan}>Call fun</button> */}
        <button onClick={sayHelloBook}>Call fun</button>
      </div>
    );
  }
}
