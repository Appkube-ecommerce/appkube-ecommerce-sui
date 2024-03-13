import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/addProductSlice";

const store = configureStore({
  reducer: {
    productData: productSlice, 
  },
});
export default store;
