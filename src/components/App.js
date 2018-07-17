/****** <INITIAL IMPORT STATEMENTS> ******/
import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import HeaderIn from "./HeaderIn.js";
import HeaderOut from "./HeaderOut.js";
import Home from "./Home.js";
import Profiles from "./ProfileList.js";
import Area from "./Area.js";
import services from "../service";
import "./app.css";
/****** </INITIAL IMPORT STATEMENTS> ******/

/****** <CONSTANTS /> ******/
const mapStateToProps = state => ({
  authen: state.authen
});

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
const App = ({ profoOnLoad, revoOnLoad, authen }) => {
  services.profiles.all().then(prfl => profoOnLoad(prfl));
  services.reviews.all().then(prfl => revoOnLoad(prfl));

  let isLoggedIn = authen.payload;
  console.log("Is logged in: " + isLoggedIn);

  return (
    <div className="page">
      {/* <HeaderOut /> */}
      <div className="content">
        <Route exact path="/home" component={Home} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/area" component={Area} />
      </div>
    </div>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
