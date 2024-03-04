'use client'
import React, { useEffect, useState } from 'react';
import {  List, message } from 'antd';
import { Button, Row, Col } from 'antd';
import Image from 'next/image';
import VirtualList from 'rc-virtual-list';
import image from "./sample.webp"
import Link from 'next/link';
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const OrderReview = () => {
    const [data, setData] = useState([]);
    const appendData = () => {
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((body) => {
          setData(data.concat(body.results));
          message.success(`${body.results.length} more items loaded!`);
        });
    };
    useEffect(() => {
      appendData();
    }, []);
    const onScroll = (e) => {
         // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
        appendData();
      }
    };
    
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

  return (
    <div className="w-[100%]">
        <h1 className="font-bold text-xl ml-[15%] mb-[2%]">Your Basket</h1>
        <div className="w-[70%] m-auto bg-black rounded-md h-[20%] flex justify-between p-[1%]">
            <div>
            <h1 className="text-white leading-2"> Sub Total 3 Items</h1>
            <h3 className="text-green-600">Saving:₹675</h3>
            </div>
            <Link href="OrderReview/OrderSummary">
            <button className="bg-red-500 rounded-md p-[1%] w-m-[20%]  w-[25%] h-[1%] text-white">
                Checkout
            </button>
            </Link>

        </div>
        <div>
        <List className='w-[70%] m-auto'>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
       className="flex  flex-col justify-around" >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Image src={image} alt="sample"  width={100} height={100} />}
              title="Capsicum"
              description="Saved: ₹8.51"
            />
            <div>
             <div className=" flex justify-evenly"
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
        padding: '2px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    >
      <Button
        onClick={handleDecrement}
        icon="-"
        style={{
          marginRight: '4px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      />
      <span
        style={{
          margin: '0 10px',
          fontWeight: 'bold',
          minWidth: '30px',
          textAlign: 'center',
        }}
      >
        {quantity}
      </span>
      <Button
        onClick={handleIncrement}
        icon="+"
        style={{
          marginLeft: '4px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      />
     
    </div>
    <div>
        <div className="flex">
   <button  onClick>Delete</button>
   <div className="w-[1px] h-[20px] bg-gray-500 m-2"></div>
   <button onClick>Save For later</button>
   </div>


    </div>
    </div>
    <div>
        <h1>₹23</h1>
        <p>Saved: ₹8.51</p>
    </div>
    
          </List.Item>
        )}
      </VirtualList>
    </List>
        </div>
        </div>
  )
}

export default OrderReview