
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    selectedOrder: null,
    ordersList: [], 
  },
  reducers: {
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    saveOrdersList: (state, action) => {
      state.ordersList = action.payload;
    },
  },
});

export const { setSelectedOrder, saveOrdersList } = orderSlice.actions;
export default orderSlice.reducer;
