import MovieCard from "feature/home/components/MovieCard";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { getMovies } from "services/movie";

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const refetch = async () => {
      const res = await getMovies();
      console.log(res);
      this.setState({ movies: res.data.Search });
    };

    refetch();
  }

  render() {
    return (
      <Row as="main">
        {this.state.movies?.map((movie, index) => (
          <Col key={"movie" + index} lg="3" md="3" sm="6">
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Home;
