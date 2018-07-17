var logObj = {
  loggedIn: false,
  userID: 0
};

var logger = (state = logObj, action) => {
  return state;
};

export default logger;
