"use client"
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setCreateProduct } from "@/components/redux/slices/addProductSlice";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

const ProductTitle = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
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
    <Form
      requiredMark={false}
      className="border-2 font-semibold bg-white w-full shadow-md px-8 py-5 rounded-xl"
      layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Title"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input Title of the product!",
          },
        ]}
      >
        <Input
          name="name"
          placeholder="Short sleeve t-shirt"
          className="border border-black"
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextArea
          name="description"
          rows={5}
          className="border border-black"
          placeholder="Mention the description of your Product here!"
          onChange={handleInputChange}
        />
      </Form.Item>
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
    </Form>
  );
};

export default ProductTitle;
