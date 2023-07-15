import { PanelContainer } from "feature/admin/PanelContainer";
import { PanelContent } from "feature/admin/PanelContent";
import { PanelForm } from "feature/admin/PanelForm";
import React, { Component } from "react";
import { toast } from "react-toastify";

export class PanelPage extends Component {
  constructor() {
    super();
    this.state = {
      isShowMenu: false,
      products: [],
    };

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(product) {
    console.log(product);

    this.setState({ products: [product, ...this.state.products] });

    toast.success("Successfully created");
  }

  render() {
    return (
      <PanelContainer>
        <PanelForm
          title="Form title"
          show={this.state.isShowMenu}
          onData={this.handleAddProduct}
          onClose={() => this.setState({ isShowMenu: false })}
        />
        <PanelContent
          products={this.state.products}
          onOpen={() => this.setState({ isShowMenu: true })}
        />
      </PanelContainer>
    );
  }
}
