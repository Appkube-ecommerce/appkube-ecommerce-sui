// store.js
import { configureStore } from "@reduxjs/toolkit";

import productSlice from "../slices/addProductSlice";
import orderSlice from "../slices/orderSlice"; 

const store = configureStore({
  reducer: {
    productData: productSlice,
    ordersData: orderSlice,
    


// import productReducer from "../slices/addProductSlice";

// const store = configureStore({
//   reducer: {
//     product: productReducer,
// import productSlice from "../slices/addProductSlice";
// import customerReducer from '..slices/customerSlice';


// const store = configureStore({
//   reducer: {
//     productData: productSlice,
    //customer: customerReducer,
  },
});

export default store;


