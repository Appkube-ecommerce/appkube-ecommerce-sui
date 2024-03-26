"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import ImportButton from "./importButton";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { Radio } from 'antd';

// import { fetchcustomer } from "@/Api/fetchingcustomers";

import useFetchCustomers from "@/components/customHooks/useFetchCustomers";

// import Addproduct from "./addproduct";


const Customer = () => {
  const { customers, loadings, error } = useFetchCustomers();
  const [radio1, setradio1] = useState(1);
  const onChangeRadio1 = (e) => {
    console.log('radio checked', e.target.value);
    setradio1(e.target.value);
  };
  const [radio2, setradio2] = useState(1);
  const onChangeRadio2 = (e) => {
    console.log('radio checked', e.target.value);
    setradio2(e.target.value);
  };
  

  const router = useRouter();
  const AddCustomers = ()=>{
   
    router.push('/admin/customers/addcustomer')
  }
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const searchInput = useRef(null);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
            className="bg-black text-white hover:bg-black"
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
           
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

const columns = [
  {
    ...getColumnSearchProps("name"),
    title: "Customer name",
    dataIndex: "name",
    key: "name",
    width: 50, // Adjust the width as needed
    render: (name) => `${name}`,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: 50, // Adjust the width as needed
    render: (phone) => `₹${phone}`,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 50, // Adjust the width as needed
    render: (id) => `₹${id}`,
  },
  ];
 
  

 

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log("selectedRowKeys:", selectedRowKeys);
      console.log("selectedRows:", selectedRows);
    },
  };

  return (
    <>
      <header className="flex justify-between mt-4">
        <h1 className="font-bold text-2xl">Customers</h1>
        <div className="flex gap-3">
          <button
            style={{
              backgroundColor: "#E3E3E3",
              borderRadius: "5px",
              padding: "8px 15px 8px 15px",
            }}
            onClick={showModal}
          >
            Export
          </button>
          <ImportButton />
          {/* <Link href="/admin/products/addproduct"> */}
          <button
            key="link"
          
            className="bg-black text-white rounded-md px-8 py-2 mr-3"
            loading={loading}
            onClick={AddCustomers}
          >
            Add Customer
          </button>
          {/* </Link> */}
        </div>
        <Modal
  open={open}
  title="Export products"
  onOk={handleOk}
  onCancel={handleCancel}
  footer={[
    <Button key="back" className="shadow-lg" onClick={handleCancel}>
      Cancel
    </Button>,
    <Button
      key="Cancel"
      className="bg-black text-white"
      loading={loading}
      onClick={handleOk}
    >
      Export customers
    </Button>,
  ]}
>
  <hr></hr>
  <div className="mt-5">
  
    
      <div className="m-5">
        <div className="mb-5">
          <Space direction="vertical">
          <h5>Export</h5>
 
      <Radio.Group onChange={onChangeRadio1} value={radio1} defaultValue="A">
      <Space direction="vertical">
      <Radio value="A">Current Page</Radio>
        <Radio value="B">All customers</Radio>
        <Radio value="C" disabled>Selected:0 customers</Radio>
      <Radio value="D" disabled>50+ customers matching your search </Radio>
 </Space>

    </Radio.Group>
    </Space>
        </div>
        <div className="mb-5"> 
        <Space direction="vertical">
          <h5>Export as</h5>
    <Radio.Group onChange={onChangeRadio2} value={radio2} defaultValue="E">
      <Space direction="vertical">
      <Radio value="E">CSV for Excel,Numbers,or other spreadsheet programs</Radio>
      <Radio value="F">Plain CSV file</Radio>
     
 </Space>

    </Radio.Group>
    </Space>
   

        </div>
      </div>
      <hr></hr>
  <p className="m-2">Learn more about <Link href="/" className="text-blue-400 underline">exporting customers to CSV file</Link></p>
 
  
  </div>

  
 
  <hr></hr>
  
  
</Modal>
      </header>
      
     
    
      <Table
      
        // rowSelection={{
        //   ...rowSelection,
        // }}
        
        columns={columns}
        dataSource={customers}
        pagination={false}
        scroll={{ x: 1000, y: 900 }}
         className="mt-5 mr-3"
      />
    </>
  );
};

export default Customer;