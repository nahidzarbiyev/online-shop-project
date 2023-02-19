import { productConstants } from "../actions/constants";

const initialState = {
    products:[],
    productsByPrice:{
        under3h:[],
        under4h:[],
        under5h:[],
        under8h:[],
        under1k:[],
        under15h:[],
        under2k:[],
        under25h:[],
        under3k:[],
    },
}


export default (state= initialState, action)=>{
    switch (action.type) {
        case productConstants.GET_PRODUCT_BY_SLUG:
            state = {
                ...state,
                products:action.payload.products,
                productsByPrice:{
                    ...action.payload.productsPrice
                }
            }
        
    
     
    }
    return state
}