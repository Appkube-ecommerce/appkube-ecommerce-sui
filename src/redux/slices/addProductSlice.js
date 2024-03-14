import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createProduct: [],
};

const productSlice = createSlice({
  name: "product", // Change slice name if needed
  initialState,
  reducers: {
    setCreateProduct: (state, action) => {
      state.createProduct = action.payload; // Assign payload directly
    },
  },
});

export const { setCreateProduct } = productSlice.actions;
export default productSlice.reducer;
