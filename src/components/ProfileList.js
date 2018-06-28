import React from "react";
import {
  Jumbotron,
  Grid,
  //Form,
  //FormGroup,
  Col,
  // FormControl,
  // ControlLabel,
  // Radio,
  Button,
  Panel
} from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const Profiles = ({ history, profiles }) => {
  let goHome = event => {
    event.preventDefault();
    history.push("/user");
  };

  let goGoGadgetProfile = id => {
    //services.profiles.one(id).then(prfl => getOneProfile(prfl));
    history.push("/profiles/" + id);
  };

  return (
    <Jumbotron>
      <Grid>
        {!profiles.length && <h3>no profiles found</h3>}
        {profiles.map(prfl => (
          <Col sm={4} key={prfl._id}>
            <Panel>
              <Panel.Heading>
                <Button
                  onClick={() => {
                    goGoGadgetProfile(prfl._id);
                  }}
                >
                  <Panel.Title>{prfl.nameUser}</Panel.Title>
                </Button>
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
          {/*           <Button type="submit" onClick={event => findProfile(event)}>
            A profile.
          </Button> */}
        </Col>
      </Grid>
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Profiles);
