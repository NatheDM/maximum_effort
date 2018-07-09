const mapCenter = (state = {}, action) => {
  switch (action.type) {
    case "MAP_CENTER":
      return action;
    default:
      return state;
  }
};

export default mapCenter;
