'use client'
import React, { useEffect, useState } from "react";
import ProductCards from "../home/ProductCards";
import { useSelector } from "react-redux";

const SaveForlater = () => {
  const [savedProducts, setSavedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the Redux data
  const saveForLater = useSelector(state => state.saveForLaterSlice.saveForLater);

  // Load saved products from local storage on component mount
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

  return (
    <>
      <main className="container-fluid w-[90%] min-h-[100vh] bg-[#E8E8E8] rounded shadow flex flex-col justify-start gap-6 ">
        <div className="flex justify-between p-3 items-center">
          <h1 className="md:text-2xl font-bold text-base ">Save For Later Products</h1>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="container-fluid flex justify-evenly items-center gap-3 flex-wrap mb-3">
            {savedProducts.length > 0 ? (
              savedProducts.map((product) => 
                <ProductCards key={product.id} data={product} />
              )
            ) : (
              <p>No saved products found.</p>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default SaveForlater;
