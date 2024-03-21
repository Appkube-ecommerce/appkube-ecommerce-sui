"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { Radio } from 'antd';
import { fetchcustomer } from "@/Api/fetchingcustomers";
import { fetchProducts } from "@/Api/fetchingProducts";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {notification} from "antd"



// import Addproduct from "./addproduct";


const Share = () => {
    const router = useRouter();
    const AddCustomers = ()=>{
     
      router.push('/admin/Share/addcustomer')
    }
        const [products, setProducts] = useState([]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        
        useEffect(() => {
          const fetchData = async () => {
            try {
              const result = await fetchProducts();
        
              console.log(result)
              setProducts(result.data.listProducts.items);
            } catch (error) {
              console.error("Error fetching products:", error);
            }
          };
        
          fetchData();
        }, []);
        console.log(products);
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
  const handleShare = async (phoneNumber) => {
    try {
        const base64String = await generatePdf(phoneNumber);
       
        console.log(phoneNumber);
         show && notification.success({
          message: 'Successfully Shared!',
        });
        setshow(true);
    } catch (error) {
        console.error('Error sharing PDF:', error);
    }
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
      render: (name,record) => (
        <div>
          {name}
          <button
             onClick={() =>{ handleShare(record.phone)
              console.log(record.phone);
             }}
             // Pass phoneNumber to handleShare function
             className="border border-black text-xs m-1 rounded-md px-2 py-1 float-end" >
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
  const generatePdf = async (phoneNumber) => {
    try {
      const pdf = new jsPDF();
      
      // Add title
      pdf.text("Synectiks Farm", 10, 10);

      // Add date and time


      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      pdf.text(currentDate + ' ' + currentTime, 10, 20);

     // trying to pdf with images )Function to fetch image data and convert to Base64
// const fetchAndConvertToBase64 = (imageUrl) => {
//   const response = (imageUrl , { mode: 'no-cors' });
//   // const blob = await response.blob();
//   // return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       // reader.onloadend = () => resolve(reader.result.split(',')[1]);
//       // reader.onerror = reject;
//       reader.readAsDataURL(response);
//   // });
// };
// const image="https://subzfresh.com/product/fresh-fruits/apple/"
// const base64Image =  fetchAndConvertToBase64(image);
// console.log(base64Image);

// // Assuming `products` is an array of objects with `name` and `image` properties
// const columns = ["ID", "Name", "Image", "Price", "Category", "Unit"];
// const rows = products.map((product, index) => {
//   // const base64Image =  fetchAndConvertToBase64(product.image);
 
//   // console.log(base64Image);
//   const x = 15; // Adjust these values as needed
//   const y = 30; // Adjust these values as needed
//   const width = 40; // Adjust these values as needed
//   const height = 40; // Adjust these values as needed
//   return [
//       index + 1,
//       product.name,
//       pdf.addImage(img, "JPEG", x, y, width, height),
//       product.price,
//       product.category,
//       product.unit
// ];
// });

      // (pdf without images)  Define columns and rows for the table      // const columns = ["ID", "Name", "Image", "Price", "Category", "Unit"];
      const rows = products.map((product, index) => [
        index + 1,
        product.name,
        { imageData: product.image, width: 50, height: 50 },
        product.price,
        product.category,
        product.unit
      ]);

      // Add table using jspdf-autotable
      pdf.autoTable({
        head: [columns],
        body: rows,
        startY: 30 // Adjust startY as needed
      });

      // Save or send the PDF
      console.log(phoneNumber);
      const base64String = pdf.output('datauristring');
      const prefixLength = "data:application/pdf;filename=generated.pdf;base64,".length;
      const remainingString = base64String.substring(prefixLength);
      await shareProducts(remainingString,phoneNumber);

      // Set show state to true after PDF is generated
      setshow(true);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Show error message
    }
  };
      console.log(products);
  // ------- api fetching------
  const shareProducts = async (content, phoneNumber)=> {
    console.log(phoneNumber);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      content: content,
      name: 'directory',
      phoneNumber: phoneNumber,
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
        <div>
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
       {/* {show && (
        <div>
          
          <p >
            Successfully Shared
          </p>
     </div>)} */}
  </div>
);
};
export default Share;

