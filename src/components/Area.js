import React from "react";
import { Jumbotron, Grid, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MapWithASearchBox from "./Maps.js";
import Modal from "./Modal.js";
import Reviews from "./Reviews.js";
import WriteReview from "./WriteReview.js";

const mapStateToProps = state => ({
  mapCenter: state.mapCenter
});

const Area = props => {
  let goPro = event => {
    event.preventDefault();
    props.history.push("/profiles");
  };

  return (
    <Jumbotron>
      <Grid>
        <Col smOffset={2} sm={6}>
          <h3>Area map.</h3>
          <Reviews />

          <MapWithASearchBox />
        </Col>

        {console.log(props.mapCenter)}

        <Col smOffset={-2} sm={6}>
          <Button
            style={{
              position: "relative",
              right: "-678px",
              top: "-230px"
            }}
            type="submit"
            onClick={event => goPro(event)}
          >
            Profile List
          </Button>
        </Col>
        <Col smOffset={2} sm={-10}>
          <Modal
            className="modal"
            name="Write a review"
            style={{
              position: "relative",
              right: "68px",
              top: "530px"
            }}
          >
            <WriteReview />
          </Modal>
        </Col>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(connect(mapStateToProps)(Area));
