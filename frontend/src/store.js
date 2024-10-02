import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Import redux-thunk middleware
import { composeWithDevTools } from 'redux-devtools-extension';  // DevTools enhancer
import { productListReducers, productDetailsReducers } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducers } from './reducers/userReducers';



// Combine all your reducers here
const rootReducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart:cartReducer,
  userLogin:userLoginReducers,
});


const cartItemsFromStorage = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')): []

const UserInfoFromStorage = localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')): null
// Create an initial state (optional)
const initialState = {
  cart:{cartItems:cartItemsFromStorage},
  userLogin:{userInfo:UserInfoFromStorage}
};

// Setup middleware (thunk for async actions)
const middleware = [thunk];

// Create the Redux store with the reducer, initial state, and middleware
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
