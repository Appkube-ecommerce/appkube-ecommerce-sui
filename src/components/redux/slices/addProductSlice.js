// productSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createProduct: [], // Change this to an object if you want to store multiple form data
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCreateProduct: (state, action) => {
      state.createProduct = action.payload;
      // state.createProduct = [...state.createProduct, action.payload];
    },
  },
});

export const { setCreateProduct } = productSlice.actions;
export default productSlice.reducer;
