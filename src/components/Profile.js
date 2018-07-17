import React from "react";
import { Col, Form, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const Profile = ({ history, profiles, match, toggle, id }) => {
  let myProfo = profiles.filter(prfl => prfl._id === id)[0];

  let kill = theThing => {
    theThing.preventDefault();
    toggle();
  };

  return (
    <Form horizontal>
      {myProfo && (
        <div>
          <Col smOffset={11}>
            <button onClick={theThing => kill(theThing)}>&times;</button>
          </Col>
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
          </FormGroup>
        </div>
      )}
    </Form>
  );
};

export default connect(mapStateToProps)(Profile);
