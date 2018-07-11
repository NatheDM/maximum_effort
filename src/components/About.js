import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  Button,
  Glyphicon
} from "react-bootstrap";

const About = props => {
  let kill = event => {
    event.preventDefault();
    props.toggle();
  };

  return (
    <div>
      <Col smOffset={11}>
        <button onClick={theThing => kill(theThing)}>&times;</button>
      </Col>
      <Col smOffset={1} sm={6}>
        <h3>About page.</h3>
      </Col>
      <Col smOffset={2} sm={8}>
        <div>
          <br />
          Tra-Local is a webapp that aims to provide pertinent information about
          locales to inform user of what places to avoid, so as to enhance their
          travel experiences.
          <br />
          <br />
          Tra-Local is designed by Maximum_Effort. Maximum_Effort is:
          <ul>
            <li>Jonathan Moss</li>
            <li>Steve Olson</li>
            <li>James Suell</li>
          </ul>
          <br />
          Our company contact info goes here.
        </div>
      </Col>
    </div>
  );
};

export default About;
