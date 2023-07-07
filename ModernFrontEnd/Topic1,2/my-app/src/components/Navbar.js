import React from "react";

export class Navbar extends React.Component {
  static defaultProps = {
    online: 0,
  };

  render() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Online:{this.props.online}</li>
        </ul>
      </nav>
    );
  }
}

// export  default Header;
