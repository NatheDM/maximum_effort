import React from "react";
import { Jumbotron, Grid, Col, Panel, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  reviews: state.reviews
});

const Review = ({ history, reviews, match, toggle, id }) => {
  let myRevo = reviews.filter(rvw => rvw._id === id)[0];

  let closeModal = event => {
    event.preventDefault();
    toggle();
  };

  return (
    <Jumbotron>
      {myRevo && (
        <Grid>
          <Form horizontal>
            <Panel>
              <Panel.Heading>
                <Panel.Title>
                  {myRevo.nameLocation}, {myRevo.locStreet}, {myRevo.locCity},{" "}
                  {myRevo.locState} {myRevo.locZip}{" "}
                </Panel.Title>
              </Panel.Heading>

              <Panel.Body>{myRevo.reviewBody}</Panel.Body>
            </Panel>
            <Col smOffset={2} sm={6}>
              <Button type="submit" onClick={event => closeModal(event)}>
                Close
              </Button>
            </Col>
          </Form>
        </Grid>
      )}
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Review);
