import { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "@/redux/slices/CartSlice";
import { addToSaveForLater } from "@/redux/slices/saveForLaterSlice";
import { notification } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'; // Import the Ant Design icon

const Card = () => {
  const dispatch = useDispatch();

  // Accessing cart items from Redux store
  const items = useSelector((state) => state.cartDetails.cart);

  // State to store the quantity for each product item
  const [productCounts, setProductCounts] = useState({});

  const updateCount = (id, newCount) => {
    // Ensure newCount is not less than 0
    if (newCount < 0) {
      newCount = 0;
    }
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: newCount
    }));
  };
  

  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const saveForLater = (data) => {
    dispatch(addToSaveForLater(data));
    dispatch(remove(data.id));
    notification.success({
      message: 'Product Saved For Later Successfully!',
    });
  };

  // Render icon and text when cart is empty
  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <ShoppingCartOutlined style={{ fontSize: '500px', color: '#ccc' }} />
        <p>Add some items into the cart</p>
      </div>
    );
  }

  // Mapping through cart items to render cards
  const cards = items.map((product) => (
    <div key={product.id} className="card1 mt-4">
      <h3 className="inline font-semibold">{product.category}</h3>
      <div className="w-10 border border-orange-500 bg-orange-500 mt-2"></div>
      <div className="border border-1 border-[rgba(173,213,102)] rounded-md mt-5">
        <h1 className="bg-gradient-to-r from-[rgba(255,255,255)] to-[rgba(173,213,102)] text-[#476F00] h-10 p-2">
          Har Din Sasta!
        </h1>

        <div className="flex gap-4 mt-2 mx-10">
          <div className="flex">
            <Image src={product.image} width={200} height={90} className="pt-5" alt="Product image" />
            <div className="flex flex-col justify-center text-lg py-12 pl-14">
              <h2>{product.name}</h2>
              <b>₹{product.price}</b> &nbsp;
              <p className="line-through inline-block text-[#909090]">₹{product.price * 2}</p>
            </div>
          </div>

          <section className="flex w-[50%] gap-14">
            <div className="py-14 pl-14 pr-0">
              <div className="flex hover:shadow-xl shadow-black border border-stone-400 hover:border-2 gap-10 w-[100%] px-3 rounded-md">
                <button
                  className="hover:bg-red-500 w-10 h-7 mt-1.5 rounded-md"
                  onClick={() => updateCount(product.id, (productCounts[product.id] || 0) - 1)}
                >
                  -
                </button>
                <h2 className="m-2">{productCounts[product.id] || 0}</h2>
                <button
                  className="hover:bg-red-500 w-10 h-7 mt-1.5 rounded-md"
                  onClick={() => updateCount(product.id, (productCounts[product.id] || 0) + 1)}
                >
                  +
                </button>
              </div>
              <div className="mt-2 text-xs text-center text-stone-500">
                <button onClick={() => removeToCart(product.id)}>Delete |&nbsp;</button>
                <button onClick={() => saveForLater(product)}> Save for Later</button>
              </div>
            </div>
            <div className="flex flex-col pt-[17%] text-[15px]">
              <h1>
                <b>₹36</b>
              </h1>
              <br />
              <p className="text-stone-500">Saved: ₹34</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  ));

  return <div>{cards}</div>;
};

export default Card;

// 'use client'
// import { useState } from 'react';
// import Image from "next/image";

// import { useSelector } from "react-redux";

// const Card = () => {
//   // Initialize count state for each card
//   const AddProductsintocart = useSelector(state => state.cartDetails.cart);
//   const [counts, setCounts] = useState(Array(AddProductsintocart.length).fill(1));
 

//   // Function to update count for a specific card
//   const updateCount = (index, value) => {
//     const newCounts = [...counts]; // Copy the current counts array
//     newCounts[index] = value; // Update the count for the specified index
//     setCounts(newCounts); // Update the state
//   };

//   return (
//     <>
//       <div className='flex w-[95%] justify-between text-[#909090] font-semibold mt-3'>
//         <div>Items ({AddProductsintocart.length})</div>
//         <div className='flex w-[30%] justify-between'>
//           <h3>Quantity</h3>
//           <h3>Sub-total</h3>
//         </div>
//       </div>

//       <div className="card1 mt-4">
//         <h3 className="inline font-semibold">Fruits & vegetables</h3>
//         <div className="w-10 border border-orange-500 bg-orange-500 mt-2"></div>
        
//         {AddProductsintocart.length > 0 ? (
//           AddProductsintocart.map((product, index) => (
//             <div key={index} className="border border-1 border-[rgba(173,213,102)] rounded-md mt-5 mb-4">
//               <h1 className="bg-gradient-to-r from-[rgba(255,255,255)] to-[rgba(173,213,102)] text-[#476F00] h-10 p-2">
//                 Har Din Sasta!
//               </h1>

//               <div className="med:flex mt-2 mx-10 gap-[22%]">
//                 <div className="flex">
//                   <Image
//                     src={product.image}
//                     width={100}
//                     height={100}
//                     className="med:pt-5"
//                     alt='Product image'
//                   />
//                   <div className="flex flex-col justify-center med:text-lg med:py-12 med:pl-14 small:text-xs small:p-4">
//                     <h2>{product.name}</h2>
//                     <><b>{product.price}</b> &nbsp;<h5 className='line-through inline-block text-[#909090]'>₹40</h5></>
//                   </div>
//                 </div>

//                 <section className="flex med:w-[100%] med:gap-14 med:pt-[10px] small:w-[50%]">
//                   <div className="med:py-14 med:pl-14 med:pr-0 small:p-0 ">
//                     <div className="flex hover:shadow-xl shadow-black border border-stone-400 hover:border-2 med:gap-10 med:w-[100%] px-3 rounded-md small:w-[90%] ">
//                       <button className='hover:bg-red-500 w-10 h-7 mt-1.5 rounded-md' onClick={() => updateCount(index, counts[index] - 1)}>-</button>
//                       <h2 className="m-2">{counts[index]}</h2>
//                       <button className='hover:bg-red-500 w-10 h-7 mt-1.5 rounded-md' onClick={() => updateCount(index, counts[index] + 1)}>+</button>
//                     </div>
//                     <div className='med:mt-2 med:text-xs text-center text-stone-500 small:text-[8px]'>
//                       <button>Delete |&nbsp;</button>
//                       <button> Save for Later</button>
//                     </div>
//                   </div>

