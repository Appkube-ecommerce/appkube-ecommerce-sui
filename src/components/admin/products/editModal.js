// "use client"
// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// import { EditOutlined } from "@ant-design/icons";

// const EditModal = () => {
//     const [editingProduct, setEditingProduct] = useState(null);
//     const [editedData, setEditedData] = useState({});
//   const [show, setShow] = useState(false);
 
//   const showModalForEdit = (record) => {
//     setOpen(true);
//     console.log("Editing product:", record); 
//     setEditingProduct(record);
//     setEditedData(record);
//   };
//   const isEditing = (record) => record === editingProduct;

//   const handleSaveForEdit = () => {
//     // Perform save logic here
//     console.log("Saving edited data:", editedData);
//     setEditingProduct(null);
//     setEditedData({});
//   };
//   const handleSaveForEdit = () => {
//     console.log("Saving edited data:", editedData);
//     setEditingProduct(null);
//     setEditedData({});
//   };
//   const handleCancel = () => {
//     console.log('Clicked cancel button');
//     setOpen(false);
//   };
//   return (
//     <>
//     <button onClick={() => showModal(record)}>
//        <EditOutlined /> Edit</button>
//       <Modal
//         title="Title"
//         open={open}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//       >
//         <p>opened successfully</p>
//       </Modal>
//     </>
//   );
// };
// export default EditModal;