import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import { createStore } from "redux";
// import { Action } from "./data/Action";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// const shopData = {
//   "categoires":["water"],
//   "products":[
//     {id:1, name:'papaya'}
//   ]
// }

// const dataTypes = {
//   CATEGORIES:'categoires',
//   PRODUCTS:'products'
// }

// const actionTypes = {
//   DATA_LOAD:'data_load'
// }

// const userReducer = (storeData, action) =>{
//   switch(action.type){
//     case actionTypes.DATA_LOAD:
//       return {...storeData,[action.payload.datatype]:action.payload.data}
//     default:
//       return storeData || {}
//   }
// }

// const store = createStore(userReducer)

// store.subscribe(()=>console.log(store.getState()))

// store.dispatch({
//   type:actionTypes.DATA_LOAD,
//   payload:{
//     datatype:dataTypes.PRODUCTS,
//     data: shopData[dataTypes.PRODUCTS]
//   }
// })
// store.dispatch(Action)