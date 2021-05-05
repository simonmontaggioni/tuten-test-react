import { SET_USER_EMAIL } from "../actions/ActionTypes";
import initialStore from "../store/store";

const Email = (email = initialStore, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {
        ...email,
        value: action.payload,
      };
    default:
      return email;
  }
};

export default Email;
