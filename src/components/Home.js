import React from "react";
import {
  Jumbotron,
  Grid,
  //Button,
  Well
} from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-map-react";

const Home = props => (
  <Jumbotron>
    <Grid>
      <h1>Welcome to Maximum_Effort!</h1>
      <Well>
        <ul>
          <li>Traveling somewhere and want the inside scoop on locales?</li>
          <li>Know a particularly good location in your area?</li>
          <li>Want to meet up with a group for an event?</li>
        </ul>
      </Well>
      <p>Maximum_Effort is here for your needs!</p>
    </Grid>
  </Jumbotron>
);

export default Home;
