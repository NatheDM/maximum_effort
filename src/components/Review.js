import React from "react";
import { Jumbotron, Grid, Col, Panel, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  reviews: state.reviews
});

const Review = ({ history, reviews, match }) => {
  let myRevo = reviews.filter(rvw => rvw._id === match.params.id)[0];

  let findReviews = event => {
    event.preventDefault();
    history.push("/reviews");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal>
          <Panel>
            <Panel.Heading>
              <Panel.Title />
            </Panel.Heading>
            {myRevo && (
              <Panel.Body>
                Location: {myRevo.nameLocation}
                <br />
                Address: {myRevo.locStreet}, {myRevo.locCity}, {myRevo.locState}{" "}
                {myRevo.locZip}
                <br />
                Review: {myRevo.reviewBody}
              </Panel.Body>
            )}
          </Panel>
          <Col smOffset={2} sm={6}>
            <Button type="submit" onClick={event => findReviews(event)}>
              Find reviews
            </Button>
          </Col>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Review);
