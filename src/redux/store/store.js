// store.js
import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD:src/redux/store/store.js
import productSlice from '../slices/addProductSlice';
import customerSlice from '../slices/addCustomerSlice';
=======
>>>>>>> b80c80d63e3d4e0584b1497f57cb9e8c3a0a0e65:src/components/redux/store/store.js

import productSlice from "../slices/addProductSlice";
import orderSlice from "../slices/orderSlice"; 

const store = configureStore({
  reducer: {
    productData: productSlice,
<<<<<<< HEAD:src/redux/store/store.js
    customerSlice: customerSlice, 
  
=======
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
    customer: customerReducer,
>>>>>>> b80c80d63e3d4e0584b1497f57cb9e8c3a0a0e65:src/components/redux/store/store.js
  },
});

export default store;


