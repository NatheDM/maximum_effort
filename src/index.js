/****** <INITIAL IMPORT STATEMENTS> ******/
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index.js";
import "bootstrap/dist/css/bootstrap.css";
// import MapWithASearchBox from "./components/Maps";
/****** </INITIAL IMPORT STATEMENTS> ******/

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
