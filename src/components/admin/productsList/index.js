// ProductList.js

import React, { useState, useEffect } from 'react';
import Product from '../product'; // Replace with the correct path
import { fetchCategories } from '../../../Api/fetchingProducts'; // Adjust the path based on your API file


const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetchCategories(); // Assuming fetchCategories returns a list of products

          console.log(result)
          setProducts(result.data.listProducts.items);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
          <html>
            <head>
              <title>Product List</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                }
      
                .product-list {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: flex-start;
                  margin: 0;
                  padding: 0;
                }
      
                .product-card {
                  border: 1px solid #ddd;
                  margin: 10px;
                  padding: 10px;
                  text-align: center;
                  width: calc(33.33% - 20px);
                  box-sizing: border-box;
                }
      
                .product-image {
                  max-width: 60px;
                  max-height: 60px;
                  border: 1px solid #ddd;
                  border-radius: 5px;
                  margin-bottom: 10px;
                }
      
                .product-details {
                  margin-top: 10px;
                }
      
                .product-name {
                  font-size: 16px;
                  margin-bottom: 5px;
                }
      
                .product-price {
                  font-size: 14px;
                  color: green;
                }
              </style>
            </head>
            <body>
              <div class="product-list">
        `);
      
        products.forEach((product, index) => {
          printWindow.document.write(`
            <div class="product-card">
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">₹${product.price}</p>
              </div>
            </div>
          `);
        });
      
        printWindow.document.write(`
              </div>
            </body>
          </html>
        `);
      
        printWindow.document.close();
      
        // Wait for images to load before triggering the print
        printWindow.addEventListener('load', () => {
          printWindow.print();
        });
      };
      console.log(Product)
  
    return (
      <div className="product-list-container">
        <div className="product-list">
          
          {products.map((product, index) => (
            <Product key={product.id} product={product} index={index} />
          ))}
        </div>
  
        {/* Print button */}
        <button style={{ marginTop: '20px' }} onClick={handlePrint}>
          Print
        </button>
      </div>
    );
  };
  
  export default ProductList;
  