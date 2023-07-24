import React, { Component } from "react";
import { withCategory } from "shared/hoc/withCategory";

export class CategoryTop extends Component {
  constructor() {
    super();

    // this.onCategoryHandle = this.onCategoryHandle.bind(this);
    // this.onSearchHandle = this.onSearchHandle.bind(this);
  }

  //   onCategoryHandle() {
  //     console.log("onCategoryHandle");
  //   }
  //   onSearchHandle() {
  //     console.log("onSearchHandle");
  //   }

  onTestHandle() {}

  render() {
    console.log("CategoryTop", this.props);
    return (
      <div>
        CategoryTop
        <div>
          <h1>test1</h1>
          <button onClick={this.props.onCategoryHandle}>Click cateogry</button>
        </div>
      </div>
    );
  }
}

export default withCategory(CategoryTop);
