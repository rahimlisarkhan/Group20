import React from "react";
import { getTime, timeConvert } from "../utils/timeConvert";
import { Navbar } from "./Navbar";

export class Header extends React.Component {
  // constructor() {
  //   super();
  // }

  static defaultProps = {
    title: "Logo",
    onlineUsers: 0,
  };

  render() {
    console.log("Header:", this.props);

    return (
      <header>
        {this.props.children}

        <h1>
          {this.props.title} {getTime()} {timeConvert}
        </h1>

        <Navbar online={this.props.onlineUsers} />
      </header>
    );
  }
}

// export  default Header;
