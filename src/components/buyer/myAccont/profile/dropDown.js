import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Dropdown, Space, Menu, message } from 'antd';
import { useRouter } from 'next/navigation'; // Correct import statement for useRouter
import Link from "next/link";
import LogoutConfirmation from "./logout";

const DropdownComponent = ({ onSearch }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false); 
  const [logoutModalVisible, setLogoutModalVisible] = useState(false); // State for logout modal visibility
  const router = useRouter(); // Initialize useRouter

  const handleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen); 
  };

  const handleLogout = () => {
    setLogoutModalVisible(true); 
  };

  const handleCancelLogout = () => {
    setLogoutModalVisible(false); 
  };

  const handleConfirmLogout = () => {
    console.log("Logging out...");
    message.success('Logged out successfully');
    setLogoutModalVisible(false);
  };

  const DropDown = () => (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key="0">
            <Link href="/buyer/myAccount">My Account</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link href="/buyer/myAccount/myOrders">My Orders</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <button onClick={handleLogout}>Logout</button>
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
      {/* Render LogoutConfirmation modal */}
      <LogoutConfirmation 
        visible={logoutModalVisible} 
        onCancel={handleCancelLogout} 
        onConfirm={handleConfirmLogout}
        
      />
    </header>
  );
};

export default DropdownComponent;
