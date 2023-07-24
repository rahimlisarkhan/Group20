import React, { Component } from "react";
import styles from "./PanelContent.module.css";
import ProductCard from "../ProductCard/ProductCard";

export class PanelContent extends Component {
  render() {
    const { onOpen, products } = this.props;

    return (
      <div className={styles.content}>
        <div>
          <h1>Products</h1>
          <button onClick={onOpen}>Open</button>
        </div>
        PanelContent
        <div className={styles.list}>
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    );
  }
}

export default PanelContent;
