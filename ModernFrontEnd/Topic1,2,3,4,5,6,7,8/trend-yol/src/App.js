import React from "react";
import { Header } from "./components/Header";
import Products from "./components/Products";
import Container from "./components/Container";

import dataSebuhi3 from "./mock/data3.json";

const data1 = [
  {
    title: "Product1",
    price: 4.99,
    img_url:
      "https://www.hausekids.com/i/l/003/0031011_2-5-yas-miranda-kiz-cocuk-elbise-fusya.jpeg",
  },
  {
    title: "Product2",
    price: 6.99,
    img_url: null,
  },
  {
    title: "Product3",
    price: 2.99,
    img_url:
      "https://vakko-vr.akinoncdn.com/products/2022/05/17/1327505/ed6220ef-c139-45f8-8ad8-2f401c5c3323_size1400x1400_quality100.jpg",
  },
  {
    title: "Product4",
    price: 9.99,
    img_url: null,
  },
  {
    title: "Product5",
    price: 12.99,
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSh5I_UEwviEHgeRP2cgSaoso8lBdXgnM_w&usqp=CAU",
  },
];

const data2 = [
  {
    title: "Product1",
    price: 4.99,
    img_url:
      "https://www.hausekids.com/i/l/003/0031011_2-5-yas-miranda-kiz-cocuk-elbise-fusya.jpeg",
  },
  {
    title: "Product2",
    price: 6.99,
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUQvT96QFlpe4zz5nyykeEqWU2VllvZTcsA&usqp=CAU",
  },
  {
    title: "Product3",
    price: 2.99,
    img_url:
      "https://vakko-vr.akinoncdn.com/products/2022/05/17/1327505/ed6220ef-c139-45f8-8ad8-2f401c5c3323_size1400x1400_quality100.jpg",
  },
  {
    title: "Product4",
    price: 9.99,
    img_url:
      "https://static.ticimax.cloud/31501/uploads/urunresimleri/buyuk/mina-kiz-cocuk-elbise-53-8cd.jpeg",
  },
  {
    title: "Product5",
    price: 12.99,
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSh5I_UEwviEHgeRP2cgSaoso8lBdXgnM_w&usqp=CAU",
  },
];

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      price: 5,
    };
  }

  render() {
    const isLoading = false;

    // const azalt = () => {
    //   this.setState({ count: this.state.count - 1 });
    // };

    // const artir = () => {
    //   this.setState({ count: this.state.count + 1 });
    // };

    return (
      <>
        <Header />
        <Container>
          {/* <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={azalt}>Azalt</button>
            <button onClick={artir}>Artir</button>
          </div>
          <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={azalt}>Azalt</button>
            <button onClick={artir}>Artir</button>
          </div>
          <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={azalt}>Azalt</button>
            <button onClick={artir}>Artir</button>
          </div> */}

          <Products
            listName="All products"
            products={data1}
            isLoading={isLoading}
          />
          <Products listName="Sales" products={data2} isLoading={isLoading} />
          <Products
            listName="Child products"
            products={dataSebuhi3}
            isLoading={isLoading}
          />
        </Container>
      </>
    );
  }
}
