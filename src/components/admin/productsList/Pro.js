import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Form, Modal, Input } from 'antd';
import html2pdf from 'html2pdf.js';
import { fetchCategories } from '@/Api/fetchingProducts';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [shareCount, setShareCount] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchCategories();
                setProducts(result.data.listProducts.items);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    const handlePrint = (category) => {
        const filteredProducts = category ? products.filter((product) => product.category === category) : products;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head>
                <title>Product List</title>
                <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                }
      
                .product-list {
                  display: grid;
                  grid-template-columns: repeat(5, 1fr); /* Adjust the number of columns as needed */
                  gap: 8px; /* Adjust the gap between columns */
                  flex-wrap: wrap;
                  justify-content: flex-start;
                  margin: 0;
                  padding: 0;
                  margin-left: 10px;
                }
                
      
                .product-card {
                  border: 1px solid black;
                  margin: 10px;
                  padding: 5px;
                  text-align: center;
                  width: calc(33.33% - 150px);
                  box-sizing: border-box;
                  border-radius: 2px;
                
                }
      
                .product-image {
                  max-width: 150px;
                  max-height: 150px;
                  border: 1px solid #ddd;
                  border-radius: 5px;
                  margin-bottom: 5px;
                }
      
                .product-details {
                  margin-top: 10px;
                }
      
                .product-name {
                  font-size: 16px;
                  margin-bottom: 5px;
                }
      
                .product-price {
                  font-size: 14px;
                  color: blue;
                }
              </style>
            </head>
            <body>
              <div class="product-list">
        `);
      
        filteredProducts.forEach((product, index) =>  {
          printWindow.document.write(`
            <div className="product-card">
      <Image
        src=${product.image}
        alt=${product.name}
        className="product-image"
        height=${200} // Adjust the height as needed
        width=${200}  // Adjust the width as needed
        style={{ borderRadius: 10 }}
      />
      <div className="product-details ml-5">
        <h3 className="product-name">${product.name}</h3>
        <p className="product-price">Price:₹${product.price}</p>
        <p className="product-unit">Unit:${product.unit}</p>

      </div>
    </div>
          `);
        });
      
        printWindow.document.write(`
              </div>
            </body>
          </html>
        `);
      
        printWindow.document.close();
      
        // Wait for images to load before triggering the print
        printWindow.addEventListener('load', () => {
          printWindow.print();
        });
      };
      // console.log(product)

      
const [isFormValid, setIsFormValid] = useState(false); 

      const handleSend = () => {
        
                setModalVisible(false);
                form.resetFields();
                const printWindow = window.open('', '_blank');
                printWindow.document.write(`
            <html>
            <head>
                <title>Product List</title>
                <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                }
      
                .product-list {
                  display: grid;
                  grid-template-columns: repeat(5, 1fr); /* Adjust the number of columns as needed */
                  gap: 8px; /* Adjust the gap between columns */
                  flex-wrap: wrap;
                  justify-content: flex-start;
                  margin: 0;
                  padding: 0;
                  margin-left: 10px;
                }
                
      
                .product-card {
                  border: 1px solid black;
                  margin: 10px;
                  padding: 5px;
                  text-align: center;
                  width: calc(33.33% - 150px);
                  box-sizing: border-box;
                  border-radius: 2px;
                
                }
      
                .product-image {
                  max-width: 150px;
                  max-height: 150px;
                  border: 1px solid #ddd;
                  border-radius: 5px;
                  margin-bottom: 5px;
                }
      
                .product-details {
                  margin-top: 10px;
                }
      
                .product-name {
                  font-size: 16px;
                  margin-bottom: 5px;
                }
      
                .product-price {
                  font-size: 14px;
                  color: blue;
                }
              </style>
              </head>
              <body>
                  <div class="product-list">
          `);

          products.forEach((product) => {
            for (let i = 0; i < shareCount; i++) {
                printWindow.document.write(`
                    <div class="product-card">
                    <Image
                    src=${product.image}
                    alt=${product.name}
                    className="product-image"
                    height=${200} // Adjust the height as needed
                    width=${200}  // Adjust the width as needed
                    style={{ borderRadius: 10 }}
                  />
                  <div className="product-details ml-5">
                    <h3 className="product-name">${product.name}</h3>
                    <p className="product-price">Price:₹${product.price}</p>
                    <p className="product-unit">Unit:${product.unit}</p>
            
                  </div>
                </div>
                      `);
            }
                    });

                    printWindow.document.write(`
                    </div>
                </body>
                </html>
            `);
    
            printWindow.document.close();
    
            // Wait for images to load before converting to PDF
            printWindow.addEventListener('load', () => {
              const opt = {
                  margin: 1,
                  filename: 'product_list.pdf',
                  image: { type: 'jpeg', quality: 0.98 },
                  html2canvas: { scale: 2 },
                  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
              };
      
              html2pdf().from(printWindow.document.body).set(opt).save();
              });
           
    };

    function handleShare(){
      setModalVisible(true);
     
    }
    const handleModalCancel = () => {
      setModalVisible(false);
      form.resetFields();
  };


    
                  const items = [
        {
          label: 'Print All Products',
          key: '1',
          onClick: () => handlePrint(),
        },
        {
          label: 'Print Fruits Products',
          key: '2',
          onClick: () => handlePrint('FRUITS'),
        },
        {
          label: 'Print Leafy Vegetables',
          key: '3',
          onClick: () => handlePrint('LEAFY_VEGETABLES'),
        },
        {
          label: 'Print Vegetables Products',
          key: '4',
          onClick: () => handlePrint('VEGETABLES'),
        },
      ];
    
      const menuProps = {
        items,
        
      };

      return (
      <div className="product-list-container">

        <div className="product-list grid grid-cols-5">

          
          {/* {products.map((product, index) => (
            <Product key={product.id} product={product} index={index} />
          ))} */}
        </div> 

        {/* /* Print button with categories */}

        <Space wrap>
     
          <Dropdown menu={menuProps}>
            <Button  className='mt-4 flex float-end'>
              <Space>
                Print
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
         
                <button
                    key="link"
                    className="bg-black text-white rounded-md mt-4 h-8 w-20"
                    onClick={handleShare}
                >
                    Share
                </button>

        </Space>
        <Modal
                title="Share PDF"
                visible={modalVisible}
                onCancel={handleModalCancel}
                footer={[
                    <button key="cancel" onClick={handleModalCancel} className="border border-neutral-800 text-black rounded-md mt-4 h-8 w-20 ml-4">
                        Cancel
                    </button>,
                    <button
                    key="link"
                    className="bg-neutral-800 text-white rounded-md mt-4 h-8 w-20 ml-4"
                    onClick={handleSend}
                >
                    Send
                </button>
                ]}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="shareForm"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        
        </div>
    );
  };
  
  export default ProductList;
  
