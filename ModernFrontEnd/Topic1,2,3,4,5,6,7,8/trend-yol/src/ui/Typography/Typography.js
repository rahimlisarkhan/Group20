import React, { Component } from "react";

import styles from "./Typography.module.css";

export class Typography extends Component {
  static defaultProps = {
    component: "p",
    title: "Title",
    variant: "body1",
    weight: "regular",
  };

  render() {
    const Tag = this.props.component;

    // return <Tag>{this.props.children || this.props.title}</Tag>;
    return (
      <Tag
        className={`
          ${styles.font}
          ${styles[this.props.variant]}
          ${styles[this.props.weight]}
        `}
      >
        {this.props.children ?? this.props.title}
      </Tag>
    );
  }
}

export default Typography;
