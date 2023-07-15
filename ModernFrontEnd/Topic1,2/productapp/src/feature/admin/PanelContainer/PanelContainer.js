import React, { Component } from "react";
import styles from "./PanelContainer.module.css";

export class PanelContainer extends Component {
  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}

export default PanelContainer;
