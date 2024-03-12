"use client";
import React from "react";
import { Button, DatePicker, Form, TimePicker } from "antd";
const { RangePicker } = DatePicker;
import Link from "next/link";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: "object",
      message: "Please select time!",
    },
  ],
};
const Publishing = () => {
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "YYYY-MM-DD HH:mm:ss"
      ),
    };
    console.log("Received values of form: ", values);
};

  return (
    <div className="border-2 shadow-md h-[20rem] bg-white px-8 pt-3 mt-5 rounded-xl">
      <h1 className="text-md font-semibold mt-1">Publishing</h1>
      <p className="font-semibold">Sales channels</p>

      <ul>
        <li type="circle">
          Online Store
          <Form
            name="time_related_controls"
            {...formItemLayout}
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item
              labelWrap
              name="date-time-picker"
              label="Schedule"
              {...config}
            >
              <DatePicker
                showTime={{ format: "HH:mm:ss" }}
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Enter the date and time"
              />
            </Form.Item>
          </Form>
        </li>
        <li type="circle">
          Point of Sale
          <p>
            Point of Sale has not been set up. Finish the remaining steps to
            start selling in person.
          </p>
        </li>
        <Link href="/" className="text-blue-600 underline">
          Learn more
        </Link>
      </ul>
   <br />
      <p className="font-semibold">Markets</p>
      <ul>
        <li type="circle">India and International</li>
      </ul>
    </div>
  );
};
export default Publishing;
