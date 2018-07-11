import React from "react";
import { Jumbotron, Grid, Well } from "react-bootstrap";

const Home = props => (
  <Jumbotron>
    <Grid>
      <h2>Welcome to Tra-Local!</h2>
      <br />
      <Well>
        <h4>
          <ul>
            <li>Traveling, and want to know places the locals avoid?</li>
            <li>Know a particularly horrible location in your area?</li>
            <li>Want to meet up with a group for an event?</li>
          </ul>
          <div className="workdamn">Tra-Local is here for your needs!</div>
        </h4>
      </Well>
      <div className="workdamn">
        <br />"Prowl the World"
      </div>
    </Grid>
  </Jumbotron>
);

export default Home;
