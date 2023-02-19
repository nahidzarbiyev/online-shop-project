import { productConstants } from "../actions/constants";

const initialState = {

        products: [],
        priceRange: {},
        productsByPrice: {},
        pageRequest: false,
        page: {},
        error: null,
        productDetails: {},
        loading: true,
      };
      

export default (state= initialState, action)=>{
    switch (action.type) {
         case productConstants.GET_PRODUCT_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        priceRange: action.payload.priceRange,
        productsByPrice: {
          ...action.payload.productsByPrice,
        },
        loading:false
      };
    
     
    }
    return state
}