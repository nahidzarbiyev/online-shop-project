import { combineReducers } from "redux";

import categoriesReducer from '../reducers/categories.reducer'
import productReducer from '../reducers/product.reducer'
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import userReducer from "./user.reducer";
const rootReducer = combineReducers({

    category:categoriesReducer,
    product:productReducer,
    auth: authReducer,
    cart: cartReducer,
    user:userReducer
})


export default rootReducer