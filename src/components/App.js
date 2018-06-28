/****** <INITIAL IMPORT STATEMENTS> ******/
import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header.js";
import Home from "./Home.js";
import SignUp from "./SignUp.js";
import LogIn from "./LogIn.js";
import User from "./User.js";
import Profiles from "./ProfileList.js";
import Area from "./Area.js";
import Reviews from "./Reviews.js";
import Review from "./Review.js";
import Profile from "./Profile.js";
import WriteReview from "./WriteReview.js";
import services from "../service";
// import MapWithASearchBox from "./Maps";
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
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/user" component={User} />
        <Route exact path="/profiles" component={Profiles} />
        <Route path="/profiles/:id" component={Profile} />
        <Route path="/area" component={Area} />
        <Route exact path="/reviews" component={Reviews} />
        <Route path="/reviews/:id" component={Review} />
        <Route path="/writereview" component={WriteReview} />
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
