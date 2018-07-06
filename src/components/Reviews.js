import React from "react";
import { Jumbotron, Grid, Col, Panel } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "./Modal.js";
import Review from "./Review.js";

const mapStateToProps = state => ({
  reviews: state.reviews
});

const Reviews = ({ history, reviews }) => {
  return (
    <Jumbotron
      //Added style to align on the left-side of the webpage
      style={{
        position: "relative",
        right: "400px",
        width: "790px"
      }}
    >
      <Col smOffset={2} sm={6}>
        <h3>Local Reviews.</h3>
      </Col>
      <Grid>
        {!reviews.length && <h3>no reviews found</h3>}
        {reviews.map(rvw => (
          <Col sm={4} key={rvw._id}>
            <Panel>
              <Panel.Heading>
                <Modal className="modal" name={rvw.nameLocation}>
                  <Review id={rvw._id} />
                </Modal>
              </Panel.Heading>
              <Panel.Body>
                Location: {rvw.nameLocation}
                <br />
                Zip: {rvw.locZip}
              </Panel.Body>
            </Panel>
          </Col>
        ))}
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(connect(mapStateToProps)(Reviews));
