import React from "react";
import { Jumbotron, Grid, Col, Button, Panel } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  reviews: state.reviews
});

const Reviews = ({ history, reviews }) => {
  let goMap = event => {
    event.preventDefault();
    history.push("/area");
  };

  let goWriteReview = event => {
    event.preventDefault();
    history.push("/writereview");
  };

  let goGoGadgetReview = id => {
    history.push("/reviews/" + id);
  };

  return (
    <Jumbotron>
      <Col smOffset={2} sm={6}>
        <h3>Local Reviews.</h3>
      </Col>
      <Grid>
        {!reviews.length && <h3>no reviews found</h3>}
        {reviews.map(rvw => (
          <Col sm={4} key={rvw._id}>
            <Panel>
              <Panel.Heading>
                <Button
                  onClick={() => {
                    goGoGadgetReview(rvw._id);
                  }}
                >
                  <Panel.Title>{rvw.nameLocation}</Panel.Title>
                </Button>
              </Panel.Heading>
              <Panel.Body>
                Location: {rvw.nameLocation}
                <br />
                Zip: {rvw.locZip}
              </Panel.Body>
            </Panel>
          </Col>
        ))}

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

export default connect(mapStateToProps)(Reviews);
