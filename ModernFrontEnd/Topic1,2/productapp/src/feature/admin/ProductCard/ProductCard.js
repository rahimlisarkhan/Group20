import React, { Component } from "react";

import styles from "./ProductCard.module.css";

export class ProductCard extends Component {
  render() {
    const { name, price, image_url } = this.props;

    return (
      <div className={styles.card}>
        <img src={image_url} alt={name} />

        <div>
          <h4>{name}</h4>
          <h6>{price}</h6>
        </div>
      </div>
    );
  }
}

export default ProductCard;
