import React from "react";
import { Jumbotron, Grid, Col, Panel, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import ProfileList from "./ProfileList";
import services from "../service";

const mapStateToProps = state => ({
  profiles: state.profiles,
  getOneProfile: state.getOneProfile
});

const Profile = ({ history, profiles, getOneProfile }) => {
  let findProfiles = event => {
    event.preventDefault();
    history.push("/profiles");
  };

  console.log(getOneProfile);

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal>
          {profiles.map(prfl => (
            <Panel>
              <Panel.Heading>
                <Panel.Title />
              </Panel.Heading>
              <Panel.Body>
                UserName: {prfl.nameUser}
                <br />
                Email: {prfl.email}
                <br />
                Interests: {prfl.interest}
              </Panel.Body>
            </Panel>
          ))}
          <Col smOffset={2} sm={6}>
            <Button type="submit" onClick={event => findProfiles(event)}>
              Find profiles
            </Button>
          </Col>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Profile);
