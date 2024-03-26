import React from "react";


import PaymentOption from "@/components/buyer/Checkout/PaymentOption/PaymentOption";
import Timeline from "@/components/buyer/Checkout/PaymentOption/timeline";
const Order = () => {
  return (
    <div>
      <Timeline/>
     <PaymentOption/>
    </div>
  );
};

export default Order;
