import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/addProductSlice";
// import customerSlice from "../slices/addCustomerSlice";

const store = configureStore({
  reducer: {
    productData: productSlice,
    // customer: customerReducer, 

  },
});

export default store;


