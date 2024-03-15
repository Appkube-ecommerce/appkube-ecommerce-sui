"use client";
import React, { useRef, useState,useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import ImportButton from "./importButton";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { Radio } from 'antd';
import ProductList from "../productsList/Pro";
// import Addproduct from "./addproduct";
import { fetchCategories } from "@/Api/fetchingProducts";

const Products = () => {
  const [products, setProducts] = useState([]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCategories();
  
        console.log(result)
        setProducts(result.data.listProducts.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchData();
  }, []);
  const router = useRouter();
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

  const AddProducts = ()=>{

    router.push('/admin/products/addproduct')
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
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "10%",
      render: (image) => <img src={image} alt="Product" style={{ width: 50 }} />,
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "20%",
      render: (category) => `${category}`,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%",
      render: (price) => `₹${price}`,
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
      width: "10%",
      render: (unit) => `${unit}`,
    },];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log("selectedRowKeys:", selectedRowKeys);
      console.log("selectedRows:", selectedRows);
    },
  };


  return (
    <>
      <header className="flex justify-between mt-4 ">
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
          {/* <Link href="/admin/products/addproduct"> */}
          <button
            key="link"
          
            className="bg-black text-white rounded-md px-8 py-2"
            loading={loading}
            onClick={AddProducts}
          >
            Add Product
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
      Export Products
    </Button>,
  ]}
>
  <hr></hr>
  <div className="mt-5 mb-5">
  <p>This CSV file can update all product information. To update just 
    inventory quantities use the <Link href="/" className="text-blue-500 underline" >
      CSV file for inventory.</Link></p>
    
      <div className="m-5">
        <div className="mb-5">
          <Space direction="vertical">
          <h5>Export</h5>
 
      <Radio.Group onChange={onChangeRadio1} value={radio1} defaultValue="A">
      <Space direction="vertical">
      <Radio value="A">Current Page</Radio>
        <Radio value="B">All products</Radio>
        <Radio value="C" disabled>Selected:0 products</Radio>
      <Radio value="D" disabled>1 product matching your search </Radio>
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
  <p>Learn more about <Link href="/" className="text-blue-400 underline">exporting products to CSV file</Link> or the   <Link href="/" className="text-blue-400 underline">bulk editor.</Link></p>

  </div>
  <hr></hr>
  
  
</Modal>
      </header>
      <Table
        className="mt-5"
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={products}
        pagination={false}
        scroll={{ x: 800, y: 4000 }}
      />
      <ProductList/>
    
      </>
  );
};

export default Products;
