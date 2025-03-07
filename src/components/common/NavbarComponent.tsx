import {
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../globalState/contexts/cartContext";

const NavbarComponent = () => {
  const { state } = useCartContext();
  console.log(state);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand href="#home">BookHaven</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product" className="nav-link">
              Product
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
          Cart: {state?.cartItems?.length}
          <Nav className="ms-auto">
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end"> */}
            <NavDropdown
              align="end"
              id="basic-nav-dropdown"
              title={
                <Image
                  src={require("../../img/jpg/dummy_person.jpeg")}
                  roundedCircle
                  width={32} // Adjust size as needed
                  height={32}
                  className="me-2"
                />
              }
            >
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
