import { combineReducers } from "redux";
import userReducer from "./userRequestReducer";
import loginAdmin from "./loginReducer";
export default combineReducers({
  userRequest: userReducer,
  login: loginAdmin,
});
