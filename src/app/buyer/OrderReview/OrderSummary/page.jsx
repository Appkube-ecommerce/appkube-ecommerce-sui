'use client'
import React, { useState } from 'react'
import Link from  'next/link'


const OrderSummary = () => {
   // Generate an array of time slots starting from 10 am with 1-hour intervals
   const timeSlots = Array.from({ length: 12 }, (_, index) => {
    const startHour = (index + 10) % 12 || 12;
    const endHour = (index + 11) % 12 || 12;
  
    return {
      label: `${startHour}-${endHour} ${index <= (index + 10) % 12? 'PM' : 'AM'}`,
      value: index + 10,
    };
  });
    let [isvisible,setvisible]=useState(false)
    let [selectedSlot, setSelectedSlot] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    let [viewitems,setviewitems]=useState(false)

    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission or other actions with the selectedLanguage value
      console.log('Selected Language:', selectedLanguage);
    };

    const allTimeSlots = [
      { date: 'Today', time: '9:00 AM - 10:00 AM' },
      { date: 'Tomorrow', time: '11:00 AM - 12:00 PM' },
      { date: '2024-01-01', time: '2:00 PM - 3:00 PM' },
      { date: '2024-01-02', time: '5:00 PM - 6:00 PM' },
      // { date: '2024-01-03', time: '9:00 AM - 10:00 AM' },
      // { date: '2024-01-04', time: '11:00 AM - 12:00 PM' },
      // { date: '2024-01-05', time: '2:00 PM - 3:00 PM' },
      // { date: '2024-01-06', time: '5:00 PM - 6:00 PM' },
    ];
  
    const morningSlots = allTimeSlots.filter((slot) => slot.time.includes('AM'));
    const afternoonSlots = allTimeSlots.filter((slot) => slot.time.includes('PM') && !slot.time.includes('5:00 PM'));
    const eveningSlots = allTimeSlots.filter((slot) => slot.time.includes('5:00 PM'));
  
 
  return (
    <div className='bg-slate-300 h-screen flex justify-evenly p-11 '>
      <div className='bg-white rounded-sm w-[54%] h-[65%] '>
        <h1 className='m-5 text-xl font-semibold'>Select a delivery option</h1>
        <div className='border-gray-100 rounded-md border-2 h-[80%] w-[95%]  m-4'>
        <div className='flex p-5 ml-5 mt-10'>
          <div className='w-[3vw] h-[8vh] rounded-md border-gray-200 border-2 mr-3'><img src='https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg?tr=w-256,q=80'className='h-[7vh] w-[3vw]'></img></div>
          <button onClick={()=>{
            setviewitems(true)
          }} className='w-[3vw] h-[8vh] rounded-md border-gray-200 border-dotted border-2'><p className='text-center'>View 1 item</p>
          </button>
        </div>
        <div className={`fixed inset-0 ${viewitems ? 'flex' : 'hidden'} items-center justify-center rounded-md bg-black bg-opacity-50`}>
      <div className="bg-white  rounded-lg shadow-lg  h-[75vh]">
        <div className='flex justify-between bg-gray-100 rounded-t-md m-0 h-20'>
        <h2 className="text-2xl font-bold mb-4">Shipment 1| {} items</h2>
        <button
            className="bg-blue-500 mb-5 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none h-12"
            onClick={()=>{
              setviewitems(false)
              //hiding that component


            }}
          >X
          </button>
          </div>
        <div className=" gap-4 m-10">
          {allTimeSlots.map((slot, index) => (
            <div
              key={index}
              className='p-4  w-[400px] h-auto cursor-pointer flex-wrap bg-white flex justify-evenly'
              onClick={() => handleSlotSelect(slot)}
            >
              <img src='https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg?tr=w-256,q=80'className='h-[7vh] w-[3vw]'></img>
              <p className="font-semibold">item name</p>
              <svg className='w-6 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h
              48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.
              
              4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm8
              0 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16
              -16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
              <button className='border rounded-md h-[3rem] w-[8rem] '>Save For Later</button>

              
             
            </div>
          ))}
          
        </div>
        </div>
        </div>

        <div className='w-[43vw] h-[10vh] rounded-md border-gray-300 border-2 mr-10 ml-10 flex'>
          <h3 className='text-center m-8'>Delivery Slot</h3>
          <div className='h-[9.8vh] bg-black w-[1px]'></div>
               <button onClick={()=>{
                setSelectedSlot(true)
               }} className='m-8 flex'> <svg className='w-[3vw] h-[3vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              <p> 29 Jan, Mon, Between 1:00 PM - 2:00 PM</p>
              <svg className='w-[3vw] h-[3vh] ml-[20px]]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
              </button>
          
        </div>
        <button className='bg-red-600 rounded-md w-[14vw] h-[6vh] text-white text-center ml-[31.5vw] mt-9 text-xl '>Proceed to payment</button>
        </div>
        <div className={`fixed inset-0 ${selectedSlot ? 'flex' : 'hidden'} items-center justify-center bg-black bg-opacity-50 rounded-md`}>
      <div className="bg-white p-8 rounded-lg shadow-lg  h-[75vh]">
        <div className='flex justify-between'>
        <h2 className="text-2xl font-bold mb-4">Select a Delivery Slot</h2>
        <button
            className="bg-blue-500 mb-5 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            onClick={()=>{
              setSelectedSlot(false)
              //hiding that component


            }}
          >X
          </button>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allTimeSlots.map((slot, index) => (
            <button
              key={index}
              className={`p-4 border w-[200px] h-[50px] rounded-md cursor-pointer ${
                selectedSlot === slot ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
              onClick={() => handleSlotSelect(slot)}
            >
              <p className="font-semibold">{slot.date}</p>
              
             
            </button>
          ))}
          
        </div>
        <hr className='mt-10'></hr>
        <div className='flex w-[100%] gap-10 mt-3'> 
          <Link href='' className='text-xl text-gray-400 hover:text-black  hover: font-semibold  hover:underline' >All Slots</Link>
          <Link href='' className='text-xl text-gray-400 hover:text-black  hover: font-semibold  hover:underline'>Morning</Link>
          <Link href='' className='text-xl text-gray-400 hover:text-black  hover: font-semibold  hover:underline'>Afternoon</Link>
          <Link href='' className='text-xl text-gray-400 hover:text-black  hover: font-semibold hover:underline'>Evening</Link>
        </div>
        <hr className='m-5'></hr>
        <div className="flex  flex-wrap w-[50vw]">
      {timeSlots.slice(0,8).map((timeSlot,i) => (
        <div key={timeSlot.value} className="flex items-center rounded-md border-2 border-gray-300 w-[20vw] h-[50px] m-3 text-center
         hover:text-[rgba(71,111,0)] hover:border-[rgba(71,111,0)]">
          <input
            type="radio"
            id={`time-${timeSlot.value}`}
            name="timing"
            value={timeSlot.value}
            className="form-radio m-7 h-7 w-7 text-gray-500 hover:text-[rgba(71,111,0)]"
          />
          <label htmlFor={`time-${timeSlot.value}`}>
            {timeSlot.label}
          </label>
        </div>
      ))}
    </div>

        
        {/* {selectedSlot && (
          <div className="mt-4">
            <p className="font-semibold">Selected Slot:</p>
            <p>{`${selectedSlot.date} - ${selectedSlot.time}`}</p>
          </div>
        )} */}
       
      </div>
    </div>
       
        
      </div>
        <div>
        <div className='bg-[rgba(71,111,0)] rounded-t-md h-3 w-[27vw]'></div>
        <div className='bg-white rounded-b-md w-[27vw] h-15 p-4'>
        <h2 className="text-xl leading-6 font-bold mb-4 mt-1">Order Summary</h2>
        <hr className='text-gray-400 w-[25vw]'></hr>
        <div className='flex justify-between'>
        <h3 className='text-base font-semibold m-4'>Total Amount Payable</h3>
        <span className='text-base font-semibold m-4'>₹111.55</span>
        </div>
        <button className='w-screen' onClick={()=>{
            setvisible(!isvisible)
        }}> <div className='bg-[rgb(241,248,230,1)] w-[25vw] text-[rgba(71,111,0)] h-[70px] rounded-t-md pt-[30px] pl-5'>
         
           <div className='flex justify-between font-semibold'> <span>Total Savings</span><span className='m-2 flex'>₹111.51
           <svg  className='w-[3vw] h-[3vh]'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></span></div></div></button>
          {isvisible===true&&<div className= 'w-[25vw] bg-[rgb(241,248,230,1)]  text-[rgba(71,111,0)]  rounded-b-md pt-[30px] pb-5'>
                <hr className='bg-[rgba(71,111,0)] h-[2px]'></hr>
                <div className='flex justify-between mt-5'><span className='mr-5 ml-5'>Saved on basket value </span>
                <span className='mr-5 ml-5'>₹111.51</span></div></div>}
          <div className='w-[25vw] bg-[rgba(255,250,230,1)] h-[150px] border-[rgb(255,204,0)] border-2 rounded-md mt-4 p-4 flex'><svg className=' mr-2 w-[3vw] h-[3vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>Select your address and delivery slot to know accurate delivery charges. You can save more by applying a voucher!</div>      
    </div>
    </div>
    
</div>

  )
}

export default OrderSummary