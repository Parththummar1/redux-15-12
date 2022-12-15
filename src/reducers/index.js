import { combineReducers } from "redux";
import userreducer from "./userreducer";

export default combineReducers({
    userdata : userreducer,
});