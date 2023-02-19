import { combineReducers } from "redux";

import categoriesReducer from '../reducers/categories.reducer'
import productReducer from '../reducers/product.reducer'
const rootReducer = combineReducers({

    category:categoriesReducer,
    product:productReducer
})


export default rootReducer