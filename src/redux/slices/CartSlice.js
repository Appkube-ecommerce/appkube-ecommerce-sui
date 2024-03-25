import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    cart: [],
  };
  const cartDetails = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        console.log('dispatching cart items',action.payload)
        state.cart = action.payload;
        console.log('payload',action.payload) 
          },
    },
  });
  
  export const { addToCart } = cartItems.actions;
  export default cartItems.reducer;
  