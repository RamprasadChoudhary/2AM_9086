import { thunk } from 'redux-thunk';

import {createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducers } from './reducers/productReducers';

const reducer = combineReducers({
    productList:productListReducers,
})
const initailState = {}
const middleware = [thunk]
const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;