
import React, { useState } from "react";
import { Button, Input, message, Upload } from "antd";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const OrderInfo = () => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  
  const backToOrders = () => {
    router.push("/admin/orders");
  };

  // const handlePostComment = () => {
  //   // Handle logic to post the comment (you can customize this part)
  //   if (comment.trim() !== "") {
  //     // Logic to handle the comment (e.g., send to server, update state, etc.)
  //     message.success("Comment posted successfully!");
  //     setComment(""); // Clear the comment input after posting
  //   } else {
  //     message.warning("Please enter a comment before posting.");
  //   }
  // };

  return ( 
    <>
  <div className="p-8"> 
  <header className="flex gap-5">
  <ArrowLeftOutlined className="text-lg font-semibold" onClick={backToOrders}/>
    <h1 className="font-bold text-2xl"></h1>
    </header>
    </div>


<div className='flex gap-5'>

<div>
      <div className="border-2 shadow-md w-[37.5rem] h-72 bg-white rounded-xl p-4">
        <div></div>
        <div className='border border-slate-200 h-44 rounded-md'>
        <div className='border-b h-14'></div>
        <div className='border-b h-14'></div>
        <div className='h-14'></div></div>
        <div className='flex justify-end mt-2'>
  <button className="bg-gray-800 text-white rounded-lg h-7 w-30 px-2 text-sm">
    Add tracking
  </button>
</div>

      </div>
      <div className="border-2 shadow-md w-[37.5rem] h-48 bg-white p-4 mt-5 rounded-xl">
      <div className='border border-slate-200 rounded-md'>
      <div className='border-b h-16'></div>
        <div className=' h-12'></div>
        </div>
      </div>
      <div className='mt-8'>
      <p className='font-semibold text-base ml-4 text-slate-800 mb-2'>Timeline</p>
      <div className="border-2 shadow-md w-[37.5rem] h-40 bg-white rounded-xl">
      <div className="flex flex-col mt-4 space-y-4 items-end">
              
              <Input
                placeholder="Leave a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='border-none hover:border-0  h-16 w-full'
              />
                <div className="bg-slate-50 flex justify-end h-full w-full"> {/* Use flex justify-end */}
    <button
      className="bg-gray-200 text-gray-400 font-semibold rounded-md h-6 w-12 border-0 mt-4 mb-4 mr-3"
      //onClick={handlePostComment}
    >
      Post
    </button>
  </div>
            </div>
        </div>
        </div>
      <p className='text-slate-400 text-end'>Only you and other staff can see comments</p>
</div>

<div>
      <div className="border-2 shadow-md w-80 h-20 bg-white p-2 rounded-xl text-slate-800">
        <div className='flex justify-between w-full'>
        <p className='font-semibold text-slate-800'>Notes</p>
      <div><EditOutlined /></div>
        
        </div>
        <div className='text-slate-800 py-2'>No notes from customer</div>
      </div>

      <div className="border-2 shadow-md w-80 h-72 bg-white mt-5 rounded-xl p-2 font-semibold text-slate-800">
       <div><p className='font-semibold text-slate-800'>Customer</p></div> 
       <div className="mt-4">
    <input
      type="text"
      placeholder="Search or create a customer"
      className="border-2 border-gray-300 px-2 py-1 rounded-md w-full"
    />
  </div>
      </div>
      <div className="border-2 shadow-md w-80 h-36 bg-white p-2 mt-5 rounded-xl">
        <p className='font-semibold text-slate-800 h-10'>Conversion summary</p>
        <p className='text-slate-800 h-10'>There aren't any conversion details available for this order.</p>
        <a className='text-sky-500 font-semibold'>Learn more</a>
      </div>
      <div className="border-2 shadow-md w-80 h-44 bg-white p-2 mt-5 rounded-xl font-semibold text-slate-800">Fraud analysis</div>
</div>

</div>
  </>
)
};
export default OrderInfo;