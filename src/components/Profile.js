import React from "react";
import { Jumbotron, Grid, Col, Panel, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import ProfileList from "./ProfileList";
// import services from "../service";
// import createFragment from "react-addons-create-fragment";

const mapStateToProps = state => ({
  profiles: state.profiles,
  getOneProfile: state.getOneProfile
});

const mapDispatchToProps = dispatch => ({
  getOneProfile: payload =>
    dispatch({
      type: "LOAD_ONE_PROFILE",
      payload
    })
});

/* class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profo: props.profiles.filter(
        prfl => prfl._id === props.match.params.id
      )[0],

      findProfiles: event => {
        event.preventDefault();
        this.history.push("/profiles");
      }
    };
  }

  render() {
    return (
      <Jumbotron>
        <Grid>
          <Form horizontal>
            <Panel>
              <Panel.Heading>
                <Panel.Title />
              </Panel.Heading>
              <Panel.Body>
                UserName: {this.state.profo}
                <br />
                Email: {this.state.profo}
                <br />
                Interests: {this.state.profo}
              </Panel.Body>
            </Panel>
            <Col smOffset={2} sm={6}>
              <Button type="submit" onClick={event => this.findProfiles(event)}>
                Find profiles
              </Button>
            </Col>
          </Form>
        </Grid>
      </Jumbotron>
    );
  }
} */

const Profile = ({ history, profiles, getOneProfile, match }) => {
  let myProfo = profiles.filter(prfl => prfl._id === match.params.id)[0];

  //console.log(myProfo.nameUser);

  let findProfiles = event => {
    event.preventDefault();
    history.push("/profiles");
  };

  // console.log(getOneProfile);

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal>
          <Panel>
            <Panel.Heading>
              <Panel.Title />
            </Panel.Heading>
            <Panel.Body>
              UserName: {myProfo.nameUser}
              <br />
              Email: {myProfo.email}
              <br />
              Interests: {myProfo.interest}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
