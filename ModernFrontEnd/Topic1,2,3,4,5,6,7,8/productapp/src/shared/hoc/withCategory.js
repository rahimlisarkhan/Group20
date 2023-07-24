import { Component } from "react";

export function withCategory(WrappedComponent) {
  console.log("WrappedComponent", WrappedComponent);

  return class extends Component {
    constructor() {
      super();

      this.state = {
        category: [],
      };

      this.onCategoryHandle = this.onCategoryHandle.bind(this);
      this.onSearchHandle = this.onSearchHandle.bind(this);
    }

    componentDidMount() {
      console.log("request...");

      this.setState({ category: ["1", "2", "3"] });
    }

    onCategoryHandle() {
      console.log("onCategoryHandle");
    }
    onSearchHandle() {
      console.log("onSearchHandle");
    }

    render() {
      console.log(this.props);

      return (
        <WrappedComponent
          category={this.state.category}
          onCategoryHandle={this.onCategoryHandle}
          onSearchHandle={this.onSearchHandle}
          {...this.props}
        />
      );
    }
  };
}
