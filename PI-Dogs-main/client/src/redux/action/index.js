import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const CREATE_DOG = "CREATE_DOG";
export const DELETE_DOG = "DELETE_DOG";

export const getAllDogs = () => {
  return async function (dispatch) {
    const allDogs = await axios.get(`http://localhost:3001/dogs`);
    return dispatch({
      types: "GET_ALL_DOGS",
      payload: allDogs.data,
    });
  };
};
