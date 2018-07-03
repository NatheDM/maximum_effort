import React from "react";
import ReactDom from "react-dom";
import { Jumbotron, Grid, Col, Panel, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Popup from "react-popup";

const mapStateToProps = state => ({
  reviews: state.reviews
});

const Review = ({ history, reviews, match }) => {
  let myRevo = reviews.filter(rvw => rvw._id === match.params.id)[0];

  let findReviews = event => {
    event.preventDefault();
    history.push("/area");
  };

  return (
    <Jumbotron>
      <Popup />
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

              <Panel.Body>
                {/*                 <br />
                <div>
                  <img src="../images/eyeCat.jpg" alt="cat" />
                </div> */}
                {myRevo.reviewBody}
              </Panel.Body>
            </Panel>
            <Col smOffset={2} sm={6}>
              <Button type="submit" onClick={event => findReviews(event)}>
                Find reviews
              </Button>
            </Col>
          </Form>
        </Grid>
      )}
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Review);
