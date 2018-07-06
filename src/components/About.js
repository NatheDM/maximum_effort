import React from "react";
import { Jumbotron, Grid, Form, FormGroup, Col, Button } from "react-bootstrap";

const About = props => {
  let kill = event => {
    event.preventDefault();
    props.toggle();
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>About page.</h3>
              <div>
                Maximum_Effort is a webapp that aims to provide pertinent
                information about locales to inform user of what places to
                avoid, so as to enhance their travel experiences.
                <br />
                <br />
                Maximum_Effort is designed by:
                <ul>
                  <li>Jonathan Moss</li>
                  <li>Steve Olson</li>
                  <li>James Suell</li>
                </ul>
                <br />
                Our company contact info goes here.
              </div>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
      <Col smOffset={2} sm={6}>
        <Button onClick={theThing => kill(theThing)}>Close</Button>
      </Col>
    </Jumbotron>
  );
};

export default About;
