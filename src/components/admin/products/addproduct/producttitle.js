"use client";
import React from "react";
import { Form, Input, Select } from "antd";
const { TextArea } = Input;
const Producttitle = () => {
  return (
    <Form
      requiredMark={false}
      className="border-2 font-semibold bg-white w-full shadow-md px-8 py-5  rounded-xl"
      layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
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
            message: "Please input Title of the product!",
          },
        ]}
      >
        <Input
          placeholder="Short sleeve t-shirt"
          className="border border-black"
        />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea
          rows={5}
          className="border border-black"
          placeholder="Mention the description of your Porduct here!"
        />
      </Form.Item>
    </Form>
  );
};

export default Producttitle;
