"use client"
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null); // State to store the product details

  // Fetch product details based on the product ID
  useEffect(() => {
    // Check if the product ID is available
    if (productId) {
      // Fetch product details using the product ID
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`/product/${id}`); // Example API endpoint to fetch product details
          setProduct(response.data); // Set the product details in the state
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProduct(); // Call the fetchProduct function
    }
  }, [productId]); // Trigger the effect when the product ID changes

  // Render loading state while fetching product details
  if (!product) {
    return <div>Loading...</div>;
  }

  // Once product details are fetched, render the product details
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductPage;
