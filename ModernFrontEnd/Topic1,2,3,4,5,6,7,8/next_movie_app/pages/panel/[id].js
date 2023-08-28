import { useRouter } from "next/router";
import { getMovieId } from "../../services/movie";
import Image from "next/image";

export default function MovieDetail({ movie }) {
  const { back } = useRouter();

  return (
    <div className="m-5 text-white">
      <button className="btn btn-outline-warning mb-2" onClick={back}>
        --back
      </button>
      <Image
        width={500}
        height={500}
        className="w-100"
        style={{ height: 500, objectFit: "cover" }}
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="d-flex gap-3 flex-column">
        <h1>{movie.Title}</h1>

        <ul>
          <li>{movie.Country}</li>
          <li>{movie.Language}</li>
          <li>{movie.Runtime}</li>
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const movieID = query.id;

  const { data: movie } = await getMovieId(movieID);

  return {
    props: {
      movie,
    },
  };
}
