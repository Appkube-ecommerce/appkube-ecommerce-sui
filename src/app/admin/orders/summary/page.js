"use client"
import { Provider } from 'react-redux';
import store from '@/components/redux/store/store';
import OrderInfo from '@/components/admin/orders/ordersummary';
import React from 'react';

const Page = () => {
  return (
  
    <Provider store={store}>
      <OrderInfo />
    </Provider>
  );
};

export default Page;
