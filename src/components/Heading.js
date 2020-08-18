import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

function Heading() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/adduser">
              Add
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Heading;
