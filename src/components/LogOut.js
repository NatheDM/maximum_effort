import React from "react";
import { Col } from "react-bootstrap";

const LoggOut = props => {
  let kill = event => {
    event.preventDefault();
    props.toggle();
  };

  let unauthen = event => {
    event.preventDefault();
    props.history.push("/home");
  };

  return (
    <div>
      <Col smOffset={11}>
        <button onClick={theThing => kill(theThing)}>&times;</button>
      </Col>

      <Col smOffset={1}>
        <h3>Confirm log out.</h3>
      </Col>

      <Col smOffset={2}>
        <button>
          <a href="/home">Log out.</a>
        </button>
      </Col>
    </div>
  );
};

export default LoggOut;
