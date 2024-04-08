"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  SearchOutlined,
  EditOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Form,
  Upload,
  Space,
  Table,
  Checkbox,
  Modal,
  Select,
} from "antd";
import Highlighter from "react-highlight-words";
import ImportButton from "../importButton";
import { addToAdminCart } from "@/redux/slices/admincartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Radio } from "antd";
import { setAllProducts } from "@/redux/slices/products";
import { useDispatch } from "react-redux";
import axios from "@/Api/axios";
import Image from "next/image";

const Inventory = () => {
  const dispatch = useDispatch();
  const { Option } = Select;
  const [imageUrl, setImageUrl] = useState(); // Define imageUrl state variable
  const [openExportModal, setOpenExportModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedData, setEditedData] = useState({});
  // const [selectedRows, setselectedRows] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/getAllInventory");
        console.log("Inventory", result);
        setInventory(result.data);
        // dispatch(setAllProducts(result.data));
        // console.log(result.data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

   fetchData(); 
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/product");
        // const result = await axios.get("/product");
        console.log("products", result);
        setProducts(result.data);
        // dispatch(setAllProducts(result.data));
        // console.log(result.data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const updatedCart = products.filter((product) => product.selected);
    setCart(updatedCart);
  }, [products]); // Only include products in the dependency array

  useEffect(() => {
    setSelectedCount(cart.length);
  }, [cart]); // Only include cart in the dependency array

  const showModalForEdit = (record) => {
    setOpen(true);
    setOpenEditModal(true);
    console.log("Editing product:", record);
    setEditingProduct(record);
    setEditedData(record);
    setImageUrl(record.image);
  };
  const handleSaveForEdit = () => {
    console.log("Saving edited data:", editedData);
    setEditingProduct(null);
    setEditedData({});
    // putRequest(editedData); //here put api is hitting
    setOpenEditModal(false);
  };
  // const putRequest = async (values) => {
  //   let data = {
  //     productId: values.productId,
  //     availableQuantity: values.availableQuantity,
  //     id: ,
  //     unit: values.unit,
      
  //   };
  //   try {
  //     console.log("stored data", data);
  //     const response = await axios.put("/product", data);
  //     console.log("success", response);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const handleCancelForEdit = () => {
    setOpenEditModal(false);
  };

  const isEditing = (record) => record === editingProduct;
  const router = useRouter();
  const [radio1, setradio1] = useState(1);
  const onChangeRadio1 = (e) => {
    console.log("radio checked", e.target.value);
    setradio1(e.target.value);
  };
  const [radio2, setradio2] = useState(1);
  const onChangeRadio2 = (e) => {
    console.log("radio checked", e.target.value);
    setradio2(e.target.value);
  };

  const AddNewInventory = () => {
    router.push("/admin/products/inventory/addInventory");
  };
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [open, setOpen] = useState(false);
  const searchInput = useRef(null);
  const showModal = () => {
    setOpen(true);
    setOpenExportModal(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
      setOpenExportModal(true);
    }, 3000);
  };
  const handleCancel = () => {
    setOpenExportModal(false);
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
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
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
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
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
          color: filtered ? "#1677ff" : null,
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
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const handleCheckboxChange = (record, checked) => {
    const updatedProducts = products.map((product) =>
      product === record ? { ...product, selected: checked } : product
    );
    setProducts(updatedProducts); // Update products state with the selected record

    if (checked) {
      dispatch(addToAdminCart(record)); // Dispatch the selected record to admincart
    } else {
      // Remove the record from admincart
      const updatedCart = cart.filter((item) => item !== record);
      dispatch(setAllProducts(updatedCart)); // Update the state of admincart
    }
  };

  const columns = [
    // {
    //   title: () => (
    //     <Checkbox
    //       onChange={(e) => {
    //         const checked = e.target.checked;
    //         const updatedProducts = products.map((product) => ({
    //           ...product,
    //           selected: checked,
    //         }));
    //         setProducts(updatedProducts);

    //         if (checked) {
    //           dispatch(addToAdminCart(updatedProducts)); // Dispatch all selected products to admincart
    //         } else {
    //           dispatch(setAllProducts([])); // Clear the admincart if all checkboxes are unchecked
    //         }
    //       }}
    //       checked={products.every((product) => product.selected)}
    //       />
    //       ),
    //       width: "5%",
    //       render: (_, record) => (
    //     <Checkbox
    //       checked={record.selected}
    //       onChange={(e) => handleCheckboxChange(record, e.target.checked)}
    //     />
    //   ),
    // },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "10%",
      render: (image) => (
        <Image src={image} alt="Product" width={60} height={60} />
      ),
    },

    {
      title: "productId",
      dataIndex: "productId",
      key: "id",
      width: "16%",
      ...getColumnSearchProps("productId"),
      render: (productId) => `${productId}`,
    },
    {
      title: "availableQuantity",
      dataIndex: "availableQuantity",
      key: "availableQuantity",
      width: "10%",
      render: (availableQuantity) => `${availableQuantity}`,
    },
    {
      title: "unit",
      dataIndex: "unit",
      key: "unit",
      width: "10%",
      render: (unit) => `${unit}`,
    },
        {
      title: "Action",
      key: "action",
      width: "8%",
      render: (text, record) => (
        <Space size="middle">
          <button onClick={() => showModalForEdit(record)}>
            <EditOutlined /> Edit
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <header className="flex justify-between items-center mt-4  ">
        <h1 className="font-bold text-2xl">Inventory</h1>

        <div className="flex gap-3 px-5">
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
            // className="md:text-sm bg-black text-white rounded-md px-8 py-2"
            
            className="bg-black text-white rounded-md px-8 py-2 "
            onClick={AddNewInventory}
          >
            Add Inventory
          </button>
        </div>
        <Modal
          open={openExportModal}
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
              onClick={handleOk}
            >
              Export Products
            </Button>,
          ]}
        >
          <hr></hr>
          <div className="mt-5 mb-5">
            <p>
              This CSV file can update all product information. To update just
              inventory quantities use the{" "}
              <Link href="/" className="text-blue-500 underline">
                CSV file for inventory.
              </Link>
            </p>

            <div className="m-5">
              <div className="mb-5">
                <Space direction="vertical">
                  <h5>Export</h5>

                  <Radio.Group
                    onChange={onChangeRadio1}
                    value={radio1}
                    defaultValue="A"
                  >
                    <Space direction="vertical">
                      <Radio value="A">Current Page</Radio>
                      <Radio value="B">All products</Radio>
                      <Radio value="C" disabled>
                        Selected:0 products
                      </Radio>
                      <Radio value="D" disabled>
                        1 product matching your search{" "}
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Space>
              </div>
              <div className="mb-5">
                <Space direction="vertical">
                  <h5>Export as</h5>
                  <Radio.Group
                    onChange={onChangeRadio2}
                    value={radio2}
                    defaultValue="E"
                  >
                    <Space direction="vertical">
                      <Radio value="E">
                        CSV for Excel,Numbers,or other spreadsheet programs
                      </Radio>
                      <Radio value="F">Plain CSV file</Radio>
                    </Space>
                  </Radio.Group>
                </Space>
              </div>
            </div>
            <p>
              Learn more about{" "}
              <Link href="/" className="text-blue-400 underline">
                exporting products to CSV file
              </Link>{" "}
              or the{" "}
              <Link href="/" className="text-blue-400 underline">
                bulk editor.
              </Link>
            </p>
          </div>
          <hr></hr>
        </Modal>
        <Modal
          title="Title"
          open={openEditModal}
          onCancel={handleCancelForEdit}
          footer={[
            <button
              key="save"
              className="bg-black text-white px-8 py-2 rounded-lg"
              onClick={handleSaveForEdit}
            >
              Save
            </button>,
          ]}
        >
          <div className="">
            <Form layout="vertical">
              <Form.Item label="Product Id">
                <Input
                  value={editedData.id}
                  onChange={(e) =>
                    setEditedData({ ...editedData, productId: e.target.value })
                  }
                />
              </Form.Item>

              <Form.Item
                label="Unit"
                rules={[
                  {
                    required: true,
                    message: "Please input Unit!",
                  },
                ]}
              >
                  <Select
                        className="rounded-md border-none"
                        placeholder="Select a option for UNIT"
                        value={editedData.unit}
                        onChange={(value) =>
                          setEditedData({ ...editedData, unit: value })
                        }
                        // name="unit"
                        allowClear
                      >
                        <Option value="kg">KG</Option>
                        <Option value="piece">PIECE</Option>
                      </Select>
                    </Form.Item>
                  <Form.Item label="Available Quantity">
                    <Input
                      value={editedData.availableQuantity}
                      onChange={(e) =>
                        setEditedData({ ...editedData, availableQuantity: e.target.value })
                      }
                    />
                  </Form.Item>
            </Form>
          </div>
        </Modal>
      </header>
      <br />
      <div>
        <button className="border-2 rounded-lg p-3">
          {selectedCount} Items Added to Cart
        </button>
      </div>
      <Table
        className="mt-5 mr-3"
        columns={columns}
        dataSource={inventory}
        pagination={false}
        scroll={{ x: 800, y: 4000 }}
      />
    </div>
  );
};
 
