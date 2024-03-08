import React, { useState } from 'react';
import { Button, Modal, Radio } from 'antd';

const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exportOption, setExportOption] = useState('option1');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleExportOptionChange = (e) => {
    setExportOption(e.target.value);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="rounded-lg font-medium w-16 text-xs h-6 bg-gray-300 text-slate-800 hover:bg-slate-300"
      >
        Export
      </button>
      <Modal
        visible={isModalOpen}
        onCancel={handleCancel}
        style={{ padding: 0 }}
        footer={[
          <div key="buttons" style={{ display: 'flex' }} className='justify-center items-end gap-1 mt-6 ml-28'>
            <button className="shadow-lg h-7 rounded-lg border border-gray-200 w-18 px-2" onClick={handleCancel}>
              Cancel
            </button>
            <button className="shadow-lg rounded-lg border border-gray-200 w-48 h-7 px-2">
              Export transaction histories
            </button>
            <button className="bg-gray-800 text-white rounded-lg h-7 w-30 px-2">
              Export orders
            </button>
          </div>
        ]}
      >
        <div className='h-10 w-full font-semibold text-slate-800 border-b'>
          <h2 className='text-base font-semibold'>Export Orders</h2>
        </div>
        <div className='py-4'>
          <div>
            <p className='font-medium text-slate-800'>Export</p>
            <div onChange={handleExportOptionChange} value={exportOption} className='mt-2'>
              <Radio value='option1'>Current page</Radio><br/>
              <Radio value='option2'>All orders</Radio><br/>
              <Radio value="C" disabled>Selected: 0 products</Radio><br/>
              <Radio value="D" disabled>50+ orders matching your search</Radio><br/>
              <Radio value='option3'>Orders by date</Radio>
            </div>
          </div>
          <div className='mt-4'>
            <p className='font-medium text-slate-800'>Export as</p>
            <div onChange={handleExportOptionChange} value={exportOption} className='mt-2'>
              <Radio value='option1'>CSV for excel, Numbers, or other spreadsheet programs</Radio><br/>
              <Radio value='option2'>Plain CSV file</Radio>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
