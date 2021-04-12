/* eslint-disable import/no-anonymous-default-export */
import { LOG_IN, LOG_IN_ERROR, GET_CURRENT_ADMIN } from "../actions/types";

const INTIAL_STATE = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticate: false,
  isLoading: true,
  error: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: localStorage.getItem("token"),
        user: action.payload,
        isAuthenticate: true,
        isLoading: false,
      };

    case LOG_IN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        error: action.payload,
      };
    case GET_CURRENT_ADMIN:
      return {
        ...state,
        isAuthenticate: true,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};
