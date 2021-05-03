import {
  LOADING_BOOKINGS,
  SET_BOOKINGS,
  ERROR_BOOKINGS,
} from "../actions/ActionTypes";
import initialStore from "../store/store";

const Bookings = (state = initialStore, action) => {
  switch (action.type) {
    case SET_BOOKINGS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        data: action.payload,
      };
    case LOADING_BOOKINGS:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        data: null,
      };
    case ERROR_BOOKINGS:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

export default Bookings;
