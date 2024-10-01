import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Import redux-thunk middleware
import { composeWithDevTools } from 'redux-devtools-extension';  // DevTools enhancer
import { productListReducers, productDetailsReducers } from './reducers/productReducers';

// Combine all your reducers here
const rootReducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
});

// Create an initial state (optional)
const initialState = {};

// Setup middleware (thunk for async actions)
const middleware = [thunk];

// Create the Redux store with the reducer, initial state, and middleware
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
