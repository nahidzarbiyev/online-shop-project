import { combineReducers } from "redux";

import categoriesReducer from '../reducers/categories.reducer'
import productReducer from '../reducers/product.reducer'
import authReducer from "./auth.reducer";
const rootReducer = combineReducers({

    category:categoriesReducer,
    product:productReducer,
    auth: authReducer
})


export default rootReducer