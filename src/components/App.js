/****** <INITIAL IMPORT STATEMENTS> ******/
import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header.js";
import Home from "./Home.js";
import Profiles from "./ProfileList.js";
import Area from "./Area.js";
import services from "../service";
import "./app.css";
/****** </INITIAL IMPORT STATEMENTS> ******/

/****** <CONSTANTS /> ******/
const mapDispatchToProps = dispatch => ({
  profoOnLoad: payload =>
    dispatch({
      type: "LOAD_PROFILE",
      payload
    }),

  revoOnLoad: payload =>
    dispatch({
      type: "LOAD_REVIEW",
      payload
    })
});

/****** <ROUTING THE PAGES /> ******/
const App = ({ profoOnLoad, revoOnLoad }) => {
  services.profiles.all().then(prfl => profoOnLoad(prfl));
  services.reviews.all().then(prfl => revoOnLoad(prfl));

  return (
    <div className="page">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles" component={Profiles} />
        <Route path="/area" component={Area} />
      </div>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
