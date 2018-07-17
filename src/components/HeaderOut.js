import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import NavModal from "./modals/HeaderModal";
import SignUp from "./SignUp.js";
import About from "./About.js";
import LogIn from "./LogIn.js";

const mapStateToProps = state => ({
  authen: state.authen
});

const HeaderOut = props => {
  return (
    <Navbar inverse fluid>
      console.log(props.authen)
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/home" style={{ display: "flex" }}>
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

export default connect(mapStateToProps)(HeaderOut);
