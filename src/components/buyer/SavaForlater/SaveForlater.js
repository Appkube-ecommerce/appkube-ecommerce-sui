


'use client'
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import Header from "../home/Header";
const SaveForlater = () => {


  const [savedProducts, setSavedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

//   // Get the Redux data
  const saveForLater = useSelector(state => state.saveForLaterSlice.saveForLater);

//   // Load saved products from local storage on component mount
  useEffect(() => {
    const savedProductsFromStorage = JSON.parse(localStorage.getItem('savedProducts'));
    if (savedProductsFromStorage) {
      setSavedProducts(savedProductsFromStorage);
    }
    setLoading(false); // Set loading to false once data is loaded
  }, []); // Empty dependency array to run only once on component mount

  // Store Redux data in local storage
  useEffect(() => {
    localStorage.setItem('savedProducts', JSON.stringify(saveForLater));
  }, [saveForLater]); // Update local storage when saveForLater changes
  const cards = savedProducts.map((product) => (
    <div className="m-10 flex justify-center gap-7 w-[1000px]">
      <div
        className="bg-white shadow-lg rounded-lg flex justify-evenly  "
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
            <button className="btn bg-red-600 text-white font-semibold p-3 rounded-lg w-[95%]" onClick={()=>removeToCart(product.id)}>Remove</button>
            <button className="btn bg-green-400 text-white font-semibold p-3 rounded-lg w-[95%]" onClick={()=>AddToCart(product.id)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  ));
  return(
    <>
  
   {cards}
   </>
  )
};

export default SaveForlater;
