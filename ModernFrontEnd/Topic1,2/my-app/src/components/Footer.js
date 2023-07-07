import React from "react";
import { getTime, timeConvert } from "../utils/timeConvert";
import { Navbar } from "./Navbar";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h1>
          Footer {getTime()} {timeConvert}
        </h1>

        <Navbar />
      </footer>
    );
  }
}

// export  default Header;
