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
        <Col smOffset={1} sm={10}>
          <Button type="submit" onClick={event => goHome(event)}>
            Area Map
          </Button>
          <h3>Profile list.</h3>
        </Col>
        {profiles.map(prfl => (
          <Col sm={4} key={prfl._id}>
            <Panel>
              <Panel.Heading>
                <Panel.Title>
                  <Modal className="modal" name={prfl.nameUser}>
                    <Profile id={prfl._id} />
                  </Modal>
                  <br />
                </Panel.Title>
              </Panel.Heading>

              <Panel.Body>
                Local to:<br />
                {prfl.homeCity}, {prfl.homeState}
              </Panel.Body>
            </Panel>
          </Col>
        ))}
      </Grid>
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Profiles);
