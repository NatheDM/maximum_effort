import React from "react";
import { Jumbotron, Grid, Col, Panel, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import ProfileList from "./ProfileList";
// import services from "../service";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const Profile = ({ history, profiles, match }) => {
  // console.log(profiles);
  let myProfo = profiles.filter(prfl => prfl._id === match.params.id)[0];

  let findProfiles = event => {
    event.preventDefault();
    history.push("/profiles");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal>
          <Panel>
            <Panel.Heading>
              <Panel.Title />
            </Panel.Heading>
            {myProfo && (
              <Panel.Body>
                UserName: {myProfo.nameUser}
                <br />
                Email: {myProfo.email}
                <br />
                Interests: {myProfo.interest}
              </Panel.Body>
            )}
          </Panel>
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
