import React, { Component } from "react";
import { withCategory } from "shared/hoc/withCategory";

class CategoryBottom extends Component {
  constructor() {
    super();

    // this.onCategoryHandle = this.onCategoryHandle.bind(this);
    // this.onSearchHandle = this.onSearchHandle.bind(this);
  }

  // onCategoryHandle() {
  //   console.log("onCategoryHandle");
  // }
  // onSearchHandle() {
  //   console.log("onSearchHandle");
  // }

  componentDidMount() {
    console.log("Response category bottom");
  }

  onKenanHandle() {}

  render() {
    console.log("CategoryBottom", this.props);
    return (
      <div>
        CategoryBottom
        <button onClick={this.props.onCategoryHandle}>Click me</button>
        <div>
          <span>{this.props.name}</span>
        </div>
      </div>
    );
  }
}

export default withCategory(CategoryBottom);
