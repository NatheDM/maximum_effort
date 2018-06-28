/****** <INITIAL IMPORT STATEMENTS> ******/
import { combineReducers } from "redux";
import interests from "./interests.js";
import profiles from "./userProfiles.js";
import reviews from "./userReviews.js";
/****** </INITIAL IMPORT STATEMENTS> ******/

export default combineReducers({
  interests,
  profiles,
  reviews
});
