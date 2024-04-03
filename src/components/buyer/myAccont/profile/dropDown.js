import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Dropdown, Space, Menu } from 'antd';
import { useRouter } from 'next/navigation'; 
import Link from "next/link";
import LogoutConfirmation from "./logout";

const Header = ({ onSearch }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false); 
  const router = useRouter(); // Initialize useRouter

  const handleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen); 
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const DropDown = () => (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key="0">
            <Link href="/buyer/myAccount">My Account</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link href="buyer/myAccount/myOrders">My Orders</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <button>Logout</button>
          </Menu.Item>
        </Menu>
      }
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <MdAccountCircle />
        </Space>
      </a>
    </Dropdown>
  );

  return (
    <header>
      <DropDown onClick={handleDropdown}/>
    </header>
  );
};

export default Header;
