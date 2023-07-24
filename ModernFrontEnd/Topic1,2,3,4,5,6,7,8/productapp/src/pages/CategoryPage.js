import CategoryBottom from "feature/category/components/CategoryBottom";
import CategoryTop from "feature/category/components/CategoryTop";
import React, { Component } from "react";

export class CategoryPage extends Component {
  render() {
    return (
      <div>
        <CategoryTop />
        <CategoryBottom name="Category Bottom" />
      </div>
    );
  }
}

export default CategoryPage;
