import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useGlobalState } from "../provider/GlobalProvider/useGlobalState";
import { Badge, Button, Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  // const { user } = useGlobalState();
  const { push: navigate } = useRouter();

  // const {
  //   state: { favorite },
  // } = useGlobalState();

  return (
    <Navbar variant="dark" expand="lg" sticky="top" bg="danger" className="p-4">
      <Container>
        <Navbar.Brand onClick={() => navigate("/movies")}>
          Movie App
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <div className="d-flex gap-4">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" href="/movies">
                Home
              </Link>
              <Link className="nav-link" href="/search">
                Search
              </Link>
              <Link className="nav-link" href="/favorite">
                Favorite{" "}
                {/* {favorite.length ? (
                  <Badge className="text-dark" bg="warning">
                    {favorite.length}
                  </Badge>
                ) : (
                  ""
                )} */}
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Button size="sm" onClick={() => navigate("/create-movie")}>
            Create +
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
