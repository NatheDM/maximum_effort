import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  addReview: rvw =>
    dispatch({
      type: "ADD_REVIEW",
      payload: rvw
    })
});

const WriteReview = ({ addReview, history, interests, toggle }) => {
  let nameUser, nameLocation, locCity, locState, locStreet, locZip, reviewBody;

  let submitForm = event => {
    event.preventDefault();

    addReview({
      nameUser: nameUser.value,
      nameLocation: nameLocation.value,
      locCity: locCity.value,
      locState: locState.value,
      locStreet: locStreet.value,
      locZip: locZip.value,
      reviewBody: reviewBody.value
    });

    toggle();

    nameUser.value = "";
    nameLocation.value = "";
    locCity.value = "";
    locState.value = "";
    locStreet.value = "";
    locZip.value = "";
    reviewBody.value = "";
  };

  let kill = event => {
    event.preventDefault();
    toggle();

    nameUser.value = "";
    nameLocation.value = "";
    locCity.value = "";
    locState.value = "";
    locStreet.value = "";
    locZip.value = "";
    reviewBody.value = "";
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>Write a review.</h3>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="User name"
                type="text"
                required
                inputRef={ref => {
                  nameUser = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Location name"
                type="text"
                required
                inputRef={ref => {
                  nameLocation = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Location city"
                type="text"
                required
                inputRef={ref => {
                  locCity = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Location state"
                type="text"
                required
                inputRef={ref => {
                  locState = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Location street"
                type="text"
                required
                inputRef={ref => {
                  locStreet = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Location zip code"
                type="text"
                required
                inputRef={ref => {
                  locZip = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel} />
            <Col sm={6}>
              <FormControl
                placeholder="Review body"
                type="text"
                required
                inputRef={ref => {
                  reviewBody = ref;
                }}
              />
            </Col>
          </FormGroup>

          <Col smOffset={2} sm={6}>
            <Button type="submit">Submit</Button>
            <Button onClick={theThing => kill(theThing)}>Close</Button>
          </Col>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(WriteReview)
);
