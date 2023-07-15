import React, { Component } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { Alert } from "../ui/Alert";
import { Typography } from "../ui/Typography";
import { HomeIcon as Home } from "../assets/icons";
import HomeIcon from "../ui/Icons/HomeIcon";
import { AiFillEye, AiFillEyeInvisible, AiOutlineHome } from "react-icons/ai";

export class Products extends Component {
  static defaultProps = {
    listName: "Products",
    products: [],
    isLoading: false,
  };

  constructor() {
    super();

    this.state = {
      isShow: false,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    // const products = this.props.products?.map((product, index) => (
    //   <ProductCard
    //     key={"product" + index}
    //     // title={product.title}
    //     // img_url={product.img_url}
    //     // price={product.price}

    //     {...product}
    //   />
    // ));

    // console.log(products);

    const ShowIcon = this.state.isShow ? AiFillEyeInvisible : AiFillEye;

    console.log("isShow:", this.state.isShow);

    const { listName, products, isLoading } = this.props;

    if (isLoading) {
      return <div className="display-4">Loading...</div>;
    }

    return (
      <div className="my-5">
        <div className="h1">{listName}</div>
        {/* <button onClick={() => this.toggleShow()}> */}
        {/* <button onClick={this.toggleShow.bind(this)}> */}
        <button onClick={this.toggleShow}>
          {/* {this.state.isShow ? <AiFillEyeInvisible /> : <AiFillEye />} */}
          <ShowIcon />
          {/* {ShowIcon} */}
        </button>
        {/* <Typography title="My title text" /> */}
        <Typography variant="title5" weight="regular">
          My Title product
          <AiOutlineHome />
          <Home fontSize="90px" />
          <HomeIcon />
        </Typography>

        {/* {this.state.isShow ? <Alert title="My Alert Message" variant="danger" /> :""} */}

        {this.state.isShow && (
          <Alert title="My Alert Message" variant="danger" />
        )}

        {/* <div className={`row gap-5 ${isShow ? styles["customClassName"] : ""}`}> */}
        <div className={`row gap-5 ${this.state.isShow ? "bg-warning" : ""}`}>
          {products?.map((product, index) => (
            <ProductCard
              key={"product" + index}
              // title={product.title}
              // img_url={product.img_url}
              // price={product.price}

              {...product}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;

Products.propTypes = {
  listName: PropTypes.string,
  products: PropTypes.array,
  isLoading: PropTypes.bool,
};
