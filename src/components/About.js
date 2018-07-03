import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  // FormControl,
  // ControlLabel,
  // Radio,
  Button
} from "react-bootstrap";
// import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const About = props => {
  let findProfiles = event => {
    event.preventDefault();
    props.history.push("/profiles");
  };

  let findArea = event => {
    event.preventDefault();
    props.history.push("/area");
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
    </Jumbotron>
  );
};

export default withRouter(About);
