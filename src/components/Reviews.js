import React from "react";
import {
  Jumbotron,
  Grid,
  // Form,
  // FormGroup,
  Col,
  // FormControl,
  // ControlLabel,
  // Radio,
  Button
} from "react-bootstrap";
// import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Route, Link } from "react-router-dom";

const Reviews = props => {
  let goMap = event => {
    event.preventDefault();
    props.history.push("/area");
  };

  let goWriteReview = event => {
    event.preventDefault();
    props.history.push("/writereview");
  };

  return (
    <Jumbotron>
      <Grid>
        <Col smOffset={2} sm={6}>
          <h3>Local Reviews.</h3>
        </Col>
        <Col smOffset={2} sm={6}>
          <Button type="submit" onClick={event => goWriteReview(event)}>
            Create review
          </Button>
        </Col>
        <Col smOffset={2} sm={6}>
          <Button type="submit" onClick={event => goMap(event)}>
            Go to map
          </Button>
        </Col>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(Reviews);
