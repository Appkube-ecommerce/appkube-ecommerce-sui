'use client'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSave } from "@/redux/slices/saveForLaterSlice";
import { addToCart } from "@/redux/slices/CartSlice";
import Header from "../home/Header";
import Image from 'next/image';
import empty from "../../admin/images/empty.jpg"
import Link from "next/link"
import { ShoppingCartOutlined } from '@ant-design/icons'; // Import the Ant Design icon

const SaveForlater = () => {
  const dispatch = useDispatch();
  const saveForLater = useSelector(state => state.saveForLaterSlice.saveForLater);

  const removeFromSave = (id) => {
    dispatch(removeSave(id));
  };

  const cartAdd = (data) => {
    dispatch(addToCart(data));
  };

  // Render icon and text when cart is empty
  if (saveForLater.length === 0) {
    return (
      <div className="empty-cart mt-5 mb-5">
        <Image src={empty} height={500} width={500} alt="image" />
        <div className="flex gap-5">
          <h1 className="text-lg font-bold">Add some items to save for later</h1>
          <Link href="/">
            <button style={{ marginTop: '16px', height: '40px', borderRadius: '20px' }}>
              Back Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const cards = saveForLater.map((product) => (
    <div className="m-10 flex justify-center gap-7 w-[100%]" key={product.id}>
      <div className="bg-slate-50 shadow-lg rounded-lg flex justify-evenly" style={{ width: "100%" }}>
        <figure className="flex-shrink-0 p-5 rounded-lg pl-10">
          <Image src={product.image} className="w-[100%] h-48 object-cover p-3" alt="product" width={100} height={100} />
        </figure>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mt-8">{product.name}</h2>
            <p className="text-base font-bold text-gray-600">INR: ₹{product.price}</p>
            <h2 className="text-base font-lg "><b>Category :</b> {product.category}</h2>
            <h2 className="text-base font-lg "><b>Unit available :</b> {product.unit}</h2>
          </div>
          <div className="flex justify-center gap-3 item-center mb-6">
            <button className="btn bg-red-500 font-semibold p-1 text-xs text-white rounded-lg" onClick={() => removeFromSave(product.id)}>Remove</button>
            <button className="btn bg-green-500 font-semibold p-1 text-xs text-white rounded-lg" onClick={() => cartAdd(product)}>Add To Cart</button>
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
