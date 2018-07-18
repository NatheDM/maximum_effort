import React from "react";
import { Col } from "react-bootstrap";

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
        <h3 className="abouthead">About page.</h3>
      </Col>
      <Col smOffset={2} sm={8}>
        <div id="about">
          <br />
          Tra-Local is a webapp that aims to provide pertinent information about
          locales to inform user of what places to avoid, so as to enhance their
          travel experiences.
          <br />
          <br />
          Tra-Local is designed by Maximum_Effort. Maximum_Effort is:
          <ul>
            <li id="list">Jonathan Moss</li>
            <li id="list">Steve Olson</li>
            <li id="list">James Suell</li>
          </ul>
          <br />
          Our company contact info goes here.
        </div>
      </Col>
    </div>
  );
};

export default About;