export default Inventory;






// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { SearchOutlined, ArrowLeftOutlined,EditOutlined } from "@ant-design/icons";
// import { Button, Input, Space, Table, Modal } from "antd";
// import Highlighter from "react-highlight-words";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Radio } from "antd";
// import ImportButton from "../importButton";
// import Image from "next/image";
// import axios from "@/Api/axios";
// import { useDispatch } from "react-redux";

// const Inventory = () => {
//   const [products, setProducts] = useState([]);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [editedData, setEditedData] = useState({});
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [openExportModal, setOpenExportModal] = useState(false);

//   // const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get("/getAllInventory");
//         console.log("products", result);
//         setProducts(result.data);
//         // dispatch(setAllProducts(result.data));
//         // console.log(result.data)
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const router = useRouter();
//   const [radio1, setradio1] = useState(1);
//   const onChangeRadio1 = (e) => {
//     console.log("radio checked", e.target.value);
//     setradio1(e.target.value);
//   };
//   const [radio2, setradio2] = useState(1);
//   const onChangeRadio2 = (e) => {
//     console.log("radio checked", e.target.value);
//     setradio2(e.target.value);
//   };

//   const Products = () => {
//     router.push("/admin/products");
//   };

//   const [searchText, setSearchText] = useState("");
//   const [searchedColumn, setSearchedColumn] = useState("");
//   // const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const searchInput = useRef(null);

