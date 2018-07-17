const authen = (state = {}, action) => {
  switch (action.type) {
    case "STORE_TOKEN":
      return action;
    default:
      return state;
  }
};

export default authen;
