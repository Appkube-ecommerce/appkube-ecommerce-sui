"use client"
import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import AddProduct from '@/components/admin/products/addproduct/addpro';
import store from '@/components/redux/store/store'; // Import your Redux store

const Page = () => {
  return (
    <Provider store={store}> {/* Wrap your component tree with Provider */}
      <div>
        <AddProduct />
      </div>
    </Provider>
  );
};

export default Page;
