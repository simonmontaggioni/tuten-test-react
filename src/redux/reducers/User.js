import { LOADING_TOKEN, SET_TOKEN, ERROR_TOKEN } from "../actions/ActionTypes";

const User = (state = null, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: { isLoading: false, errorMessage: null, value: action.payload },
      };
    case LOADING_TOKEN:
      return {
        ...state,
        token: { isLoading: true, errorMessage: null, value: null },
      };
    case ERROR_TOKEN:
      return {
        ...state,
        token: { isLoading: false, errorMessage: action.payload, value: null },
      };
    default:
      return state;
  }
};

export default User;
