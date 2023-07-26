import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./Card";

export class Home extends React.Component {
  sayBook() {
    console.log("Hello book");
  }

  render() {
    const spanInfo = <span>Info sub</span>;

    return (
      <>
        <Header title="Eacamp School" onlineUsers={8}>
          <p>Lorem ipsum</p>
          <p>Ipsum ipsum</p>
          <div></div>
        </Header>
        {/* <Header /> */}
        <main>
          <section>
            About info
            {spanInfo}
            <Card
              title="CardTitle"
              price={12.9}
              desc={["Lorem", "Test", "Child"]}
              isNew={false}
              img_url={null}
              sameBook={{ name: "TestBook2", price: 9.9 }}
              sayHelloBook={this.sayBook}
              spanInfo={spanInfo}
            />
          </section>
          {/* <section> Contact </section>
          <section> Partners</section> */}
        </main>
        {/* <Footer /> */}
      </>
    );
  }
}

// export  default Header;
