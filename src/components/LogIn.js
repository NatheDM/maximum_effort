import React from "react";
import {
  Jumbotron,
  Grid,
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
  loadProfile: prfl =>
    dispatch({
      type: "LOAD_PROFILE",
      payload: prfl
    })
});

const LogIn = ({ loadProfile, history }) => {
  let nameUser;
  let password;

  let submitForm = event => {
    event.preventDefault();

    loadProfile({
      nameUser: nameUser.value,
      password: password.value
    });

    history.push("/user");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>Log in.</h3>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              User name:
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  nameUser = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Password:
            </Col>
            <Col sm={6}>
              <FormControl
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
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LogIn)
);
