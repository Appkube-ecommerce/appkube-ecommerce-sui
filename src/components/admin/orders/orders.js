'use client'
import { DownOutlined, UserOutlined, InboxOutlined, SearchOutlined, MenuOutlined, ArrowUpOutlined, ArrowDownOutlined, TableOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip, Menu } from 'antd';
import { Tabs } from 'antd';
import Link from "next/link"
import { Table, Pagination } from 'antd';
import React, { useState } from 'react';
import CustomModal from './modal';


const onChange = (key) => {
  console.log(key);
};
const handleButtonClick = (e) => {
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  console.log('click', e);
};


const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
  },
  
];

const columns = [
  {
    title: 'Order',
    dataIndex: 'order',
    className: 'text-xs', 
    render: (text, record) => (
      <Link href={`/admin/orders/summary`}>
        <span >{text}</span>
      </Link>
    ),
    
  },
  {
    title: 'Date',
    dataIndex: 'date',
    className: 'text-xs',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    className: 'text-xs',
  },
  {
    title: 'Channel',
    dataIndex: 'channel',
    className: 'text-xs',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    className: 'text-xs',
  },
  {
    title: 'Payment Status',
    dataIndex: 'paymentstatus',
    className: 'text-xs',
  },
  {
    title: 'Fulfillment Status',
    dataIndex: 'fulfillmentstatus',
    className: 'text-xs',
  }, {
    title: 'Items',
    dataIndex: 'items',
    className: 'text-xs',
  },
  {
    title: 'Delivery Status',
    dataIndex: 'deliverystatus',
    className: 'text-xs',
  },
  {
    title: 'Delivery Method',
    dataIndex: 'deliverymethod',
    className: 'text-xs',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    className: 'text-xs',
  },
];

const CustomPagination = ({ total, onChange, current }) => {
  return (
    <Pagination
      
      onChange={onChange}
      current={current}
      itemRender={(current, type, originalElement) => {
        if (type === 'prev' || type === 'next') {
          return <span>{originalElement}</span>;
        }
        return null;
      }}
    />
  );
};

const { TabPane } = Tabs;
const Orders = () => {
  const handleMenuClick = (e) => {
    console.log('click', e);
  };
 


  const handleOrderClick = (orderId) => {
    router.push(`/ordersummary/${orderId}`);
  };
  

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const tabNames = [
    'All',
    'Unfulfilled',
    'Unpaid',
    'Open',
    'Closed',
    'Local Delivery',
    '+',
    ];

const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const onChangeTabs = (key) => {
    console.log(key);
  };

  const onChangePagination = (page) => {
    console.log('Page changed: ', page);
  };


  const tabIcons = [
    <span><SearchOutlined /><MenuOutlined /></span>,
    <span><TableOutlined /></span>,
    <span><ArrowUpOutlined /><ArrowDownOutlined /></span>,
  ];

  const extendedTabNames = [...tabNames.slice(0, tabNames.indexOf('+') + 1), ...tabIcons];

  const sampleData = [
    {
      key: '1',
      order: '#1',
      date: '2022-01-01',
      customer: 'John Doe',
      channel: 'Online',
      total: '$100.00',
      paymentstatus: 'Paid',
      fulfillmentstatus: 'Shipped',
      items: '5',
      deliverystatus: 'Delivered',
      deliverymethod: 'Express',
      tags: 'High Priority',
    },

  ];
return (
    <>
      <div className='mr-2 px-4'>
        <div className='flex justify-between mt-4 items-center'>
          <div><p className="font-bold text-lg ">Orders</p></div>
          {/* <div className="flex gap-2"> */}
          <div className="flex gap-2">
            <CustomModal />
          </div>
            {/* <button className="rounded-lg font-medium w-16 text-xs h-6 bg-gray-200">Export<modal/></button> */}
            {/* <Dropdown overlay={menu}>
              <Button className='rounded-lg bg-gray-200 font-medium text-xs h-6'>More actions<DownOutlined /></Button>
            </Dropdown>
            <button className='rounded-lg font-medium w-24 bg-gray-800 text-white text-xs h-6'>Create order</button> */}
          {/* </div> */}
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

        <div className='h-96 bg-white rounded-xl p-4'>
          <Tabs
            onChange={onChangeTabs}
            type="card"
            tabBarStyle={{ color: '#333', height: '24px' }}
            tabIcons={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
          >
            {extendedTabNames.map((tab, index) => (
              <TabPane
              tab={
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '600'}}>{tab}</span>
                </div>
              }
              key={String(index + 1)}
            >
              {tab === 'All' && (
                <>
                  <Table rowSelection={rowSelection} columns={columns} dataSource={sampleData} />
                 
                </>
              )}
            </TabPane>  
            ))}
               
          </Tabs>
       <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <CustomPagination onChange={onChangePagination} current={1} />
                  </div>
        </div>
        
        <div className='justify-center text-center mt-4 text-xs'>Learn more about <a className='underline text-blue-600 hover:underline'>orders</a></div>
      </div>
    </>
  );
};

export default Orders;
