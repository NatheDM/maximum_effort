import React from "react";
import { Jumbotron, Grid, Col, Button, Panel } from "react-bootstrap";
import { connect } from "react-redux";
import Modal from "./Modal.js";
import Profile from "./Profile.js";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const Profiles = ({ history, profiles }) => {
  let goHome = event => {
    event.preventDefault();
    history.push("/area");
  };

  return (
    <Jumbotron>
      <Grid>
        {!profiles.length && <h3>no profiles found</h3>}
        {profiles.map(prfl => (
          <Col sm={4} key={prfl._id}>
            <Panel>
              <Panel.Heading>
                <Modal className="modal" name={prfl.nameUser}>
                  <Profile id={prfl._id} />
                </Modal>
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
            Area Map
          </Button>
        </Col>
        <Col smOffset={2} sm={6} />
      </Grid>
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Profiles);
