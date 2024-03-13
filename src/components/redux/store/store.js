import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/addProductSlice";
import customerReducer from '..slices/customerSlice';


const store = configureStore({
  reducer: {
    productData: productSlice,
    customer: customerReducer, 
  },
});
export default store;


