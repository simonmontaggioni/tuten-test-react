import { SET_TOKEN } from "../actions/ActionTypes";

const User = (state = null, action) => {
  switch (action.type) {
    case SET_TOKEN:
      console.log(action.payload);
      return {
        // ...state,
        // user: action.payload,
        state,
      };
    default:
      return state;
  }
};

export default User;
