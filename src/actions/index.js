import instance from "../api/instance";
import history from "../history";
import {
  ADD_REQUEST,
  GET_ALL_REQUEST,
  LOG_IN,
  GET_CURRENT_ADMIN,
  LOG_IN_ERROR,
  ADD_SHOPS,
  GET_ALL_SHOPS,
  UPDATE_SHOPS,
  DELETE_SHOP,
  CURRENT_SHOP,
} from "./types";

import setAuthToken from "../utils/setAuthToken";

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
    dispatch(currentAdmin());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const userLogin = (data) => async (dispatch) => {
  try {
    const res = await instance.post("/login-admin", data);
    dispatch({ type: LOG_IN, payload: res.data });
    dispatch(currentAdmin());
    history.push("/adminpanel");
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LOG_IN_ERROR, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: LOG_IN_ERROR, payload: null });
    }, 5000);
  }
};

export const currentAdmin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await instance.get("/get-admin");
    dispatch({ type: GET_CURRENT_ADMIN, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addShops = (data) => async (dispatch) => {
  try {
    const res = await instance.post("/add-point-of-sales", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: ADD_SHOPS });
    history.push("/admin-point-of-sales");
  } catch (error) {
    console.log(error);
  }
};
export const getAllShops = () => async (dispatch) => {
  try {
    const res = await instance.get("/get-all-shops");
    dispatch({ type: GET_ALL_SHOPS, payload: res.data.data.shops });
    dispatch(currentAdmin());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getCurrentShop = (id) => async (dispatch) => {
  try {
    const res = await instance.get(`/find-shop/${id}`);
    dispatch({ type: CURRENT_SHOP, payload: res.data.data.shop });
  } catch (error) {}
};

export const editShops = (data, id) => async (dispatch) => {
  try {
    const res = await instance.patch(`/update-shop/${id}`, data);
    dispatch({ type: UPDATE_SHOPS });
    history.push("/admin-point-of-sales");
  } catch (error) {
    console.log(error);
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
