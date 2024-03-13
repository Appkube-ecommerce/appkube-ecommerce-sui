// customerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createProduct } from '@/Api/createProducts';    // Import your createProduct function

export const createCustomer = createAsyncThunk(
  'customer/create',
  async ({ name, phone }) => {
    const response = await createCustomer(name, phone);
    return response.data; // Assuming your API returns data after creating the customer
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
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
