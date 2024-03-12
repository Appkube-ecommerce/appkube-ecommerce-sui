// Product.js

import React from 'react';
import Image from "next/image"

const Product = ({ product, index }) => {
  return (
    <div className="product-card">
      <Image src={product.image} alt={product.name} className="product-image" height={200} width={200} />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
      </div>
    </div>
  );
};

export default Product;