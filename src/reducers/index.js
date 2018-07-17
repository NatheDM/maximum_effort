/****** <INITIAL IMPORT STATEMENTS> ******/
import { combineReducers } from "redux";
import interests from "./interests.js";
import profiles from "./userProfiles.js";
import reviews from "./userReviews.js";
import mapCenter from "./mapCenter.js";
import authen from "./logger.js";
/****** </INITIAL IMPORT STATEMENTS> ******/

export default combineReducers({
  interests,
  profiles,
  reviews,
  mapCenter,
  authen
});