//   // const showModal = () => {
//   //   setOpen(true);
//   // };
//   const showModalForEdit = (record) => {
//     setOpen(true);
//     setOpenEditModal(true);
//     console.log("Editing product:", record);
//     setEditingProduct(record);
//     setEditedData(record);
//     setImageUrl(record.image);
//   };
//   const handleSaveForEdit = () => {
//     console.log("Saving edited data:", editedData);
//     setEditingProduct(null);
//     setEditedData({});
//     putRequest(editedData); //here put api is hitting
//     setOpenEditModal(false);
//   };
//   const handleOk = () => {
//     // setLoading(true);
//     setTimeout(() => {
//       // setLoading(false);
//       setOpen(false);
//     }, 3000);
//   };

//   const handleCancel = () => {
//     setOpen(false);
//   };

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText("");
//   };

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({
//       setSelectedKeys,
//       selectedKeys,
//       confirm,
//       clearFilters,
//       close,
//     }) => (
//       <div
//         style={{
//           padding: 8,
//         }}
//         onKeyDown={(e) => e.stopPropagation()}
//       >
//         <Input
//           ref={searchInput}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) =>
//             setSelectedKeys(e.target.value ? [e.target.value] : [])
//           }
//           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{
//             marginBottom: 8,
//             display: "block",
//           }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{
//               width: 90,
//             }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => clearFilters && handleReset(clearFilters)}
//             size="small"
//             style={{
//               width: 90,
//             }}
//           >
//             Reset
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               confirm({
//                 closeDropdown: false,
//               });
//               setSearchText(selectedKeys[0]);
//               setSearchedColumn(dataIndex);
//             }}
//           >
//             Filter
//           </Button>
//           <Button type="link" size="small" onClick={() => close()}>
//             close
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered) => (
//       <SearchOutlined
//         style={{
//           color: filtered ? "#1677ff" : undefined,
//         }}
//       />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
//     onFilterDropdownOpenChange: (visible) => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//     render: (text) =>
//       searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{
//             backgroundColor: "#ffc069",
//             padding: 0,
//           }}
//           searchWords={[searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ""}
//         />
//       ) : (
//         text
//       ),
//   });

//   const columns = [
//     {
//       title: "productId",
//       dataIndex: "productId",
//       key: "id",
//       width: "16%",
//       ...getColumnSearchProps("productId"),
//       render: (productId) => `${productId}`,
//     },
//     {
//       title: "availableQuantity",
//       dataIndex: "availableQuantity",
//       key: "availableQuantity",
//       width: "10%",
//       render: (availableQuantity) => `${availableQuantity}`,
//     },
//     {
//       title: "unit",
//       dataIndex: "unit",
//       key: "unit",
//       width: "10%",
//       render: (unit) => `${unit}`,
//     },
//         {
//       title: "Action",
//       key: "action",
//       width: "8%",
//       render: (text, record) => (
//         <Space size="middle">
//           <button onClick={() => showModalForEdit(record)}>
//             <EditOutlined /> Edit
//           </button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <>
//       <header className="flex justify-between mt-4 ">
//         <h1 className="font-bold text-2xl">
//           <ArrowLeftOutlined onClick={Products} />
//           &nbsp;&nbsp;Inventory
//         </h1>

//         <div className="flex gap-3">
//           <button
//             style={{
//               backgroundColor: "#E3E3E3",
//               borderRadius: "5px",
//               padding: "8px 15px 8px 15px",
//             }}
//             onClick={showModal}
//           >
//             Export
//           </button>
//           <ImportButton />
//           <button
//             key="link"
//             className="bg-black text-white rounded-md w-24 mr-2 h-10"
//             style={{
//               padding: "8px 15px 8px 15px",
//             }}
//             // loading={loading}
//             onClick={Products}
//           >
//             View Product
//           </button>
//         </div>
//       </header>

//       <div className="bg-white p-2 rounded-lg mt-6 mr-3">
//         <div className="h-8 p-1">
//           <button className="rounded-lg w-10 font-semibold text-xs hover:bg-gray-100">
//             All
//           </button>
//           <button className="rounded-lg w-6 font-semibold hover:bg-gray-100">
//             +
//           </button>
//         </div>

//         <Table
//           className="mr-3"
//           columns={columns}
//           dataSource={products}
//           pagination={false}
//         />
//       </div>

//       <Modal
//         open={open}
//         title="Export products"
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="back" className="shadow-lg" onClick={handleCancel}>
//             Cancel
//           </Button>,
//           <Button
//             key="Cancel"
//             className="bg-black text-white"
//             onClick={handleOk}
//           >
//             Export Products
//           </Button>,
//         ]}
//       >
//         <hr />
//         <div className="mt-5 mb-5">
//           <p>
//             This CSV file can update all product information. To update just
//             inventory quantities use the{" "}
//             <Link href="/" className="text-blue-500 underline">
//               CSV file for inventory.
//             </Link>
//           </p>
//           <div className="m-5">
//             <div className="mb-5">
//               <Space direction="vertical">
//                 <h5>Export</h5>
//                 <Radio.Group
//                   onChange={onChangeRadio1}
//                   value={radio1}
//                   defaultValue="A"
//                 >
//                   <Space direction="vertical">
//                     <Radio value="A">Current Page</Radio>
//                     <Radio value="B">All products</Radio>
//                     <Radio value="C" disabled>
//                       Selected:0 products
//                     </Radio>
//                     <Radio value="D" disabled>
//                       1 product matching your search
//                     </Radio>
//                   </Space>
//                 </Radio.Group>
//               </Space>
//             </div>
//             <div className="mb-5">
//               <Space direction="vertical">
//                 <h5>Export as</h5>
//                 <Radio.Group
//                   onChange={onChangeRadio2}
//                   value={radio2}
//                   defaultValue="E"
//                 >
//                   <Space direction="vertical">
//                     <Radio value="E">
//                       CSV for Excel,Numbers,or other spreadsheet programs
//                     </Radio>
//                     <Radio value="F">Plain CSV file</Radio>
//                   </Space>
//                 </Radio.Group>
//               </Space>
//             </div>
//           </div>
//           <p>
//             Learn more about{" "}
//             <Link href="/" className="text-blue-400 underline">
//               exporting products to CSV file
//             </Link>{" "}
//             or the{" "}
//             <Link href="/" className="text-blue-400 underline">
//               bulk editor.
//             </Link>
//           </p>
//         </div>
//         <hr />
//       </Modal>
//     </>
//   );
// };

// export default Inventory;
