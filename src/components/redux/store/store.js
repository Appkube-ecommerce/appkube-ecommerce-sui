import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import productReducer from "../slices/addProductSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
=======
import productSlice from "../slices/addProductSlice";
import customerReducer from '..slices/customerSlice';


const store = configureStore({
  reducer: {
    productData: productSlice,
    customer: customerReducer, 
>>>>>>> 1dd8925ea54216747dde5aecc49417d1933dbc12
  },
});

export default store;


