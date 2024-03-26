'use client'
import React, { useState } from 'react';
import { Card, Button, Modal, Radio, Steps } from 'antd';
import Image from 'next/image';
import pro from "../../../../components/admin/images/product.svg";

const { Step } = Steps;

const DeliveryOption = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const dates = [];
  const currentDate = new Date();
  for (let i = 0; i < 5; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    dates.push(nextDate.toISOString().slice(0, 10));
  }

  const slotTimings = {
    allSlots: 'Any Time',
    eveningSlots: '6pm - 8pm',
    morningSlots: '9am - 11am',
    afternoonSlots: '1pm - 3pm'
  };

  return (
    <div className='w-full'>
      <Card title="Select a Delivery Option" className='w-[70%]'>
        <div className='w-[100%] mb-3'>
          <Card type="inner">
            <div className='flex'>
              <Card className='w-[10%] h-[10%]'><Image alt="example" src={pro} /></Card>
              <Card className='w-[10%] h-[10%]'><Image alt="example" src={pro} /></Card>
              <Card className='w-[10%] h-[10%]'><Image alt="example" src={pro} /></Card>
              
            </div>
          </Card>
          <Card>
            <div className='grid grid-cols-3'>
              <p> Delivery Slot</p>
              <div className='w-[1px] h-full bg-gray-200'></div>
              <div>
                <p onClick={() => handleDateSelect(selectedDate || dates[0])} className='cursor-pointer'>Selected Date: {selectedDate || dates[0]}</p>
                <p>Selected Slot: {selectedSlot && slotTimings[selectedSlot]}</p>
              </div>
            </div>
          </Card>
          <Button type="primary" danger className='float-end mt-3'>Proceed To pay</Button>
        </div>
      </Card>

      {/* Modal for selecting date and slot */}
      <Modal
        title="Select Date and Slot"
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>Cancel</Button>,
          <Button key="submit" type="primary" onClick={handleCloseModal}>Submit</Button>
        ]}
      >
        <div>
          <p>Select Date:</p>
          <div>
            {dates.map(date => (
              <Button key={date} onClick={() => handleDateSelect(date)}>{date}</Button>
            ))}
          </div>
        </div>
        <div>
          <p>Select Slot:</p>
          <Radio.Group value={selectedSlot} onChange={(e) => handleSlotSelect(e.target.value)}>
            {Object.entries(slotTimings).map(([slot, timing]) => (
              <Radio key={slot} value={slot}>{timing}</Radio>
            ))}
          </Radio.Group>
        </div>
      </Modal>
      
    </div>
  );
};

export default DeliveryOption;
