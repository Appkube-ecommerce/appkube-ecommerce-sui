"use client"
import React from 'react';
import { Button, Checkbox, Form, Input,message,Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import UploadMediafun from './uploadMedia'; 
const { TextArea } = Input;

const Addproduct = () => (
  <>
  <header>
    <h1 className="font-bold text-2xl">Add Customer</h1>
    </header>
  <Form
   requiredMark={false}
  className="border-2 font-semibold bg-white shadow-md px-8 py-5 mt-6 rounded-xl"
  layout="vertical"
    name="basic"
    labelCol={{
      span: 8,
    }}
    // wrapperCol={{
    //   span: 16,
    // }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    // autoComplete="off"
  >
    <Form.Item
      label="Title"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input Title of the product!',
        },
      ]}
    >
      <Input placeholder="Short sleeve t-shirt" className="border border-black"/>
    </Form.Item>
     <Form.Item label="Description">
          <TextArea rows={5} className="border border-black" placeholder="Mention the description of your Porduct here!"/>
        </Form.Item>
  </Form>
  <div className="border-2 shadow w-[37.5rem] h-[12rem] bg-white px-8 pt-3 rounded-xl">
  <UploadMediafun/>
  </div>
  </>
);
export default Addproduct;