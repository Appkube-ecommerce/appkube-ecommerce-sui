"use client"
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setCreateProduct } from "@/components/redux/slices/addProductSlice";
import { Form, Input, Button, Col } from "antd";

const Pricing = () => {
  const [formData, setFormData] = useState({
    category: '',
    unit: '',
    price: ''
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    dispatch(setCreateProduct(formData));
  };

  return (
    <div className="border-2 shadow-md w-full h-[18rem] bg-white px-8 pt-3 mt-5 rounded-xl">
      <h1 className="text-md font-semibold mt-1">Pricing</h1>
      <Form
        requiredMark={false}
        layout="vertical"
        labelCol={{
          span: 20,
        }}
      >
        <Col>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: 'Please input Category!',
              },
            ]}
          >
            <Input
              name="category"
              placeholder="Category"
              className="border border-black"
              onChange={handleInputChange}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Unit"
            name="unit"
            rules={[
              {
                required: true,
                message: 'Please input Unit!',
              },
            ]}
          >
            <Input
              name="unit"
              placeholder="Unit"
              className="border border-black"
              onChange={handleInputChange}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: 'Please input Price!',
              },
            ]}
          >
            <Input
              name="price"
              placeholder="Price"
              className="border border-black"
              onChange={handleInputChange}
            />
          </Form.Item>
        </Col>
      </Form>
      <div className="flex justify-center">
        <Button
          type="primary"
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "5px",
            padding: "8px 15px",
            width: "40%",
          }}
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
