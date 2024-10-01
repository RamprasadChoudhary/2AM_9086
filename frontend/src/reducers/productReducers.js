import { PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS
    ,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS
 } from "../constants/productConstants";


export const productListReducers = (state={products: [], loading: false, error: null},action) => {
    //console.log("Reducer called with action:", action);
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,products:[]}
        case PRODUCT_LIST_SUCCESS:
            //console.log("PRODUCT_LIST_SUCCESS: Payload received:", action.payload); // Log the payload
            return { 
                ...state, 
                loading: false, 
                products: action.payload // Make sure to correctly assign products here
            };
        case PRODUCT_LIST_FAIL:
            return {loading:false,error:action.paylaod}

        default:
            return state
    }
}

export const productDetailsReducers = (state={product:{ reviews: [] }, loading: false, error: null },action) => {
    console.log("Reducer called with action:", action);
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case PRODUCT_DETAILS_SUCCESS:
            console.log(action.payload)
            return { 
                ...state, 
                loading: false, 
                product: action.payload // Make sure to correctly assign products here
            };
        case PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.paylaod}

        default:
            return state
    }
}