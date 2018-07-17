import React from "react";
import { Jumbotron, Grid, Col, Button } from "react-bootstrap";
import MapWithASearchBox from "./Maps.js";
import Modal from "./modals/Modal.js";
import Reviews from "./Reviews.js";
import WriteReview from "./WriteReview.js";

const Area = props => {
  let goPro = event => {
    event.preventDefault();
    props.history.push("/profiles");
  };

  return (
    <Jumbotron>
      <Grid>
        <Col smOffset={1} sm={10}>
          <Button>
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
          <Button onClick={event => goPro(event)}>Profile List</Button>
          <h3>Area map. </h3>
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
  );
};

export default Area;
