import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import NavModal from "./HeaderModal";
import SignUp from "./SignUp.js";
import About from "./About.js";
import LogIn from "./LogIn.js";

const Header = props => {
  return (
    <Navbar inverse fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" style={{ display: "flex" }}>
            Tra-Local
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight className="navModal">
        <li className="navModal">
          <NavModal name="About">
            <About />
          </NavModal>
        </li>
        <li className="navModal">
          <NavModal className="autoModal" name="Sign up">
            <SignUp />
          </NavModal>
        </li>
        <li className="navModal">
          <NavModal className="autoModal" name="Log in">
            <LogIn />
          </NavModal>
        </li>
      </Nav>
    </Navbar>
  );
};

export default Header;
