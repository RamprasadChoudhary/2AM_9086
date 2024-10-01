import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom/client'


const rootElement = document.getElementById('root');

// Create a root with the new createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render your application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();