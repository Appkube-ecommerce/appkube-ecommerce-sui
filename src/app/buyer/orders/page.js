"use client"
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  Layout,
  Menu,
  Row,
  Col,
  Button,
  theme,
  Checkbox,
  Form,
  Input,
  DatePicker,
  
} from "antd";

const { Header, Sider, Content } = Layout;

export default function Myorders() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1"); // State to track selected menu item

  const {
    token: { borderRadiusLG, siderBg },
  } = theme.useToken();

  // Function to handle menu item click
  const handleMenuItemClick = (key) => {
    setSelectedMenuItem(key);
  };

  return (
    <>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            style={{ backgroundColor: siderBg,  }}
            className="bg-[#d4d0c9]"
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectedMenuItem]}
            onClick={({ key }) => handleMenuItemClick(key)}
          >
            <Menu.Item
              key="1"
              label="Credit/Debit Card"
              style={{ height: "10%"}} // Set height for Credit/Debit Card item
            >
              Credit/Debit Card
            </Menu.Item>
            <Menu.Item
              key="2"
              label="UPI"
              style={{ height: "50%" }} // Set height for UPI item
            >
              UPI
            </Menu.Item>
          </Menu>
          <Header style={{ padding: 0 }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: "100%",
                backgroundColor: "teal",
              }}
            />
          </Header>
        </Sider>
        <Layout>
          <Content
            className="w-[90%]"
            style={{
              margin: "24px",
              width: 500,
              height: 300,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Render content based on selected menu item */}
            {selectedMenuItem === "1" && (
              <div>
                <Form
                  name="basic"
                  layout="vertical"
                  labelCol={{ span: 8 }}
                  initialValues={{ remember: true }}
                >
                  <Form.Item
                    label="Card Number"
                    name="Card-Number"
                    rules={[
                      { required: true, message: "Enter your card number" },
                    ]}
                  >
                    <Input
                      className="border-none"
                      placeholder="Enter Card Number"
                    />
                    <hr />
                  </Form.Item>
                  <Row>
                    <Col>
                      <Form.Item
                        label="Valid Thru"
                        name="Valid Thru"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <DatePicker
                          className="border-none"
                          placeholder="MM-YY"
                        />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        label="CVV"
                        name="CVV"
                        rules={[
                          {
                            required: true,
                            message: "Enter Your Security code",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <hr />
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                  >
                    <Checkbox>
                      Save this card for faster payments
                    </Checkbox>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType="submit">Submit</Button>
                  </Form.Item>
                </Form>
              </div>
            )}
            {selectedMenuItem === "2" && <div>Content for nav 2</div>}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
