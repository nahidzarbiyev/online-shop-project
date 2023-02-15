import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from './register.reducer'
import productReducer from '../reducers/product.reducer'
// import orderReducer from '../reducers/order.reducer'
import categoriesReducer from '../reducers/categories.reducer'
const rootReducer = combineReducers({
    auth: authReducer,
    user:userReducer,
    // order:orderReducer,
    category:categoriesReducer,
    product:productReducer
})


export default rootReducer