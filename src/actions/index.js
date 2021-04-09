import instance from "../api/instance";
import history from "../history";
import {
  ADD_REQUEST,
  GET_ALL_REQUEST,
  LOG_IN,
  LOG_IN_ERROR,
  GET_ALL_SHOPS,
  DELETE_SHOP,
} from "./types";

export const addRequest = (data) => async (dispatch) => {
  try {
    const res = await instance.post("/add-request", data);
    dispatch({ type: ADD_REQUEST, payload: res.data });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const getAllRequest = () => async (dispatch) => {
  try {
    const res = await instance.get("/all-requests");
    dispatch({ type: GET_ALL_REQUEST, payload: res.data.data.userRequests });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const getAllShops = () => async (dispatch) => {
  try {
    const res = await instance.get("/get-all-shops");
    dispatch({ type: GET_ALL_SHOPS, payload: res.data.data.shops });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const userLogin = (data) => async (dispatch) => {
  try {
    const res = await instance.post("/login-admin", data);
    dispatch({ type: LOG_IN, payload: res.data });
    history.push("/adminpanel");
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LOG_IN_ERROR, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: LOG_IN_ERROR, payload: null });
    }, 5000);
  }
};

export const deleteShop = (id) => async (dispatch) => {
  try {
    const res = await instance.delete(`/delete-shop/${id}`);
    dispatch({ type: DELETE_SHOP, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
