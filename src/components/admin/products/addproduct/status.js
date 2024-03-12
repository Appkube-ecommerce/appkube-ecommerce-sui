"ue client"
import React from "react";
import {Form,Select} from "antd"
const Status = () => {
  return (
    <div>
      <div className="border-2 shadow-md h-[6.75rem] bg-white px-8 pt-3 rounded-xl">
        <h1 className="text-md font-semibold mt-1">Status</h1>{" "}
        <Form className="mt-2 border-black">
          {" "}
          <Form.Item>
            <Select>
              <Select.Option value="demo">Active</Select.Option>{" "}
              <Select.Option value="demo">Draft</Select.Option>{" "}
            </Select>{" "}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Status;
