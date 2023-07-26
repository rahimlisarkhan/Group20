import React, { Component } from "react";
import PropTypes from "prop-types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import demoDress from "../assets/images/cover 2.jpeg";
// import demoDress from "../assets/images/cover 2.jpeg";
// import demoDress from "../assets/images/cover 2.jpeg";

// const imageUrl =
//   "https://www.hausekids.com/i/l/003/0031011_2-5-yas-miranda-kiz-cocuk-elbise-fusya.jpeg";

const inlineCss = {
  width: "18rem",
};

export class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.azalt = this.azalt.bind(this);
    this.artir = this.artir.bind(this);
  }

  azalt() {
    const newCount = this.state.count <= 0 ? 0 : this.state.count - 1;
    this.setState({ count: newCount });
  }

  artir() {
    this.setState({ count: this.state.count + 1 });
  }

  renderTag(url) {
    let tag = url ? (
      <img src={url} className="card-img-top" alt={this.props.title} />
    ) : (
      <span>No Image!</span>
    );

    return tag;
  }

  render() {
    const { img_url, title, price } = this.props;

    // const azalt = () => {
    //   const newCount = this.state.count <= 0 ? 0 : this.state.count - 1;
    //   this.setState({ count: newCount });
    // };

    // const artir = () => {
    //   this.setState({ count: this.state.count + 1 });
    // };

    // let imageURL = img_url;

    // if (!imageURL) {
    //   imageURL =
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfIoSKztrb_v6o5MSYV4cUqbzZNy_DV8NqA&usqp=CAU";
    // }

    // const imageURL = img_url
    //   ? img_url
    //   : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfIoSKztrb_v6o5MSYV4cUqbzZNy_DV8NqA&usqp=CAU";

    // function renderTag(url) {
    //   console.log(this);

    //   let tag = url ? (
    //     <img src={url} className="card-img-top" alt={title} />
    //   ) : (
    //     <span>No Image!</span>
    //   );

    //   return tag;
    // }

    // const imageURL = img_url ? img_url : demoDress;

    return (
      <div className="col p-0">
        <div className="card" style={inlineCss}>
          {this.renderTag(img_url)}
          {/* <img src={imageURL} className="card-img-top" alt={title} /> */}
          {/* <img
            src={
              img_url
                ? img_url
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfIoSKztrb_v6o5MSYV4cUqbzZNy_DV8NqA&usqp=CAU"
            }
            className="card-img-top"
            alt="..."
          /> */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price}</p>
            <div className="d-flex align-items-center gap-2">
              <button onClick={this.azalt} disabled={this.state.count === 0}>
                <AiOutlineMinus />
              </button>
              <span>{this.state.count}</span>
              <button onClick={this.artir}>
                <AiOutlinePlus />
              </button>
            </div>
            <a href="#" className="btn btn-danger">
              Add basket
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string,
  img_url: PropTypes.string || null,
  price: PropTypes.number,
};
