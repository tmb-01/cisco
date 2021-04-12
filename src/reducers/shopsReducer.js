/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_SHOPS, CURRENT_SHOP } from "../actions/types";

const INTIAL_STATE = {
  allShops: [],
  shop: null,
  error: null,
  loading: true,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SHOPS:
      return {
        ...state,
        allShops: action.payload,
        loading: false,
      };
    case CURRENT_SHOP:
      return {
        ...state,
        shop: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
