
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/addProductSlice";
import orderSlice from "../slices/orderSlice"; 

const store = configureStore({
  reducer: {
    productData: productSlice,
    ordersData: orderSlice,
    customer: customerReducer, 


  },
});

export default store;


