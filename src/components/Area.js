import React from "react";
import { Jumbotron, Grid, Col, Button } from "react-bootstrap";
import MapWithASearchBox from "./Maps.js";
import Modal from "./modals/Modal.js";
import Reviews from "./Reviews.js";
import WriteReview from "./WriteReview.js";
import HeaderIn from "./HeaderIn.js";
import services from "../service";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  revoOnLoad: payload =>
    dispatch({
      type: "LOAD_REVIEW",
      payload
    })
});

const Area = props => {
  services.reviews.all().then(prfl => props.revoOnLoad(prfl));

  let goPro = event => {
    event.preventDefault();
    props.history.push("/profiles");
  };

  return (
    <div>
      <HeaderIn />
      <Jumbotron>
        <Grid>
          <Col smOffset={4} sm={8}>
            <h3 className="abouthead">Area map. </h3>
            <Button className="rightnow">
              <Modal
                className="modal"
                name="Write a review"
                style={{
                  display: "inline-block",
                  margin: "0"
                }}
              >
                <WriteReview />
              </Modal>
            </Button>
            <Button onClick={event => goPro(event)} className="rightnow">
              Profile List
            </Button>
          </Col>

          <Col smOffset={1} sm={10}>
            <MapWithASearchBox />
            <br />
          </Col>

          <Col smOffset={1} sm={10} className="workdamn">
            <hr />
            <Reviews
              style={{
                position: "relative"
              }}
            />
          </Col>

          <Col smOffset={2} sm={6} />
        </Grid>
      </Jumbotron>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Area);
