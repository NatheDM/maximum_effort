import React from "react";
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  // Radio,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  logIn: acct =>
    dispatch({
      type: "LOGIN_PROFILE",
      payload: acct
    })
});

const LogIn = ({ logIn, history, toggle }) => {
  let nameUser, password;

  let submitForm = event => {
    event.preventDefault();

    logIn({
      nameUser: nameUser.value,
      password: password.value
    });

    history.push("/area");

    toggle();

    nameUser.value = "";
    password.value = "";
  };

  let kill = event => {
    event.preventDefault();
    toggle();

    nameUser.value = "";
    password.value = "";
  };

  return (
    <Form horizontal onSubmit={event => submitForm(event)}>
      <Col smOffset={11}>
        <button onClick={theThing => kill(theThing)}>&times;</button>
      </Col>
      <FormGroup>
        <Col smOffset={1} sm={6}>
          <h3>Log in.</h3>
        </Col>
      </FormGroup>

      <FormGroup>
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
      </FormGroup>

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />

        <Col sm={8}>
          <FormControl
            placeholder="Password"
            type="text"
            required
            inputRef={ref => {
              password = ref;
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
  )(LogIn)
);
