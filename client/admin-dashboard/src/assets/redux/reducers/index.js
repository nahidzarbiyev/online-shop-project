import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from './register.reducer'
const rootReducer = combineReducers({
    auth: authReducer,
    user:userReducer
})


export default rootReducer