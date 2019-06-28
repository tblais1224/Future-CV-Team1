import {combineReducers} from "redux"
import authReducer from "./authReducer"
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer"
import resumeReducer from "./resumeReducer"

//this is the website store
export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer,
    resume: resumeReducer
})