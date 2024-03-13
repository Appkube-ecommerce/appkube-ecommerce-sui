'use client';
import { InboxOutlined } from '@ant-design/icons';
import React, { useState,useEffect } from 'react';
import { Table } from 'antd';
import { FetchOrders } from '@/Api/fetchingOrders';
import Link from 'next/link';
import { Button, Modal, Radio } from 'antd';
import { useDispatch } from 'react-redux';

const columns = [
  {
    title: 'Order',
    dataIndex: 'id',
    className: 'text-xs', 
    render: (text, record) => (
      <Link href={`/admin/orders/summary`}>
        <span>{text}</span>
      </Link>
    ),
  },
  {
    title: 'Date',
    className: 'text-xs', 
    dataIndex: 'createdAt',
    key: "createdAt",
    render: (createdAt) => `${createdAt}`,
  },
  {
    title: 'Customer Orders Id',
    className: 'text-xs', 
    dataIndex: 'customerOrdersId',
    key: "customerOrdersId",
    render: (customerOrdersId) => `${customerOrdersId}`,
  },
  {
    title: 'Total Price',
    className: 'text-xs', 
    dataIndex: 'totalPrice',
    key: "totalPrice",
    render: (totalPrice) => `${totalPrice}`,
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};

const Orders = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exportOption, setExportOption] = useState('option1');
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchOrders();

        console.log(result);
        dispatch(setOrders(result.data.listOrders.items));
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

  const handleOrderClick = (record) => {
    dispatch(saveSelectedOrderData(record));
  };
  return (
    <>
      <div className='mr-2 px-4'>
        <div className='flex justify-between mt-4 items-center'>
          <div>
            <p className="font-bold text-lg ">Orders</p>
          </div>
          <div className="flex gap-2">
          <>
      <button
        onClick={showModal}
        className="rounded-lg font-medium w-16 text-xs h-6 bg-gray-300 text-slate-800 hover:bg-slate-300"
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

        <div className='bg-white rounded-xl h-16 border border-gray-200 flex items-center mb-4 mt-4 '>
          <div className=' border-r w-32 justify-center flex'>
            <button className='rounded-lg w-28 hover:bg-gray-100 h-12 text-slate-800 text-xs font-semibold flex justify-center items-center'>
              <div><InboxOutlined /> </div>Today
            </button>
          </div>
          <div className=' border-r w-48 justify-center text-center'>
            <button className='rounded-lg w-44 hover:bg-gray-100 h-12 text-slate-800 text-xs font-semibold'>Total orders</button>
          </div>
          <div className=' border-r w-48 justify-center text-center'>
            <button className='rounded-lg w-44 hover:bg-gray-100 h-12 text-slate-800 text-xs font-semibold'>Ordered items over time</button>
          </div>
          <div className=' border-r w-48 justify-center text-center'>
            <button className='rounded-lg w-44 hover:bg-gray-100 h-12 text-slate-800 text-xs font-semibold'>Return</button>
          </div>
          <div className=' border-r w-48 justify-center text-center'>
            <button className='rounded-lg w-44 hover:bg-gray-100 h-12 text-slate-800 text-xs font-semibold'>Fulfilled orders over time</button>
          </div>
          <div className='w-48 justify-center text-center'>
            <button className='rounded-lg hover:bg-gray-100 h-12 w-44 text-slate-800 text-xs font-semibold'>Delivered orders over time</button>
          </div>
        </div>
      </div>

<div className='bg-white p-2 rounded-lg'>
      <div className='gap-2'>
        <button className="rounded-lg w-10 h-6 text-xs  hover:bg-gray-100">All</button>
        <button className="rounded-lg w-20 h-6 text-xs  hover:bg-gray-100">Unfulfilled</button>
        <button className="rounded-lg h-6 text-xs w-14  hover:bg-gray-100">Unpaid</button>
        <button className="rounded-lg h-6 text-xs w-12  hover:bg-gray-100">Open</button>
        <button className="rounded-lg w-14 h-6 text-xs  hover:bg-gray-100">Closed</button>
        <button className="rounded-lg w-24 h-6 text-xs  hover:bg-gray-100">Local Delivery</button>
        <button className="rounded-lg w-6 h-6 text-xs  hover:bg-gray-100">+</button>
      </div>

      <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={[
            ...columns,
          ]}
          dataSource={orders}
        />
      </div>
    </>
    
  );
};

export default Orders;
