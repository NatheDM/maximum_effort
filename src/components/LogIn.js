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
import services from "../service";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  storeToken: tkn =>
    dispatch({
      type: "STORE_TOKEN",
      payload: tkn
    })
});

const LogIn = ({ storeToken, history, toggle }) => {
  let nameUser, password;

  //-------------------------------
  let submitForm = event => {
    event.preventDefault();
    let authen = false;

    let prfl = {
      nameUser: nameUser.value,
      password: password.value
    };
    services.profiles
      .auth(prfl)
      .then(token => {
        if (token) {
          authen = true;
          history.push("/area");
          storeToken(authen);
        }
      })
      .catch(err => {
        history.push("/home");
        alert("Invalid user name or password.");
      });

    storeToken(authen);

    toggle();

    nameUser.value = "";
    password.value = "";
    return authen;
  };
  //-------------------------------

  let kill = event => {
    event.preventDefault();
    toggle();

    nameUser.value = "";
    password.value = "";
  };

  return (
    <Form
      horizontal
      onSubmit={
        event => submitForm(event)
        //.catch(err => console.log("Error: ", err))
      }
    >
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
            type="password"
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
