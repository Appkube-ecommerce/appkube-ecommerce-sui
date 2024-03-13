import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/addProductSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
