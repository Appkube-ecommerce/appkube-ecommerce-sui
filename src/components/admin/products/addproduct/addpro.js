"use client";
import React from "react";
import Status from "./status";
import { Button, Checkbox, Form, Input, message, Upload } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import UploadMediafun from "./uploadMedia";
import Pricing from "./pricing";
import Publishing from "./publishing";
import { useRouter } from "next/navigation";
import Producttitle from "./producttitle";

const Addproduct = () => {
  const backToProducts = () => {
    router.push("/admin/products");
  };
  const router = useRouter();
  return (
    <div className="p-8 flex flex-col ">
      <header className="flex gap-5">
        <ArrowLeftOutlined
          className="text-lg font-semibold"
          onClick={backToProducts}
       />
        <h1 className="font-bold text-2xl">Add Product</h1>
      </header>
      <main className="flex gap-8 justify-center">
        <sectionleft className="w-[50%]">
            <Producttitle />
            <UploadMediafun />
            <Pricing />
         
        </sectionleft>
        <sectionright className="w-[25%]">
        <Status />
        <Publishing />
        </sectionright>
      </main>
    </div>
  );
}
export default Addproduct;
