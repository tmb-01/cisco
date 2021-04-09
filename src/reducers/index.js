import { combineReducers } from "redux";
import userReducer from "./userRequestReducer";
import loginAdmin from "./loginReducer";
import shopsReducer from "./shopsReducer";
export default combineReducers({
  userRequest: userReducer,
  login: loginAdmin,
  shops: shopsReducer,
});
