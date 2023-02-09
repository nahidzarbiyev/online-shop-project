import { registerConstants } from "../actions/constants";

const initialState = {
    error:null,
    message:'',
    loading:false
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case registerConstants.REGISTER_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
            case registerConstants.REGISTER_SUCCESS:
                state = {
                    ...state,
                    loading:false,
                    message:action.payload.message
                }
                break
                case registerConstants.REGISTER_FAILED:
                    state={
                        ...state,
                        loading:false,
                        message:action.payload.error
                    }
     
    }
    return state
}