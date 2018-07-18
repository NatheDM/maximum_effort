import React from "react";
import { Col, Form } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  reviews: state.reviews
});

const Review = ({ history, reviews, match, toggle, id }) => {
  let myRevo = reviews.filter(rvw => rvw._id === id)[0];

  let kill = theThing => {
    theThing.preventDefault();
    toggle();
  };

  return (
    <Form horizontal>
      {myRevo && (
        <div>
          <Col smOffset={11}>
            <button onClick={theThing => kill(theThing)}>&times;</button>
          </Col>

          <h2 className="abouthead">
            {myRevo.nameLocation}, {myRevo.locStreet}, {myRevo.locCity},{" "}
            {myRevo.locState} {myRevo.locZip}{" "}
          </h2>

          <h3 className="aboutbody">
            "{myRevo.reviewBody}"<br />
            <br />~{myRevo.nameUser}
          </h3>
        </div>
      )}
    </Form>
  );
};

export default connect(mapStateToProps)(Review);
