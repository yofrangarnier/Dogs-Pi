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
  FIILTER_WEIGHT,
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
      const dogsTemp = state.dogsclean
      const aux2 = action.payload === "All Temperaments" ? dogsTemp : dogsTemp.filter((e) =>
        e.temperament?.includes(action.payload) ? e : null
      );
      return {
        ...state,
        dogs: aux2,
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
          default:
            return 0;
        }
      });
    
      return {
        ...state,
        dogs: orderAz,
      };
      case FIILTER_WEIGHT :
        let filterWeight = [...state.dogs];
     filterWeight = filterWeight.sort((a, b) => {
        switch (action.payload) {

         
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
    })
    return {
      dogs : filterWeight
    }
   
    
    case FILTER_DOGS:
      const createdFilter =
        action.payload === "dogs of the api"
          ? state.dogsclean.filter((e) => !e.createdInDb)
          : state.dogsclean.filter((e) => e.createdInDb);

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
