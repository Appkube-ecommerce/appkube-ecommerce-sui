"use client"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import admincartSlice from "@/redux/slices/admincartSlice";
import { remove } from "@/redux/slices/admincartSlice";
const AdminCartPage = () => {
  const dispatch = useDispatch();
  const removeToCart = (id)=>{
    dispatch(remove(id));
   }
  const items = useSelector((state) => state.adminCartDetails.adminCart);
  const cards = items.map((product) => (
    <div className="m-10 flex justify-center gap-7">
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-evenly  "
        style={{ width: "60%" }}
      >
        <figure className="flex-shrink-0 p-5 rounded-lg pl-10">
          <img
            src={product.image}
            className="w-[100%] h-48 object-cover p-3"
            alt="Shoes"
          />
        </figure>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl font-bold text-gray-600">INR: ₹{product.price}</p>
            <h2 className="text-xl font-lg mb-2"><b>Category :</b> {product.category}</h2>
            <h2 className="text-xl font-lg mb-2"><b>Unit available :</b> {product.unit}</h2>
          </div>
          <div className="mt-4 flex justify-end items-end">
            <button className="btn bg-red-600 text-white font-semibold p-3 rounded-lg w-[95%]" onClick={()=>removeToCart(product.id)}>Remove Item</button>
          </div>
        </div>
      </div>
    </div>
  ));
  return <div>{cards}</div>;
};

export default AdminCartPage;
