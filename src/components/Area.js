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
          {/* Removing the "div" and style within the Div, fixed
              the issue with the underscore expanding the page and
              allowed map to display as normal.  --James */}
          <MapWithASearchBox />
        </Col>

        {/* Changed the smOffset from "2" sm="6", to "2" sm="-10" for both
            buttons to align to the top of the page.  --James  */}
        <Col smOffset={2} sm={-10}>
          <Button type="submit" onClick={event => goHome(event)}>
            User Home
          </Button>
        </Col>

        <Col smOffset={2} sm={-10}>
          <Button type="submit" onClick={event => findReviews(event)}>
            Local Reviews
          </Button>
        </Col>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(Area);
