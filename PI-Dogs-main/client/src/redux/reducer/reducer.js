import {
  CREATE_DOG,
  FILTER_TEMPERAMENT,
  GET_ALL_DOGS,
  GET_BREED_NAME,
  GET_TEMPERAMENT,
  ORDER,
  FILTER_DOGS,
  GET_DOG_DETAILS,
  DELETE_DOG,
  CLEAN,
} from "../action/actions";
import { A_Z, Z_A, WEIGHT_MAX, WEIGHT_MIN } from "../../constante/A-Z";

const initialState = {
  dogs: [],
  dogsclean: [],
  dogsDetail: [],
  temperaments: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        dogsclean: action.payload,
      };
    case GET_BREED_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_TEMPERAMENT:
      return {
        ...state,
        temperaments: action.payload,
      };
    case CREATE_DOG:
      return {
        ...state,
      };
    case DELETE_DOG:
      return {
        ...state,
      };
    case GET_DOG_DETAILS:
      return {
        ...state,
        dogsDetail: action.payload,
      };

    case FILTER_TEMPERAMENT:
      const dogsTemp = state.dogsclean.filter((d) =>
        d.temperament?.includes(action.payload) ? d : null
      );
      return {
        ...state,
        dogs: dogsTemp,
      };

    case ORDER:
      let orderAz = [...state.dogs];
      orderAz = orderAz.sort((a, b) => {
        switch (action.payload) {
          case A_Z:
            if (a.name < b.name) {
              return -1;
            } else return 1;
          case Z_A:
            if (a.name > b.name) {
              return -1;
            } else return 1;
          case WEIGHT_MAX:
            if (a.max_weight > b.max_weight) {
              return -1;
            } else return 1;
          case WEIGHT_MIN:
            if (a.min_weight < b.min_weight) {
              return -1;
            } else return 1;
          default:
            return 0;
        }
      });
      return {
        ...state,
        dogs: orderAz,
      };
    case FILTER_DOGS:
      const createdFilter =
        action.payload === "dogs of the api"
          ? state.dogsclean.filter((d) => !d.createdInDb)
          : state.dogsclean.filter((d) => d.createdInDb);

      return {
        ...state,
        dogs: action.payload === "all Dogs" ? state.dogsclean : createdFilter,
      };
    case CLEAN:
      return {
        ...state,
        dogsDetail: [],
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
