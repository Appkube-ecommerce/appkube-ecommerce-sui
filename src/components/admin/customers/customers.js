"use client";
import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import ImportButton from "./importButton";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { Radio } from 'antd';
// import Addproduct from "./addproduct";



const Customer = () => {
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
  const [data,setData]=useState([ {
    key: "12",
    customer: "John pink",
    tags: (
      <Tag bordered={false} color="success">
        subscribe
      </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "1",
    customer: "John pink",
    tags: (
      <Tag bordered={false} color="success">
        subscribe
      </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "2",
    customer: "John pink",
    tags: (
      <Tag bordered={false} color="success">
        subscribe
      </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "3",
    customer: "John pink",
    tags: (
      <Tag bordered={false} color="success">
        subscribe
      </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "4",
    customer: "John pink",
    tags: (
      <Tag bordered={false} color="success">
        subscribe
      </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "5",
    customer: "John pink",
    tags: (
      <Tag bordered={false} style={{ color: 'gray', backgroundColor: '#f5f5f5', }}>
      Not subscribe
     </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "6",
    customer: "John pink",
    tags: (
      <Tag bordered={false} style={{ color: 'gray', backgroundColor: '#f5f5f5', }}>
      Not subscribe
     </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "7",
    customer: "John pink",
    tags: (
      <Tag bordered={false} style={{ color: 'gray', backgroundColor: '#f5f5f5', }}>
      Not subscribe
     </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "8",
    customer: "John pink",
    tags: (
      <Tag bordered={false} style={{ color: 'gray', backgroundColor: '#f5f5f5', }}>
      Not subscribe
     </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "9",
    customer: "John pink",
    tags: (
      <Tag bordered={false} style={{ color: 'gray', backgroundColor: '#f5f5f5', }}>
       Not subscribe
      </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "10",
    customer: "John pink",
    tags: (
      <Tag bordered={false} style={{ color: 'gray', backgroundColor: '#f5f5f5', }}>
      Not subscribe
     </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },
  {
    key: "11",
    customer: "John pink",
    tags: (
      <Tag bordered={false} style={{ color: 'gray', backgroundColor: '#f5f5f5', }}>
       Not subscribe
      </Tag>
    ),
    Location: "india",
    orders: "2 orders",
    Amountspent: "43.00",
  },]);
 

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
      // ...getColumnSearchProps("customer"),
      title: "Customer name",
      dataIndex: "customer",
      key: "customer",
      width: "30%",
    },
    {
      title: "Email Subscription",
      dataIndex: "tags",
      key: "tags",
      width: "20%",
      
    },
  
    {
      title: "Location",
      dataIndex: "Location",
      key: "Location",
      // ...getColumnSearchProps("Location"),
    },
    {
      title: "Orders",
      dataIndex: "orders",
      key: "Orders",
      // ...getColumnSearchProps("Orders"),
    },
    {
      title: "Amount spent",
      dataIndex: "Amountspent",
      key: "Amountspent",
      // ...getColumnSearchProps("Amountspent"),
    },
  ];
  const [filteredData, setFilteredData] = useState(data);
  

  const search = (e) => {
    const value = e.target.value.toLowerCase(); // Convert search input to lowercase for case-insensitive search
    const filteredData = data.filter((record) =>
      Object.values(record).some(
        (val) => typeof val === 'string' && val.toLowerCase().includes(value)
      )
    );
    setSearchText(value);
    setSearchedColumn(""); // Reset searched column when using global search
    setFilteredData(filteredData); // Update filteredData instead of data
  };

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
          
            className="bg-black text-white rounded-md px-8 py-2"
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
      
      <div className="mt-4">
        <Input
          ref={searchInput}
          placeholder="Search Customer"
          value={searchText}
          onChange={search}
          style={{ width: "100%" }}
         
        />
      </div>
    
      <Table
      
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        scroll={{ x: 1000, y: 900 }}
      />
    </>
  );
};

export default Customer;
