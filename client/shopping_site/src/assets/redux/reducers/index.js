import { combineReducers } from "redux";

import categoriesReducer from '../reducers/categories.reducer'
const rootReducer = combineReducers({

    category:categoriesReducer,
})


export default rootReducer