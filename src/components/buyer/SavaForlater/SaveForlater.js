'use client'
import React, { useEffect, useState } from "react";
import { remove } from "@/redux/slices/saveForLaterSlice";
import { useSelector, useDispatch } from "react-redux";
import Header from "../home/Header";
import Image from 'next/image';
import { addToCart } from "@/redux/slices/CartSlice";

const SaveForlater = () => {
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const cartAdd = (data) => {
    dispatch(addToCart(data));
  };

  const saveForLater = useSelector(state => state.saveForLaterSlice.saveForLater);

  const cards = saveForLater.map((product) => (

    <div className="m-10 flex justify-center gap-7 w-[100%]" key={product.id}>
      <div
        className="bg-white shadow-lg rounded-lg flex justify-evenly  "
        style={{ width: "100%" }}
      >
        <figure className="flex-shrink-0 p-5 rounded-lg pl-10">
          <Image
            src={product.image}
            className="w-[100%] h-48 object-cover p-3"
            alt="product"
          />
        </figure>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl font-bold text-gray-600">INR: ₹{product.price}</p>
            <h2 className="text-xl font-lg mb-2"><b>Category :</b> {product.category}</h2>
            <h2 className="text-xl font-lg mb-2"><b>Unit available :</b> {product.unit}</h2>
          </div>
          <div className="mt-4 flex justify-end  gap-4 items-end">
            <button className="btn bg-red-600 text-white font-semibold p-3 rounded-lg" onClick={()=>removeToCart(product.id)}>Remove</button>
            <button className="btn bg-green-500 text-white font-semibold p-3 rounded-lg" onClick={()=>cartAdd(product)}>Add To Cart</button>

          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>


   {cards}
   </>
  )

};

export default SaveForlater;
