import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        userName: action.name,
      };

    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, userName: null };

    default:
      return state;
  }
};
