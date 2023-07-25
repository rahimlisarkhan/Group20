import React, { Component, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getMovieId } from "services/movie";

export const Detailed = () => {
  const [info, setInfo] = useState(null);
  const [show, setShow] = useState(false);

  const { movie_id } = useParams();

  useEffect(() => {
    //Component did mount
    if (!movie_id) return;

    const refetch = async () => {
      const res = await getMovieId(movie_id);

      console.log(res);

      setInfo(res.data);
    };

    refetch();
  }, [movie_id]);

  if (!info) {
    return <h1 className="display-4 text-white">Loading...</h1>;
  }

  return (
    <div class="shadow my-5">
      <Link to="../" className="btn btn-danger">
        Go back
      </Link>
      <div style={{ height: 300 }} className="d-flex gap-5 text-light p-4">
        <img className="img-fluid" src={info.Poster} />

        <ul>
          <li className="h3"> Title: {info.Title} </li>

          {show && (
            <>
              <li className="h5"> Actors: {info.Actors} </li>
              <li className="h5"> Awards: {info.Awards} </li>
              <li className="h5"> Country: {info.Country} </li>
              <li className="h5"> Year: {info.Year} </li>
              <li className="h5">
                {" "}
                imdb rating:{" "}
                <span className="text-warning bold">
                  {info.imdbRating}
                </span>{" "}
              </li>
            </>
          )}
          <Button size="sm" onClick={() => setShow((prevShow) => !prevShow)}>
            Show info
          </Button>
        </ul>
      </div>
      Detailed
    </div>
  );
};

// export class Detailed extends Component {
//   constructor() {
//     super();
//     this.state = {
//       info: null,
//     };
//   }

//   render() {
//     if (!this.state.info) {
//       return <h1 className="display-4 text-white">Loading...</h1>;
//     }

//     return <div class="bg-warning my-5">Detailed</div>;
//   }
// }

export default Detailed;
