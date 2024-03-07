import React from "react";
import { Button, Input, Space,Col,Checkbox, Row,Table, Form ,Tag, Modal } from "antd";

const Pricing = () => {
  return (
    <>
      <div>
        <h1 className="text-md font-semibold mt-1">Pricing</h1>
      </div>
      <Form
      requiredMark={false}
        layout="vertical"
        labelCol={{
          span: 20,
        }} >
        <Row gutter={30}>
        <Col span={8}>
        <Form.Item
      label="Price"
      name="price"
      rules={[
        {
          required: true,
          message: 'Please input Title of the product!',
        },
      ]}
    >
      <Input placeholder="₹0.00" className="border border-black"/>
    </Form.Item>
    </Col>
    <Col span={8}>
        <Form.Item
      label="Compare-at price"
      name="compare-at price"
      rules={[
        {
          required: true,
          message: 'Please input Title of the product!',
        },
      ]}
    >
      <Input placeholder="₹0.00" className="border border-black"/>
    </Form.Item>
    </Col>
    </Row>
    <Form.Item
      name="remember"
    >
      <Checkbox>Charge tax on this product</Checkbox>
    </Form.Item>
    <Row gutter={30}>
            <Col span={8}>
        <Form.Item
      label="Cost per item"
      name="cost-per-item"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input Title of the product!',
    //     },
    //   ]}
    >
      <Input placeholder="₹0.00" className="border border-black"/>
    </Form.Item>
    </Col>
    <Col span={8}>
        <Form.Item
      label="Profit"
      name="profit "
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input Title of the product!',
    //     },
    //   ]}
    >
      <Input placeholder="--" className="border border-black"/>
    </Form.Item>
    </Col>
    <Col span={8}>
        <Form.Item
      label="Margin"
      name="margin"
    //   rules={[
    //     {
    //       required: true,
    //       message: 'Please input Title of the product!',
    //     },
    //   ]}
    >
      <Input placeholder="--" className="border border-black"/>
    </Form.Item>
    </Col>
    </Row>
      </Form>
    </>
  );
};

export default Pricing;
