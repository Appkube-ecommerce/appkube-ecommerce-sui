"use client";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Form, Input,Button} from "antd";

// const { Option } = Select;

const AddCustomer = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const loading = useSelector((state) => state.customer.loading);
  const error = useSelector((state) => state.customer.error);

  
  // const router = useRouter();
  const backToCustomers = () => {
    router.push("/admin/customers");
  };
  const router = useRouter();
  const onFinish = (values) => {
    e.preventDefault();
    dispatch(createProduct({ name, phone }));
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return( 
  <div>
    <header className="p-8 flex gap-3">
    <ArrowLeftOutlined
          className="text-lg font-semibold"
          onClick={backToCustomers}
       />
      <h1 className="font-bold text-xl">New Customer</h1>
    </header>
    <hr />
    <div className="p-16 md:flex ">
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    requiredMark={false}
    layout="vertical"
    className="w-full m-auto"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Mobile Number"
      name="number"
      rules={[
        {
          required: true,
          message: 'Please input your number',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

     {/* <div>  */}
      {/* <Col span={8}>
        <h3 className="font-semibold">Customer Overview</h3>
      </Col>
      <Col span={16}>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <Form
            layout="vertical"
            requiredMark={false}
            wrapperCol={{ span: 24 }}
          >
            <Row gutter={12}>
              <Col md={{ span: 12 }}>
                <Form.Item
                  label="First Name"
                  name="first-name"
                  rules={[{ required: true, message: "Enter Your First Name" }]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col md={{ span: 12 }}>
                <Form.Item
                  label="Last Name"
                  name="last-name"
                  rules={[
                    { required: true, message: "Enter Your Last Number" },
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Select language"
              name="Select"
              rules={[{ required: true, message: "Please select a language!" }]}
            >
              <Select defaultValue="english">
                <Option value="english">English(default)</Option>
              </Select>
              <p>This customer will receive notifications in this language.</p>
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="InputNumber"
              name="InputNumber"
              rules={[{ required: true, message: "Please input a number!" }]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item>
              <Checkbox>Customer agreed to receive marketing emails.</Checkbox>
              <br />
              <Checkbox>
                Customer agreed to receive SMS marketing text messages.
              </Checkbox>
            </Form.Item>
            <p>
              You should ask your customers for permission before you subscribe
              them to your marketing emails or SMS.
            </p>
          </Form>
        </div>
      </Col>
    </div>
    <hr />
    <div className="p-16 md:flex">
      <Col span={8}>
        <h3 className="font-semibold">Address</h3>
        <p>The primary address of this customer</p>
      </Col>
      <Col span={16}>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <Form
            layout="vertical"
            requiredMark={false}
            wrapperCol={{ span: 24 }}
          >
            <Form.Item
              label="Select language"
              name="Select"
              rules={[{ required: true, message: "Please select a language!" }]}
            >
              <Select defaultValue="India">
                <Option value="India">Country/region</Option>
              </Select>
            </Form.Item>
            <Row gutter={12}>
              <Col md={{ span: 12 }}>
                <Form.Item
                  label="First Name"
                  name="first-name"
                  rules={[{ required: true, message: "Enter Your First Name" }]}
                >
                  <Input name="pfNumber" type="text" />
                </Form.Item>
              </Col>
              <Col md={{ span: 12 }}>
                <Form.Item
                  label="Last Name"
                  name="last-name"
                  rules={[{ required: true, message: "Enter your last name" }]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Company"
              name="company"
              rules={[{ required: true, message: "Please select a language!" }]}
            >
              <Input type="text" />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please input your Address" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Apartment,suite,etc."
              name="apartment"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Row gutter={12}>
              <Col md={{ span: 12 }}>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[{ required: true, message: "Enter Your City" }]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col md={{ span: 12 }}>
                <Form.Item
                  label="State"
                  name="state"
                  rules={[{ required: true, message: "Enter your State" }]}
                >
                  {" "}
                  <Select>
                    <Option value="telangana">Telangana</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="PIN code"
              name="pin-code"
              rules={[
                { required: true, message: "Please input your PIN code!" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  pattern: "",
                  message: "Please input your phone number!",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Form>
        </div>
      </Col>
    </div>
    <hr />
    <div className="p-16 md:flex">
      <Col span={8}>
        <h3 className="font-semibold">Tax exemptions</h3>
      </Col>
      <Col span={16}>
        <div className="bg-white rounded-xl pb-1 px-2 shadow-lg">
          <Form
            layout="vertical"
            requiredMark={false}
            wrapperCol={{ span: 24 }}
          >
            <br />
            <Form.Item>
              <Checkbox>Collect tax</Checkbox>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </div>
    <hr />
    <div className="p-16 md:flex">
      <Col span={8}>
        <h3 className="font-semibold">Notes</h3>
        <p>Notes are private and won't be shared with the customer.</p>
      </Col>
      <Col span={16}>
        <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
          <Form
            layout="vertical"
            requiredMark={false}
            wrapperCol={{ span: 24 }}
          >
            <Form.Item label="Note" name="note">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Col>
    </div>
    <hr />
    <div className="p-16 md:flex">
      <Col span={8}>
        <h3 className="font-semibold">Tags</h3>
        <p>Tags can be used to categorize customers into groups.</p>
      </Col>
      <Col span={16}>
        <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
          <Form
            layout="vertical"
            requiredMark={false}
            wrapperCol={{ span: 24 }}
          >
            <Form.Item label="Tags" name="tags">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Col> */}
    {/* </div> */}
    </div>
    </div>
);
            };

export default AddCustomer;
