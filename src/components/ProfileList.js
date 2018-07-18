import React from "react";
import { Jumbotron, Grid, Col, Button, Panel } from "react-bootstrap";
import { connect } from "react-redux";
import Modal from "./modals/Modal.js";
import Profile from "./Profile.js";
import HeaderIn from "./HeaderIn.js";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const Profiles = ({ history, profiles }) => {
  let goHome = event => {
    event.preventDefault();
    history.push("/area");
  };

  return (
    <div>
      <HeaderIn />
      <Jumbotron>
        <Grid>
          {!profiles.length && <h3>no profiles found</h3>}
          <Col smOffset={4} sm={8}>
            <h3 className="abouthead">Profile list.</h3>
            <Button
              type="submit"
              onClick={event => goHome(event)}
              className="rightnow"
            >
              Area Map
            </Button>
          </Col>
          <hr />
          <hr />
          {profiles.map(prfl => (
            <Col sm={4} key={prfl._id}>
              <Panel>
                <Panel.Heading>
                  <Panel.Title>
                    <Modal styler="modal" name={prfl.nameUser}>
                      <Profile id={prfl._id} />
                    </Modal>
                    <br />
                  </Panel.Title>
                </Panel.Heading>

                <Panel.Body>
                  {prfl.homeCity}, {prfl.homeState}
                </Panel.Body>
              </Panel>
            </Col>
          ))}
        </Grid>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps)(Profiles);
