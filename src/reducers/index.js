import { combineReducers } from "redux";
import countReducer from "./countReducer";
import loginReducer from "./loginReducer";


//reducer들의 묶음 = combineReducers
export default combineReducers({
    countReducer: countReducer,
    loginReducer: loginReducer
})