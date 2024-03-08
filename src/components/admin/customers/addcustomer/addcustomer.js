// 




"use client";
import React from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Space,
  Select,
  Row,
  Col,
  Checkbox,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import UploadMediafun from './uploadMedia';
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 9,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 15,
    },
  },
};

const AddCustomer = () => (
  <div>
    <header className="p-8">
      <h1 className="font-bold text-xl">New Customer</h1>
    </header>
    <hr />
    <div className="p-16 flex">
      <Col span={8}>
        <h3 className="font-semibold">  Customer Overview</h3>
      </Col>

      <Col span={16}>
        <div className="bg-white rounded-md p-12">
          <Row gutter={12}>
            <Col span={12}>
            
              <Form.Item
                label="First Name"
                name="pfNumber"
                rules={[
                  { message: "Enter Your PF Number" },
                  {
                    message: "Please enter at least 5 digits for PF number.",
                  },
                ]}
              >
                <Input
                  placeholder="First Name"
                  name="pfNumber"
                  type="text"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="uanNumber"
                rules={[
                  { message: "Enter Your UAN Number" },
                  {
                    message: "Please enter at least 5 digits for UAN number.",
                  },
                ]}
              >
                <Input
                  name="uanNumber"
                  placeholder="Last Name "
                  type="text"
                />
              </Form.Item>
            </Col>
          </Row>

          {/* More Form.Item components go here */}

          <Form.Item
            label="Select language"
            name="Select"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select>
              <Select.Option value="english">English(default)</Select.Option>
            </Select>
          </Form.Item>

          {/* More Form.Item components go here */}

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* More Form.Item components go here */}

          <Form.Item
            label="InputNumber"
            name="InputNumber"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          {/* More Form.Item components go here */}

          <Checkbox>
            Customer agreed to receive marketing emails.
          </Checkbox>
          <Checkbox>
            Customer agreed to receive SMS marketing text messages.
          </Checkbox>
          <p>
            You should ask your customers for permission before you subscribe
            them to your marketing emails or SMS.
          </p>
        </div>
      </Col>
    </div>
    <hr></hr>
    <div className="p-16 flex">
      <Col span={8}>
        <h3 className="font-semibold">Address</h3>
        <p>The primary address of this customer</p>
      </Col>

      <Col span={16}>
        <div className="bg-white rounded-md p-12">
          <Row gutter={12}>
            <Col span={12}>
            
              <Form.Item
                label="First Name"
                name="pfNumber"
                rules={[
                  { message: "Enter Your PF Number" },
                  {
                    message: "Please enter at least 5 digits for PF number.",
                  },
                ]}
              >
                <Input
                  placeholder="First Name"
                  name="pfNumber"
                  type="text"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="uanNumber"
                rules={[
                  { message: "Enter Your UAN Number" },
                  {
                    message: "Please enter at least 5 digits for UAN number.",
                  },
                ]}
              >
                <Input
                  name="uanNumber"
                  placeholder="Last Name "
                  type="text"
                />
              </Form.Item>
            </Col>
          </Row>

          {/* More Form.Item components go here */}

          <Form.Item
            label="Select language"
            name="Select"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select>
              <Select.Option value="english">English(default)</Select.Option>
            </Select>
          </Form.Item>

          {/* More Form.Item components go here */}

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* More Form.Item components go here */}

          <Form.Item
            label="InputNumber"
            name="InputNumber"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          {/* More Form.Item components go here */}

          <Checkbox>
            Customer agreed to receive marketing emails.
          </Checkbox>
          <Checkbox>
            Customer agreed to receive SMS marketing text messages.
          </Checkbox>
          <p>
            You should ask your customers for permission before you subscribe
            them to your marketing emails or SMS.
          </p>
        </div>
      </Col>
    </div>
    <hr></hr>
    <div className="p-16 flex">
      <Col span={8}>
        <h3 className="font-semibold"></h3>
      </Col>

      <Col span={16}>
        <div className="bg-white rounded-md p-12">
          <Row gutter={12}>
            <Col span={12}>
            
              <Form.Item
                label="First Name"
                name="pfNumber"
                rules={[
                  { message: "Enter Your PF Number" },
                  {
                    message: "Please enter at least 5 digits for PF number.",
                  },
                ]}
              >
                <Input
                  placeholder="First Name"
                  name="pfNumber"
                  type="text"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="uanNumber"
                rules={[
                  { message: "Enter Your UAN Number" },
                  {
                    message: "Please enter at least 5 digits for UAN number.",
                  },
                ]}
              >
                <Input
                  name="uanNumber"
                  placeholder="Last Name "
                  type="text"
                />
              </Form.Item>
            </Col>
          </Row>

          {/* More Form.Item components go here */}

          <Form.Item
            label="Select language"
            name="Select"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select>
              <Select.Option value="english">English(default)</Select.Option>
            </Select>
          </Form.Item>

          {/* More Form.Item components go here */}

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* More Form.Item components go here */}

          <Form.Item
            label="InputNumber"
            name="InputNumber"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          {/* More Form.Item components go here */}

          <Checkbox>
            Customer agreed to receive marketing emails.
          </Checkbox>
          <Checkbox>
            Customer agreed to receive SMS marketing text messages.
          </Checkbox>
          <p>
            You should ask your customers for permission before you subscribe
            them to your marketing emails or SMS.
          </p>
        </div>
      </Col>
    </div>
    <hr></hr>
  </div>
);

export default AddCustomer;
