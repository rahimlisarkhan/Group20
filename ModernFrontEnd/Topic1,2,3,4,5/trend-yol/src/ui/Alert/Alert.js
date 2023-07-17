import React, { Component } from "react";
import PropsType from "prop-types";

export class Alert extends Component {
  static defaultProps = {
    title: "Alert title",
    variant: "success",
  };

  render() {
    const { title, variant } = this.props;

    return (
      <div className={`alert alert-${variant}`} role="alert">
        {title}
      </div>
    );
  }
}

export default Alert;

Alert.propsType = {
  title: PropsType.string,
  variant:
    "warning" ||
    "danger" ||
    "dark" ||
    "success" ||
    "secondary" ||
    "primary" ||
    "info" ||
    "light",
};
