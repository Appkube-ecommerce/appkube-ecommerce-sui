'use client'
//import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip, Menu } from 'antd';
import { Tabs } from 'antd';
import { Table, Pagination } from 'antd';
import React, { useState } from 'react';

const onChange = (key) => {
  console.log(key);
};
const handleButtonClick = (e) => {
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  console.log('click', e);
};

const columns = [
  {
    title: 'Order',
    dataIndex: 'order',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


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
const CustomPagination = ({ total, onChange, current }) => {
  return (
    <Pagination
      total={total}
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
    // Perform any necessary logic when tabs change
  };

  const onChangePagination = (page) => {
    console.log('Page changed: ', page);
    // Perform any necessary logic when the page changes
  };
  return (
    <>
    <div className='flex justify-between h-20 items-center px-4'>
        <div><p className="font-bold text-xl">Orders</p></div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-gray-200 font-medium w-16">Export</button>
          <Dropdown overlay={menu}>
            <Button className='rounded-lg bg-gray-200 font-medium'>More actions<DownOutlined /></Button>
          </Dropdown>
          <button className='rounded-lg font-medium w-24 bg-gray-800 text-white'>Create order</button>
        </div>
      </div>


    <div className='bg-white rounded-xl h-16 mr-8 ml-6 border border-gray-200 flex items-center'>
    <div className=' border-r w-32 justify-center text-center'><button className='rounded-lg w-28 hover:bg-gray-100 h-12 text-slate-700'>Today</button></div>
      <div className=' border-r w-48 justify-center text-center'><button className='rounded-lg w-44 hover:bg-gray-100 h-12 text-slate-700'>Total orders</button></div>
      <div className=' border-r w-48 justify-center text-center'><button className='rounded-lg w-44 hover:bg-gray-100 h-12 text-slate-700'>Ordered items over time</button></div>
      <div className=' border-r w-48 justify-center text-center'><button className='rounded-lg w-44 hover:bg-gray-100 h-12 text-slate-700'>Return</button></div>
     <div className=' border-r w-48 justify-center text-center'><button className='rounded-lg w-44 hover:bg-gray-100 h-12 text-slate-700'>Fulfilled orders over time</button></div>
     <div className='w-48 justify-center text-center'><button className='rounded-lg hover:bg-gray-100 h-12 w-44 text-slate-700'>Delivered orders over time</button></div>
    </div>

    <div className='h-96 mr-8 ml-6 mt-4 bg-white rounded-xl p-4'>
        <Tabs onChange={onChangeTabs} type="card">
          {tabNames.map((tabName, index) => (
            <TabPane tab={tabName} key={String(index + 1)}>
              {tabName === 'All' && (
                <>
                  <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <CustomPagination total={data.length} onChange={onChangePagination} current={1} />
      </div>
                </>
              )}
              {/* Add specific content for other tabs as needed */}
            </TabPane>
          ))}
        </Tabs>
      </div>
      
    <div className='justify-center text-center mt-4 text-sm'>Learn more about <a className='underline text-blue-600 hover:underline'>orders</a></div>
    
    </>
  ); 
};

export default Orders;

