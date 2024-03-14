// store.js
import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../slices/addProductSlice';
import customerSlice from '../slices/addCustomerSlice';
import orderSlice from "../slices/orderSlice"; 

const store = configureStore({
  reducer: {
    productData: productSlice,
    customerSlice: customerSlice, 
  
  },
});

export default store;


