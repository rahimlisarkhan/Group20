import { useRouter } from "next/router";
import { getMovies } from "../../services/movie";
import { ROUTER } from "../../shared/constant/router";
import Image from "next/image";

export default function MoviePanel({ movies }) {
  const { push } = useRouter();

  return (
    <div className="m-5">
      <h1 className="text-white">Movies</h1>

      <div className="d-flex flex-wrap gap-4">
        {movies.map((movie) => (
          <div className="shadow bg-white" style={{ width: "18rem" }}>
            <Image
              width={500}
              height={500}
              //   loader={() => <h1>Loading ...</h1>}
              src={movie.Poster}
              className="img-fluid w-100"
              alt={movie.Title}
              style={{ height: 200, objectFit: "cover" }}
            />
            <div className=" p-3">
              <p className="h3 text-truncate">{movie.Title}</p>
              <p className="h3">{movie.Year}</p>

              <button
                className="btn btn-warning"
                onClick={() => push(ROUTER.PANEL_ID(movie.imdbID))}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await getMovies();

    return {
      props: {
        movies: response.data.Search,
      },
    };
  } catch (err) {
    return {
      props: {
        hasError: true,
      },
    };
  }
}
