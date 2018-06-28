import services from "../service";

let reviewID = 0;

const reviews = (state = [], action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      reviewID++;
      services.reviews.add({ ...action.payload });
      return [...state, { ...action.payload, _id: reviewID }];
    case "LOAD_REVIEW":
      // var profArray = [...action.payload];
      return action.payload;
    case "LOAD_ONE_REVIEW":
      var reviOne = { ...action.payload };
      return reviOne;
    // services.profiles.one(action.payload);
    // return [...state.filter(prfl => prfl._id === action.payload)];
    case "REMOVE_REVIEW":
      services.reviews.delete(action.payload);
      return [...state.filter(rvw => rvw._id !== action.payload)];
    default:
      return state;
  }
};

export default reviews;
