'use client'
import React, { useState } from 'react';
import { Card, Button, Modal, Radio, Steps, Popconfirm , Alert, Space} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Image from "next/image"
import pro from "../../../../components/admin/images/product.svg";

const { Step } = Steps;

const DeliveryOption = () => {
  const dates = [];
  const currentDate = new Date();
  for (let i = 0; i < 5; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    dates.push(nextDate.toISOString().slice(0, 10));
  }
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [itemsModalVisible, setItemsModalVisible] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', image: pro },
    { id: 2, name: 'Item 2', image: pro },
    { id: 3, name: 'Item 3', image: pro },
    // Add more items as needed
  ]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCloseItemsModal = () => {
    setItemsModalVisible(false);
  };

  const handleViewItems = () => {
    setItemsModalVisible(true);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className='w-full grid grid-cols-2 gap-10 mr-36 ml-36 bg-slate-50'>
      <div>
      <Card title="Select a Delivery Option">
        <div className='w-[100%]'>
          <Card type="inner" title="">
            <div className='flex mb-3 gap-2'>
              <div className='w-[10%] h-[45%] border rounded-md'><Image src={pro}></Image></div>
              <div className='w-[10%] h-[45%] border rounded-md'><Image src={pro}></Image></div>
              <div className='w-[10%] h-[40%] border rounded-md text-center cursor-pointer hover:bg-slate-200' onClick={handleViewItems}>View items</div>
            </div>
          </Card>
          <Card>
            <div className='grid grid-cols-3'>
              <p> Delivery Slot</p>
              <div className='w-[1px] h-full bg-gray-200'></div>
              <div>
                <p onClick={() => handleDateSelect(selectedDate || dates[0])} className='cursor-pointer'>Select Date: {selectedDate || dates[0]}</p>
                <p>Select Slot: {selectedSlot}</p>
              </div>
            </div>
          </Card>
          <Button type="primary" danger className='float-end mt-3'>Proceed To pay</Button>
        </div>
      </Card>

      {/* Modal for viewing items */}
      <Modal
        title="Items"
        visible={itemsModalVisible}
        onCancel={handleCloseItemsModal}
        footer={[
          <Button key="close" onClick={handleCloseItemsModal}>Close</Button>
        ]}
      >
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Image src={item.image} alt={item.name} height={100} width={100}/>
              <span className="ml-2">{item.name}</span>
            </div>
            <Popconfirm
              title="Are you sure to delete this item?"
              onConfirm={() => handleDeleteItem(item.id)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
            </Popconfirm>
            <Button className="ml-2" >Save for later</Button>
          </div>
        ))}
      </Modal>
    </div>
     <div className=''>
     <Card
     title="Order Summary"
     bordered={false}
     style={{
       width: 300,
     }}
   >
      <Space direction="vertical" style={{ width: '100%' }}>
     <p>Total Amount Payable 345</p>
     <Alert
      message="Success Text"
      description="Success Description "
      type="success"
    />
     <Alert
      
      description="Select your address and delivery slot to know accurate delivery charges. You can save more by applying a voucher!"
      type="warning"
      showIcon
    
    />
    
     </Space>
   </Card>
   
   </div>
   </div>
  );
};

export default DeliveryOption;
