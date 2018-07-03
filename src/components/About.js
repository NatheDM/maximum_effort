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
            </Col>
          </FormGroup>

          <Col smOffset={2} sm={6}>
            <Button type="submit" onClick={event => findProfiles(event)}>
              Find profiles
            </Button>
          </Col>

          <Col smOffset={2} sm={6}>
            <Button type="submit" onClick={event => findArea(event)}>
              Go to map
            </Button>
          </Col>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(About);
