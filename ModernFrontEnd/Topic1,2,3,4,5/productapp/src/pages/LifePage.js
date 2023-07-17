import React, { Component } from "react";
import { getMovie } from "service/movie";

export class LifePage extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies: [],
      count: 5,

      oldCount: 0,
    };

    this.removeItem = this.removeItem.bind(this);
    // this.id = new Date.now();

    // console.log("Class constructor ise dusur yaradildi");
  }

  //   useEffect
  componentWillMount() {
    console.log("Component yaradilir!");

    // this.setState({ count: 0 });
    document.title = "Test App";

    // document.body.style.background = "red";

    // statedeki melumatlar uida gorsenmemisden evvel sifrlamaq
  }
  componentWillUnmount() {
    console.log("Componentden cixildi.Yani dagidildi yox oldu!");

    // this.props.onChangeUser(null);

    // localStorage.removeItem("key");

    // WebSocket.off();

    // firebase.removeCol("user");
  }

  //   useEffect useMemo useCallback
  //   shouldComponentUpdate(newProps, newState) {
  //     // console.log("newProps:", newProps);
  //     // console.log("oldState", this.state);
  //     // console.log("newState", newState);

  //     if (
  //       newState.count !== this.state.count ||
  //       this.props.price !== newProps.price ||
  //       this.state.movies.length > 0
  //     ) {
  //       return true;
  //     }

  //     return false;
  //   }

  componentDidUpdate(oldProps, oldState) {
    console.log("oldState", oldState);
    console.log("newState", this.state);

    // this.setState({ count: 4 }); dont use!
    // this.setState({ oldCount: oldState.count });
  }

  componentDidMount() {
    console.log("Component yaradildi!");

    // WebSocket.on();

    getMovie()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ movies: data.results });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
    // firebase.addCol("user");
  }

  removeItem(id) {
    // alert("This movie id" + id);

    let newState = this.state.movies.filter((movie) => movie.id !== id);

    this.setState({ movies: newState });
  }

  render() {
    console.log("Size gostermek ucun jsx render edirem!");

    console.log(this.state.movies);

    if (this.state.isLoading) {
      return <h1>Loading....</h1>;
    }

    return (
      <div>
        LifePage {this.state.count}
        <ol>
          {this.state.movies?.map(({ original_title, id }) => (
            <li key={id} onClick={() => this.removeItem(id)}>
              {original_title}
            </li>
          ))}
        </ol>
        {/* old count:{this.state.oldCount - 1} */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        {/* <button onClick={() => this.setState({ count: 8 })}>Increment</button> */}
      </div>
    );
  }
}
