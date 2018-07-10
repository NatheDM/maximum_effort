import React from "react";
import { Jumbotron, Grid, Col, Panel } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "./Modal.js";
import Review from "./Review.js";

const mapStateToProps = state => ({
  reviews: state.reviews,
  mapCenter: state.mapCenter
});

const Reviews = ({ history, reviews, mapCenter }) => {
  let myCenter = { ...mapCenter.payload };
  let latMin = parseFloat(myCenter.lat - 0.125);
  let latMax = parseFloat(myCenter.lat - -0.125);
  let lngMin = parseFloat(myCenter.lng - 0.125);
  let lngMax = parseFloat(myCenter.lng - -0.125);

  return (
    <Jumbotron
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
        {reviews.map(rvw => {
          if (latMin <= rvw.center.lat) {
            if (rvw.center.lat <= latMax) {
              if (lngMin <= rvw.center.lng) {
                if (rvw.center.lng <= lngMax) {
                  return (
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
                  );
                }
              }
            }
          }
        })}
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(connect(mapStateToProps)(Reviews));
