import { LOADING_TOKEN, SET_TOKEN, ERROR_TOKEN } from "../actions/ActionTypes";
import initialStore from "../store/store";

const Token = (state = initialStore, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        value: action.payload,
      };
    case LOADING_TOKEN:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        value: null,
      };
    case ERROR_TOKEN:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        value: null,
      };
    default:
      return state;
  }
};

export default Token;
