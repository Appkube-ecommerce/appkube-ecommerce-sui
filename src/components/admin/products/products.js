"use client";
import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import ImportButton from "./importButton";
const data = [
  {
    key: "1",
    product: "John Brown",
    // status: 'active',
    tags: (
      <Tag bordered={false} color="error">
        Inactive
      </Tag>
    ),
    inventory: "10",
    salesChannels: "2",
    vendors: "My Store1",
  },
  {
    key: "2",
    product: "John red",
    tags: (
      <Tag bordered={false} color="processing">
        Processing
      </Tag>
    ),
    inventory: "10",
    salesChannels: "8",
    vendors: "My Store2",
  },
  {
    key: "3",
    product: "John pink",
    tags: (
      <Tag bordered={false} color="success">
        Active
      </Tag>
    ),
    inventory: "10",
    salesChannels: "5",
    vendors: "My Store3",
  },
  {
    key: "4",
    product: "John yellow",
    tags: (
      <Tag bordered={false} color="processing">
        processing
      </Tag>
    ),
    inventory: "10",
    salesChannels: "5",
    vendors: "My Store3",
  },
];

const Products = () => {
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
            backgroundColor: '#ffc069',
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
      title: "Product",
      dataIndex: "product",
      key: "product",
      width: "30%",
      ...getColumnSearchProps("product"),
    },
    {
      title: "Status",
      dataIndex: "tags",
      key: "tags",
      width: "20%",
      ...getColumnSearchProps("tags"),
    },
    {
      title: "Inventory",
      dataIndex: "inventory",
      key: "inventory",
      ...getColumnSearchProps("inventory"),
    },
    {
      title: "Sales Channels",
      dataIndex: "salesChannels",
      key: "salesChannels",
      ...getColumnSearchProps("salesChannels"),
    },
    {
      title: "Vendors",
      dataIndex: "vendors",
      key: "vendors",
      ...getColumnSearchProps("vendors"),
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
        <h1 className="font-bold text-2xl">Products</h1>
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
          <button
            key="link"
            href="/orders"
            className="bg-black text-white rounded-md px-8 py-2"
            loading={loading}
            onClick={handleOk}
          >
            Add Product
          </button>
          
        </div>
        <Modal
          open={open}
          title="Title"
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
              Export Products
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </header>
      <Table
        className="mt-5"
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 1000, y: 900 }}
      />
    </>
  );
};

export default Products;
