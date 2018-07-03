import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = props => {
  return (
    <Navbar inverse fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" style={{ display: "flex" }}>
            Maximum_Effort
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer to="/about">
          <NavItem eventKey={1}>About</NavItem>
        </LinkContainer>
        <LinkContainer exact to="/signup">
          <NavItem eventKey={2}>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={3}>Log in</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
