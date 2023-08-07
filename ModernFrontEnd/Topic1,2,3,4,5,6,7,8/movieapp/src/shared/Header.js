import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useGlobalState } from "./provider/GlobalProvider/useGlobalState";

function Header() {
  const { user } = useGlobalState();

  return (
    <Navbar variant="dark" expand="lg" sticky="top" bg="danger">
      <Navbar.Brand href="#home">Movie App: {user.fullname}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Search</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
