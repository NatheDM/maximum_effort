import services from "../service";

let profileID = 0;

const profiles = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      profileID++;
      services.profiles.add({ ...action.payload });
      return [...state, { ...action.payload, _id: profileID }];
    case "LOAD_PROFILE":
      // var profArray = [...action.payload];
      return action.payload;
    case "LOAD_ONE_PROFILE":
      var profOne = { ...action.payload };
      return profOne;
    // services.profiles.one(action.payload);
    // return [...state.filter(prfl => prfl._id === action.payload)];
    case "REMOVE_PROFILE":
      services.profiles.delete(action.payload);
      return [...state.filter(prfl => prfl._id !== action.payload)];
    default:
      return state;
  }
};

export default profiles;
