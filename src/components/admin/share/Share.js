"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { Radio } from 'antd';
import { fetchcustomer } from "@/Api/fetchingcustomers";
import { fetchCategories } from "@/Api/fetchingProducts";
import jsPDF from 'jspdf';

// import Addproduct from "./addproduct";


const Share = () => {
    const router = useRouter();
    const AddCustomers = ()=>{
     
      router.push('/admin/customers/addcustomer')
    }
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
  const [customer, setcustomer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchcustomer(); // Assuming fetchCategories returns a list of products

        console.log(result)
        setcustomer(result.data.listCustomers.items);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchData();
  }, []);
  const [show, setshow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const searchInput = useRef(null);
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
      ...getColumnSearchProps("name"),
      title: "Customer name",
      dataIndex: "name",
      key: "name",
      width: 50, // Adjust the width as needed
      render: (name) => (
        <div>
          {name}
          <button onClick={generatePdf}  className=" border  border-black text-xs m-1 rounded-md px-2 py-1 float-end">
       
            <p>Share</p>
          </button>
        </div>
      )
    }
  ];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log("selectedRowKeys:", selectedRowKeys);
          console.log("selectedRows:", selectedRows);
        },
      };
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      const htmlContent = `
     <html>
      <body>
        <h1 style="color: blue; font-size: 30px; font-family: Arial; text-align: center; font-weight: 600;">Synectiks Farm</h1>
        <div style="display: flex; justify-content: space-between; padding:30px">
       
        <div>
            <p>${currentDate}</p>
            <p>${currentTime}</p>
        </div>
    </div>
    
    
        <table style="width:100%">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          ${products.map((data, index) => {
            return `
            <tr style="text-align: center">
              <td>${index + 1}</td>
              <td><img src="${
                data.image
              }" alt="Product Image" style="width: 50px; height: 50px;"></td>
              <td>${data.name}</td>
              <td>${data.price}</td>
              <td>${data.quantity}</td>
              <td>${data.price * data.quantity}</td>
              </tr>
              `;
          })}
  
        </table>
    
      </body>
    </html>
    `;
   
   
    const generatePdf = async () => {
        try {
          const pdf = new jsPDF();
          pdf.html(htmlContent, {
            callback: async (pdf) => {
              // Convert PDF to base64 string
              const base64String = pdf.output('datauristring');
      
              // Save PDF or send it to an API
              await sendBills(base64String);
      
              // Set show state to true after PDF is generated
              setshow(true);
            }
          });
        } catch (error) {
          console.error('Error generating PDF:', error);
          // Show error message
        }
      };
      console.log(products);
  // ------- api fetching------
  const sendBills = async content => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      content: content,
      name: 'directory',
      phoneNumber: '8919538397',
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    try {
      const response = await fetch(
        'https://2evfwh96lk.execute-api.us-east-1.amazonaws.com/sendBills',
        requestOptions,
      ); // Corrected options to requestOptions
      if (response.ok) {
        console.log('Pdf send');
      }
      if (!response.ok) {
        // throw new Error(HTTP error! Status: ${response.status});
      }
      return await response.text();
    } catch (error) {
      console.error(error);
      return null; // Return null or handle the error as needed
    }
  };
    



      return (
        <>
          <button
            key="link"
          
            className="bg-black m-10 float-end text-white rounded-md px-4 py-1"
            loading={loading}
            onClick={AddCustomers}
            
          >
            Add New Customer
          </button>
          
      <Table
      
      // rowSelection={{
      //   ...rowSelection,
      // }}
      columns={columns}
      dataSource={customer}
      pagination={false}
      scroll={{ x: 1000, y: 900 }}
       className="mt-5"
    />
       {show && (
        <div>
          
          <p >
            Successfully Shared
          </p>
     </div>)}
  </>
);
};
export default Share;


