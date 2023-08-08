import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";
import { shortName } from "utils/shortName";

function MovieCard({
  Title = "Title1",
  Year = 2023,
  Poster = "https://lumiere-a.akamaihd.net/v1/images/p_disney_elemental_v3_793_2a328b27.jpeg",
  imdbID,
  onFav,
}) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isFavPage = pathname.includes("/favorite");

  const {
    state: { favorite },
  } = useGlobalState();

  let isFavorite = favorite.findIndex((item) => item.imdbID === imdbID) !== -1;

  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img
        variant="top"
        height={300}
        style={{ objectFit: "cover" }}
        src={Poster}
      />
      <Card.Body>
        <Card.Title>{shortName(Title, 15)}</Card.Title>
        <Card.Text>{Year}</Card.Text>
        <div className="d-flex gap-3">
          {imdbID && (
            <Button
              variant="danger"
              onClick={() => navigate(`/movies/${imdbID}`)}
            >
              Go somewhere
            </Button>
          )}
          {!isFavPage && (
            <Button variant={isFavorite ? "danger" : "warning"} onClick={onFav}>
              {isFavorite ? "-" : "+"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
