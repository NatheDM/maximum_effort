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
import MapWithASearchBox from "./Maps.js";

const Area = props => {
  let goHome = event => {
    event.preventDefault();
    props.history.push("/user");
  };

  let findReviews = event => {
    event.preventDefault();
    props.history.push("/reviews");
  };

  return (
    <Jumbotron>
      <Grid>
        <Col smOffset={2} sm={6}>
          <h3>Area map.</h3>
          <div
            style={{
              float: "right"
            }}
          >
            <MapWithASearchBox />
            _______________________________________________________________________________________________________________________
          </div>
        </Col>

        <Col smOffset={2} sm={6}>
          <Button type="submit" onClick={event => goHome(event)}>
            User Home
          </Button>
        </Col>

        <Col smOffset={2} sm={6}>
          <Button type="submit" onClick={event => findReviews(event)}>
            Local Reviews
          </Button>
        </Col>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(Area);
