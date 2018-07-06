import React from "react";
import { Jumbotron, Grid, Col, Form, FormGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const Profile = ({ history, profiles, match, toggle, id }) => {
  let myProfo = profiles.filter(prfl => prfl._id === id)[0];
  let closeModal = event => {
    event.preventDefault();

    toggle();
  };

  return (
    <Jumbotron>
      {myProfo && (
        <Grid>
          <Form horizontal>
            <FormGroup>
              <Col smOffset={2} sm={6}>
                <div>
                  UserName: {myProfo.nameUser}
                  <br />
                  Email: <a href={`mailto:${myProfo.email}`}>{myProfo.email}</a>
                  <br />
                  Interests: {myProfo.interest}{" "}
                </div>
              </Col>
              <Col smOffset={2} sm={6}>
                <Button type="submit" onClick={event => closeModal(event)}>
                  Close
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Grid>
      )}
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Profile);
