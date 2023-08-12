import CategoryBottom from "feature/category/components/CategoryBottom";
import CategoryTop from "feature/category/components/CategoryTop";
import React, { Component, useContext } from "react";
import { globalContext } from "shared/provider/GlobalProvider";

export const CategoryPage = (props) => {
  let { count, hello } = useContext(globalContext);

  return (
    <div>
      <h1>Count:{count}</h1>
      <h2>{hello}</h2>
      <CategoryTop />
      <CategoryBottom name="Category Bottom" />
    </div>
  );
};

export default CategoryPage;
