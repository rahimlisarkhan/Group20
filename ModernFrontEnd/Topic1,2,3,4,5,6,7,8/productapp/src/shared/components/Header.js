import React, { Component } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTER } from "shared/constant/router";

export const Header = () => {
  const { pathname } = useLocation();

  // const navigate = useNavigate()

  const activeLink = (path) => path === pathname;

  return (
    <div>
      <nav>
        <ul>
          <li style={{ color: activeLink("/home") ? "red" : "black" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ color: activeLink("/category") ? "red" : "black" }}>
            <Link to="/category">Category</Link>
          </li>
          <li style={{ color: activeLink("/jokes") ? "red" : "black" }}>
            <Link to="/jokes">Jokes</Link>
          </li>
          <li
            style={{
              color: activeLink(ROUTER.ABOUT + "/hr") ? "red" : "black",
            }}
          >
            <Link to={ROUTER.ABOUT}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
