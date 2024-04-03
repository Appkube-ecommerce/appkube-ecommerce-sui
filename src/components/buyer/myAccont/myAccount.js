import React from "react";
import { EditOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
const MyAccountPage = () => {
  return (
    <main>
      <div className="bg-white">
        <div className="flex gap-1">
          <h1 className="font-semibold text-2xl">Profile Details</h1>
          <EditOutlined />
        </div>
        <div className="text-lg m-3">
          <h1>Maimuna Gulafshan</h1>
          <h1>
            <MailOutlined className="" />
            maimunagulafshan1@gmail.com
          </h1>
          <h1>
            <PhoneOutlined />
            +91 9876509855
          </h1>
        </div>
      </div>

      <bottom className="pt-10">
       <h1 className="font-semibold text-2xl">My Orders</h1>
       <div>
        
       </div>
      <hr />
      
      </bottom>
    </main>
  );
};

export default MyAccountPage;
