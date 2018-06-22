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

const mapStateToProps = state => ({
  interests: state.interests
});

const mapDispatchToProps = dispatch => ({
  addProfile: prfl =>
    dispatch({
      type: "ADD_PROFILE",
      payload: prfl
    })
});

const SignUp = ({ addProfile, history, interests }) => {
  let nameFirst,
    nameLast,
    nameUser,
    dateBirth,
    homeCity,
    homeState,
    homeZip,
    email,
    password,
    interest;

  let submitForm = event => {
    event.preventDefault();

    addProfile({
      nameFirst: nameFirst.value,
      nameLast: nameLast.value,
      nameUser: nameUser.value,
      dateBirth: dateBirth.value,
      homeCity: homeCity.value,
      homeState: homeState.value,
      homeZip: homeZip.value,
      email: email.value,
      password: password.value,
      interest: interest.value
    });

    history.push("/user");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>Create an account.</h3>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              First name:
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  nameFirst = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Last name:
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  nameLast = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Birth date:
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  dateBirth = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Home city:
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  homeCity = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Home state:
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  homeState = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Home zip code:
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  homeZip = ref;
                }}
              />
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
              E-mail:
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  email = ref;
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

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Main interest:
            </Col>
            <Col sm={6}>
              <FormControl
                componentClass="select"
                defaultValue={-1}
                inputRef={ref => {
                  interest = ref;
                }}
              >
                <option value={-1} disabled="disabled">
                  --select--
                </option>
                {interests.map(hbbs => (
                  <option key={hbbs.name} value={hbbs.name}>
                    {hbbs.cosmetic ? hbbs.cosmetic : hbbs.name}
                  </option>
                ))}
              </FormControl>
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
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
);
