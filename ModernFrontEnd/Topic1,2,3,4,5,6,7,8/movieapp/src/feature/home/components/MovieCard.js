import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function MovieCard(props) {
  const navigate = useNavigate();

  const defaultProps = {
    Title: "Title1",
    Year: "2023",
    Poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_disney_elemental_v3_793_2a328b27.jpeg",
  };

  const { Poster, imdbID, Year, Title } = props;

  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={Poster ?? defaultProps.Poster} />
      <Card.Body>
        <Card.Title>{Title ?? defaultProps.Title}</Card.Title>
        <Card.Text>{Year ?? defaultProps.Year}</Card.Text>
        <Button variant="danger" onClick={() => navigate(`/movies/${imdbID}`)}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
