// Product.js

import React from 'react';
import Image from 'next/image';

const Product = ({ product, index }) => {
  return (
    <div className="product-card">
      <Image
        src={product.image}
        alt={product.name}
        className="product-image"
        height={200} // Adjust the height as needed
        width={200}  // Adjust the width as needed
      />
      <div className="product-details ml-5">
        <h3 className="product-name ">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <p className="product-unit">{product.unit}</p>
      </div>
    </div>
  );
};

export default Product;
