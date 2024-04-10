'use client';
import { InboxOutlined } from '@ant-design/icons';
import React, { useState,useEffect } from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import { Button, Modal, Radio } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { saveOrdersList } from '@/redux/slices/orderSlice';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
// import { data } from 'autoprefixer';
import axios from "@/Api/axios";

const Orders = () => {
  const router = useRouter()
  // const HandlePush = (record)=>{
  //   router.push(
  //    '/admin/orders/summary',
  //  {query:{data:record}})
  // }

  const searchParams = useSearchParams()
  console.log("data",searchParams.get('data')) 
  const id = searchParams.get('data')
  const order = useSelector((state) => state.ordersData.ordersList); 
    const data = order.filter((item)=>{
    return item.id === id
  })
  console.log('filter value',data)
  const columns = [
    {
      title: 'Order',
      dataIndex: 'id',
      // className: 'text-xs', 
      render: (text, record) => (
      //  <span onClick={()=>HandlePush(record)}>{text}</span>
      <Link
  href={{
    pathname: '/admin/orders/summary',
    query: {
      data: `${record.id}`
    }
  }}
>
  <span>{text}</span>
      </Link>
        ),
    },
    {
      title: 'Date',
      // className: 'text-xs', 
      dataIndex: 'createdAt',
      key: "createdAt",
      render: (createdAt) => `${createdAt}`,
    },
    {
      title: 'Customer Orders Id',
      // className: 'text-xs', 
      dataIndex: 'customerOrdersId',
      key: "customerOrdersId",
      render: (customerOrdersId) => `${customerOrdersId}`,
    },
    {
      title: 'Total Price',
      // className: 'text-xs',   
      dataIndex: 'totalPrice',
      key: "totalPrice",
      render: (totalPrice) => `${totalPrice}`,
    },
    {
      title: 'Payment Method',
      // className: 'text-xs',   
      dataIndex: 'paymentMethod',
      key: "paymentMethod",
      render: (paymentMethod) => `${paymentMethod}`,
    },
    {
      title: 'Payment Status',
      // className: 'text-xs',   
      dataIndex: 'status',
      key: "status",
      render: (status) => `${status}`,
    },
    // {
    //   title: 'items',
    //   // className: 'text-xs',   
    //   dataIndex: 'items',
    //   key: "items",
    //   render: (items) => `${items}`,
    // },
    {
      title: 'items',
      // className: 'text-xs',   
      dataIndex: 'items',
      key: "items",
      render: (items) => `${items.length}`,
    },
    {
      title: 'Last changed at',
      // className: 'text-xs',   
      dataIndex: '_lastChangedAt',
      key: "_lastChangedAt",
      render: (_lastChangedAt) => `${_lastChangedAt}`,
    },

  ];
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exportOption, setExportOption] = useState('option1');
  //const [orders, setOrders] = useState([]);
  // Correct usage of useSelector
 // const orders = useSelector((state) => state.ordersData.ordersList);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log('fetching');
  //       const result = await FetchOrders();
  //       console.log('result', result);
  //       dispatch(saveOrdersList(result.data.listOrders.items));
  //     } catch (error) {
  //       console.error('Error fetching orders:', error);
  //     }
  //   };

  //   fetchData(); // Call fetchData immediately after defining it
  // }, [dispatch]); // Include dispatch in the dependency array, since it's used inside useEffect

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/getAllOrders");
        console.log("orders", result);
        dispatch(saveOrdersList(result.data)); // save fetched data in Redux store
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchData();
  }, [dispatch]);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleExportOptionChange = (e) => {
    setExportOption(e.target.value);
  };
  
  return (
    <>
      <div className='mr-2 px-'>
        <div className='flex justify-between mt-4 items-center'>
          <div>
            <p className="font-bold text-2xl">Orders</p>
          </div>
          <div className="flex gap-2">
          <>
      <button
      style={{
        backgroundColor: "#E3E3E3",
        borderRadius: "5px",
        padding: "8px 15px 8px 15px",
      }}
        onClick={showModal}
        className='mr-1'
        >
        Export
      </button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        style={{ padding: 0 }}
        footer={[
          <div key="buttons" style={{ display: 'flex' }} className='justify-center items-end gap-1 mt-6 ml-28'>
            <button className="shadow-lg h-7 rounded-lg border border-gray-200 w-18 px-2" onClick={handleCancel}>
              Cancel
            </button>
            <button className="shadow-lg rounded-lg border border-gray-200 w-48 h-7 px-2">
              Export transaction histories
            </button>
            <button className="bg-gray-800 text-white rounded-lg h-7 w-30 px-2">
              Export orders
            </button>
          </div>
        ]}
      >
        <div className='h-10 w-full font-semibold text-slate-800 border-b'>
          <h2 className='text-base font-semibold'>Export Orders</h2>
        </div>
        <div className='py-4'>
          <div>
            <p className='font-medium text-slate-800'>Export</p>
            <div onChange={handleExportOptionChange} value={exportOption} className='mt-2'>
              <Radio value='option1'>Current page</Radio><br/>
              <Radio value='option2'>All orders</Radio><br/>
              <Radio value="C" disabled>Selected: 0 products</Radio><br/>
              <Radio value="D" disabled>50+ orders matching your search</Radio><br/>
              <Radio value='option3'>Orders by date</Radio>
            </div>
          </div>
          <div className='mt-4'>
            <p className='font-medium text-slate-800'>Export as</p>
            <div onChange={handleExportOptionChange} value={exportOption} className='mt-2'>
              <Radio value='option1'>CSV for excel, Numbers, or other spreadsheet programs</Radio><br/>
              <Radio value='option2'>Plain CSV file</Radio>
            </div>
          </div>
        </div>
      </Modal>
    </>
          </div>
        </div>

        <div className='bg-white rounded-xl h-16 border border-gray-200 flex items-center mb-4 mt-4 mr-1'>
          <div className=' border-r w-32 justify-center flex'>
            <button className='rounded-lg w-28 hover:bg-gray-100 h-12  font-semibold flex justify-center items-center'>
              <div><InboxOutlined /> </div>Today
            </button>
          </div>
          <div className=' border-r w-48 justify-center text-center'>
            <button className='rounded-lg w-44 hover:bg-gray-100 h-12  font-semibold'>Total orders</button>
          </div>
          <div className=' border-r w-48 justify-center text-center'>
            <button className='rounded-lg w-44 hover:bg-gray-100 h-12  font-semibold'>Ordered items over time</button>
          </div>
          <div className=' border-r w-48 justify-center text-center'>
            <button className='rounded-lg w-44 hover:bg-gray-100 h-12  font-semibold'>Return</button>
          </div>
          <div className=' border-r w-48 justify-center text-center'>
            <button className='rounded-lg w-44 hover:bg-gray-100 h-12  font-semibold'>Fulfilled orders over time</button>
          </div>
          <div className='w-48 justify-center text-center'>
            <button className='rounded-lg hover:bg-gray-100 h-12 w-44  font-semibold'>Delivered orders over time</button>
          </div>
        </div>
      </div>

<div className='bg-white p-4 rounded-lg mr-3'>
      <div className='gap-2 h-8'>
        <button className="rounded-lg w-10 text-xs font-semibold hover:bg-gray-100">All</button>
        <button className="rounded-lg w-20 text-xs font-semibold hover:bg-gray-100">Unfulfilled</button>
        <button className="rounded-lg  w-14 text-xs font-semibold hover:bg-gray-100">Unpaid</button>
        <button className="rounded-lg  w-12 text-xs font-semibold hover:bg-gray-100">Open</button>
        <button className="rounded-lg w-14 text-xs font-semibold hover:bg-gray-100">Closed</button>
        <button className="rounded-lg w-24 text-xs font-semibold hover:bg-gray-100">Local Delivery</button>
        <button className="rounded-lg w-6 text-xs font-semibold hover:bg-gray-100">+</button>
      </div>
        <Table
          columns={columns}
          dataSource={order}
          pagination={false}
          // pagination={{
          //   position: ['bottomCenter'], 
          //   prevIcon: <Button type='link' className='custom-pagination-btn'>{`<`}</Button>,
          //   nextIcon: <Button type='link' className='custom-pagination-btn'>{`>`}</Button>,
          // }}
        />
      </div>
        </>
    );
};
export default Orders;