const initialState = {
  dogs: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ALL":
      return {
        ...state,
        dogs: action.payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
