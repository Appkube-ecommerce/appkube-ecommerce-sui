"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Layout, Menu, Button, Input } from "antd";
import Header from "@/components/buyer/home/Header";
import {
  HomeFilled,
  ShoppingCartOutlined,
  TagFilled,
  UserOutlined,
  BellOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;
const { Search } = Input;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [display, setDisplay] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  //   useEffect(() => {

  //     if (pathname === "/admin/orders/summary") {
  //       setDisplay(false);
  //     } else {
  //       setDisplay(true);
  //     }
  // }, [pathname]);

  const onSearch = (value) => console.log(value);

  const items = [
    getItem(
      <Link href={"/buyer/myAccount"}>My Account</Link>,
      "1",
      <UserOutlined />
    ),
    getItem(
      <Link href={"/buyer/myAccount/myOrders"}>My Orders</Link>,
      "4",
      <ShoppingCartOutlined />
    ),
    getItem(
      <Link href={"/buyer/myAccount/logout"}>Logout</Link>,
      "5",
      <BarChartOutlined />
    ),
  ];

  return (
    <div className="w-[70%]">
      <Header />
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          {display && (
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              style={{
                overflow: "auto",
                height: "100vh",
                // position: "fixed",
                // marginTop: "10vh",
                left: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <Menu
                theme="light"
                defaultSelectedKeys={["1"]}
                mode="inline"
                style={{ height: "100%" }}
                items={items}
              />
            </Sider>
          )}
          <Layout className="site-layout flex flex-col">
            <Content style={{ paddingLeft: 10 }}>
              <div className={`${collapsed ? "ml-[80px]" : "ml-[200px]"}`}>
                {children}
              </div>
              {/* <Footer style={{ marginLeft: 200 }}></Footer> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
