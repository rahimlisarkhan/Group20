import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "shared/constant/router";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/jokes">Users</Link>
            </li>
            <li>
              <Link to={ROUTER.ABOUT}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
