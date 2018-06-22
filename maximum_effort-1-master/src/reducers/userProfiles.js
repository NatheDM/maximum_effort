import services from "../service";

let profileID = 0;

const profiles = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      profileID++;
      services.profiles.add({ ...action.payload });
      return [...state, { ...action.payload, _id: profileID }];
    case "LOAD_PROFILE":
      /* if (action.payload.length > 0) {
        profileID = action.payload
          .map(prfl => prfl._id)
          .reduce((max, int) => (max = max > int ? max : int));
      } */

      var profArray = [...action.payload];
      console.log(typeof profArray);
      return action.payload;
    case "REMOVE_PROFILE":
      services.profiles.delete(action.payload);
      return [...state.filter(prfl => prfl._id !== action.payload)];
    default:
      return state;
  }
};

export default profiles;
