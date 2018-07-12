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

const SignUp = ({ addProfile, history, interests, toggle }) => {
  let nameFirst,
    nameLast,
    nameUser,
    dateBirth,
    homeCity,
    homeState,
    homeZip,
    email,
    password,
    confirmPassword,
    interest;

  let submitForm = event => {
    event.preventDefault();

    if (password.value === confirmPassword.value) {
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

      history.push("/area");

      toggle();

      nameFirst.value = "";
      nameLast.value = "";
      nameUser.value = "";
      dateBirth.value = "";
      homeCity.value = "";
      homeState.value = "";
      homeZip.value = "";
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
      interest.value = "";
    } else {
      alert("Passwords must match.");
    }
  };

  let kill = event => {
    event.preventDefault();
    toggle();

    nameFirst.value = "";
    nameLast.value = "";
    nameUser.value = "";
    dateBirth.value = "";
    homeCity.value = "";
    homeState.value = "";
    homeZip.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    interest.value = "";
  };

  return (
    <Form horizontal onSubmit={event => submitForm(event)}>
      <Col smOffset={11}>
        <button onClick={theThing => kill(theThing)}>&times;</button>
      </Col>
      <FormGroup>
        <Col smOffset={1} sm={6}>
          <h3>Create an account.</h3>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="First name"
            type="text"
            required
            inputRef={ref => {
              nameFirst = ref;
            }}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="Last name"
            type="text"
            required
            inputRef={ref => {
              nameLast = ref;
            }}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="Birth datte"
            type="date"
            required
            inputRef={ref => {
              dateBirth = ref;
            }}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="Home city"
            type="text"
            required
            inputRef={ref => {
              homeCity = ref;
            }}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="Home state"
            type="text"
            required
            inputRef={ref => {
              homeState = ref;
            }}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="Home zip code"
            type="number"
            required
            inputRef={ref => {
              homeZip = ref;
            }}
          />
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
            placeholder="E-mail"
            type="email"
            required
            inputRef={ref => {
              email = ref;
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

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="Confirm password"
            type="password"
            required
            inputRef={ref => {
              confirmPassword = ref;
            }}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2} componentClass={ControlLabel} />
        <Col sm={8}>
          <FormControl
            placeholder="Main interest"
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
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
);
