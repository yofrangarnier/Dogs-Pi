import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const CREATE_DOG = "CREATE_DOG";
export const DELETE_DOG = "DELETE_DOG";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const GET_BREED_NAME = "GET_BREED_NAME";
export const FILTER_DOGS = "FILTER_DOGS";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const ORDER = "ORDER";
export const CLEAN = "CLEAN";

export const getAllDogs = () => async (dispatch) => {
  await axios.get("http://localhost:3001/dogs").then((response) => {
    dispatch({
      type: GET_ALL_DOGS,
      payload: response.data,
    });
  });
};
export const getAllTemperament = () => {
  return async function (dispatch) {
    return await axios
      .get("http://localhost:3001/temperaments")
      .then((response) => {
        dispatch({
          type: GET_TEMPERAMENT,
          payload: response.data,
        });
      });
  };
};

export const getBreedName = (name) => async (dispatch) => {
  await axios
    .get(`http://localhost:3001/dogs?name=` + name)
    .then((response) => {
      dispatch({
        type: "GET_BREED_NAME",
        payload: response.data,
      });
    });
};
export const getDogsId = (id) => {
  return async function (dispatch) {
    await axios.get(`http://localhost:3001/dogs/${id}`).then((response) => {
      dispatch({
        type: GET_DOG_DETAILS,
        payload: response.data,
      });
    });
  };
};
export const createDogs = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/dogs", payload);
      return dispatch({
        type: "CREATE_DOG",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteDog = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/dogs${id}`);
      return dispatch({
        type: "DELETE_DOG",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const filterDogs = (payload) => {
  return {
    type: FILTER_DOGS,
    payload,
  };
};

export const filterTemperament = (payload) => {
  return {
    type: FILTER_TEMPERAMENT,
    payload,
  };
};
export const orderBy = (payload) => {
  return {
    type: ORDER,
    payload,
  };
};
export const clean = (payload) => {
  return {
    type: CLEAN,
    payload,
  };
};
