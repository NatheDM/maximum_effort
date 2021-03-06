import React from "react";
import {
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
  let nameLocation, locCity, locState, locStreet, locZip, reviewBody;

  let submitForm = event => {
    event.preventDefault();

    addReview({
      nameUser: "MaxE3",
      nameLocation: nameLocation.value,
      locCity: locCity.value,
      locState: locState.value,
      locStreet: locStreet.value,
      locZip: locZip.value,
      reviewBody: reviewBody.value,
      center: {
        lat: 33.557732,
        lng: -111.88928499999997
      }
    });

    toggle();

    //nameUser.value = "";
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

    //nameUser.value = "";
    nameLocation.value = "";
    locCity.value = "";
    locState.value = "";
    locStreet.value = "";
    locZip.value = "";
    reviewBody.value = "";
  };

  return (
    <Form horizontal onSubmit={event => submitForm(event)}>
      <Col smOffset={11}>
        <button onClick={theThing => kill(theThing)}>&times;</button>
      </Col>
      <FormGroup>
        <Col smOffset={2} sm={6}>
          <h3 className="abouthead">Write a review.</h3>
        </Col>
      </FormGroup>

      {/* <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="User name"
            type="text"
            required
            inputRef={ref => {
              nameUser = ref;
            }}
          />
        </Col>
      </FormGroup> */}

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
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
        <Col sm={8}>
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
        <Col sm={8}>
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
        <Col sm={8}>
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
        <Col sm={8}>
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
        <Col sm={8}>
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
      </Col>
    </Form>
  );
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(WriteReview)
);
