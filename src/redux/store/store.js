// store.js
import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../slices/addProductSlice';
import customerSlice from '../slices/addCustomerSlice';
import orderSlice from "../slices/orderSlice"; 
import allProducts from "../slices/products"; 
const store = configureStore({
  reducer: {
    productData: productSlice,
    customerSlice: customerSlice, 
    ordersData: orderSlice,
    allProducts :allProducts
  },
});

export default store;


