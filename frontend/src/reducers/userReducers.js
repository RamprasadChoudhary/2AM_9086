import { USER_LOGIN_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGOUT } from "../constants/userConstants";

export const userLoginReducers = (state={},action) => {
    
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            //console.log("PRODUCT_LIST_SUCCESS: Payload received:", action.payload); // Log the payload
            return { 
                ...state, 
                loading: false, 
                userInfo: action.payload // Make sure to correctly assign products here
            };
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.paylaod}
        
        case USER_LOGOUT:
            return { }
        default:
            return state
    }
}