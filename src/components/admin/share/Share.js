"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";

import Link from "next/link"
import { Radio } from 'antd';
// import { fetchcustomer } from "@/Api/fetchingcustomers";
// import { fetchProducts } from "@/Api/fetchingProducts";

// import { fetchProducts } from "@/Api/fetchingProducts";
//import { fetchProducts } from "@/Api/fetchingProducts";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { notification } from "antd";
import useFetchCustomers from "@/components/customHooks/useFetchCustomers";

const Share = () => {
  const router = useRouter();

  const AddCustomers = () => {
    router.push('/admin/Share/addcustomer');
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result.data.listProducts.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const { customers } = useFetchCustomers();
  const [show, setshow] = useState(false);

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
      const imgPromises = products.map(async (product) => {
        const response = await fetch(product.image);
        const blob = await response.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64Img = reader.result;
            product.imageBase64 = base64Img;
            resolve(base64Img);
          };
          reader.readAsDataURL(blob);
        });
      });
      
      await Promise.all(imgPromises);

      // Define columns for the table
      const columns = ["ID", "Name", "Image", "Price", "Category", "Unit"];

      // Define rows for the table
      const rows = products.map((product, index) => [{
        id: index + 1,
        name: product.name,
        image: product.imageBase64,
        price: product.price,
        category: product.category,
        unit: product.unit,
      }
    ]);

    
    pdf.autoTable(pdf, {
      head: [columns],
      body: rows,
      startY: 30,
      columnStyles: {
        2: {
          cellWidth: 30,
        },
      },
      didDrawCell: (data) => {
        if (data.section === 'body' && data.column.index === 2) {
          const imgProps = products.find((product) => product.name === data.row.cells[0].value);
          if (imgProps && imgProps.imageBase64) {
            pdf.addImage(imgProps.imageBase64, 'PNG', data.cell.x + 2, data.cell.y + 2, 10, 10);
          }
        }
      }
    });


  pdf.save("pdf1.pdf")

      // Save or send the PDF
      const base64String = pdf.output('datauristring');
      const prefixLength = "data:application/pdf;filename=generated.pdf;base64,".length;
      const remainingString = base64String.substring(prefixLength);
      // await shareProducts(remainingString, phoneNumber);

      // Set show state to true after PDF is generated
      setshow(true);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const { loadings } = useFetchCustomers();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [loading, setLoading] = useState(false);
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };   

  const handleShare = async (phoneNumber) => {
    try {
      const base64String = await generatePdf(phoneNumber);
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
      width: 50,
      render: (name,record) => (
        <div>
          {name}
          <button
             onClick={() =>{ handleShare(record.phone)
              console.log(record.phone);
             }}
             className="border border-black text-xs m-1 rounded-md px-2 py-1 float-end hover:bg-gray-200" >
             <p>Share</p>
       </button>
        </div>
      )
    }
  ];
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
      dataSource={customers}
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