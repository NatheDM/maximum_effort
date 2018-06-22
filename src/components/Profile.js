import React from "react";
import { Jumbotron, Grid, Col, Panel, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import ProfileList from "./ProfileList";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const Profile = props => {
  let findProfiles = event => {
    event.preventDefault();
    props.history.push("/profiles");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal>
          <Panel>
            <Panel.Heading>
              <Panel.Title />
            </Panel.Heading>
            <Panel.Body>
              UserName:
              <br />
              Email:
              <br />
              Interests:
            </Panel.Body>
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
