import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  // FormControl,
  // ControlLabel,
  // Radio,
  Button
} from "react-bootstrap";
// import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
const Reviews = props => {
  let submitForm = event => {
    event.preventDefault();
    props.history.push("/area");
  };
  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>A review.</h3>
            </Col>
          </FormGroup>
          <Col smOffset={2} sm={6}>
            <Button type="submit">Go to map</Button>
          </Col>
        </Form>
        <ul>
          <ListItemLink to="/somewhere" />
          <ListItemLink to="/somewhere-else" />
        </ul>;
      </Grid>
    </Jumbotron>
  );
};

const ListItemLink = ({ to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? "active" : ""}>
        <Link to={to} {...rest} />
      </li>
    )}
  />
);
export default withRouter(Reviews);
