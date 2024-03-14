import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD:src/components/redux/slices/addCustomerSlice.js
import { createCustomers } from '../../../Api/Addingcustomer';    
=======
import { createCustomers } from '../../Api/Addingcustomer';    
>>>>>>> 8f877a2628e49fe69a332e24dcc127aa43157850:src/redux/slices/addCustomerSlice.js

export const createCustomer = createAsyncThunk(
  'customer/addcustomer',
  async ({ name, phone }) => {
    const response = await createCustomers(name, phone);
    return response.data; // Assuming your API returns data after creating the customer
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
      console.log('added user in slice',action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.status = 'idle';
        // Handle success or update state if needed
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message; // Handle error or update state if needed
      });
  },
});

export default customerSlice.reducer;
export const { addCustomer} = customerSlice.actions;