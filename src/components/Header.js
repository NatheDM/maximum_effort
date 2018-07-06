import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Modal from "./Modal.js";
import SignUp from "./SignUp.js";
import About from "./About.js";
import LogIn from "./LogIn.js";

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
      <Nav pullRight className="navModal">
        <li className="navModal">
          <Modal className="modal" name="About">
            <About />
          </Modal>
        </li>
        <li className="navModal">
          <Modal className="modal" name="Sign up">
            <SignUp />
          </Modal>
        </li>
        <li className="navModal">
          <Modal className="modal" name="Log in">
            <LogIn />
          </Modal>
        </li>
      </Nav>
    </Navbar>
  );
};

export default Header;
