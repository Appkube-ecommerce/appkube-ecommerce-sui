import React from "react";
import { Modal, Button } from "antd";

const LogoutConfirmation = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      open={visible}
      title="Logout"
      centered
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel} style={{ border: "1px solid black", width: "80px" }} className="">
          Cancel
        </Button>,
        <Button key="confirm" onClick={onConfirm} style={{ backgroundColor: "red", color: "white", width: "50px" }} className="mr-40 mt-4">
          Yes
        </Button>,
      ]}
    >
      <p style={{ textAlign: "center", fontWeight: "bold" }} className="text-base mt-4">Are you sure you want to log out?</p>
    </Modal>
  );
};

export default LogoutConfirmation;
