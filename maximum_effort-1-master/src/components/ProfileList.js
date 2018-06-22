import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  // FormControl,
  // ControlLabel,
  // Radio,
  Button,
  Panel
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import services from "../service";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const mapDispatchToProps = dispatch => ({
  removeProfile: _id =>
    dispatch({
      type: "REMOVE_PROFILE",
      payload: _id
    })
  /*   getProfiles: payload => {
    services.profiles.all().then(prfl =>
      dispatch({
        type: "LOAD_PROFILE",
        payload: prfl
      })
    );
  } */
});

const Profiles = (history, profiles, getProfiles) => {
  // props.getProfiles();

  let goHome = event => {
    event.preventDefault();
    history.push("/user");
  };

  let findProfile = event => {
    event.preventDefault();
    history.push("/profiletemp");
  };

  return (
    <Jumbotron>
      <Grid>
        {!profiles.length && <h3>no profiles found</h3>}
        {console.log(profiles.length)}
        {profiles.map(prfl => (
          <Col sm={4} key={prfl._id}>
            <Panel>
              <Panel.Heading>
                <Panel.Title>{prfl.nameUser}</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                ID: {prfl._id}
                <br />
                City: {prfl.homeCity}
                <br />
                State: {prfl.homeState}
              </Panel.Body>
            </Panel>
          </Col>
        ))}
        <Col smOffset={2} sm={6}>
          <Button type="submit" onClick={event => goHome(event)}>
            User Home
          </Button>
        </Col>
        <Col smOffset={2} sm={6}>
          <Button type="submit" onClick={event => findProfile(event)}>
            A profile.
          </Button>
        </Col>
      </Grid>
    </Jumbotron>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
