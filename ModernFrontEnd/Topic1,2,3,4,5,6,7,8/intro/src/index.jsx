class MyApp extends React.Component {
  fullname = "John Doe";

  render() {
    return (
      <div>
        <Header />
        <h1>Hello: {this.fullname} React JS</h1>
        <p>Lorem</p>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.querySelector("#root"));
