import React, { Component } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

export class Button extends Component {
  static defaultProps = {
    color: "primary",
  };

  render() {
    // return <div className={style["button-sign"]}>Button</div>;
    return (
      <div className={`${style.buttonSign} btn btn-${this.props.color}`}>
        Button
      </div>
    );
  }
}

export default Button;

Button.propsType = {
  //   color: PropTypes.string,
  color: "warning" || "primary" || "danger" || "success",
};
