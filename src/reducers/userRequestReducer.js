/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { ADD_REQUEST, GET_ALL_REQUEST } from "../actions/types";

const INTIAL_STATE = {
  userRequest: null,
  allUserRequests: [],
  error: null,
  loading: true,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        userRequest: action.payload,
        loading: false,
      };
    case GET_ALL_REQUEST:
      return {
        ...state,
        allUserRequests: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
