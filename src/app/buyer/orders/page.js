"use client";
import "./styles/styles.css";

import Image from "next/image";

import React, { Component, useState } from "react";

export default function Myorders() {
  const [isOpen, setisOpen] = useState(false);

  const togglePopup = () => {
    setisOpen(!isOpen);
  };

  //////////////

  // My Details Component
  const [Detailed, setDetailed] = useState(false);

  const DetailPopup = () => {
    setDetailed(!Detailed);
  };

  const changeDelivery = () => {
    alert();
  };

  //   / Past Orders

  const [pastOrders, setpastOrders] = useState(false);

  const pOrders = () => {
    setpastOrders(!pastOrders);
  };

  return (
    <>
      {isOpen && (
        <div className="popup w-full p-4 sm:px-20 text-sm md:px-4 ">
          <div className="popup-inner relative border border-gray-200 px-2">
            <button
              className="close-button p-2 mb-2 pt-0 text-right absolute right-0 top-0"
              onClick={togglePopup}
            >
              &#x2715;
            </button>
            <div className=" flex items-center justify-center">
              <div>
                <h2 className="p-2">Iphone 15</h2>

                <img src="/orders_images/iphone15.webp" className="w-1/12" />
              </div>
              <div className="flex flex-col justify-center itemc">
                <h2 className="m-3">Quantity</h2>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="main flex flex-col gap-1 w-full justify-center p-1 sm:px-12 cursor-pointer leading-5 text-sm sm:text-base md:text-sm md:px-4 lg:px-10">
        <div
          className="flex gap-4 w-full border border-slate-200 p-2  flex-col items-center xs:flex-row sm:flex-row sm:items-start "
          onClick={DetailPopup}
          title="click to show the orders details"
        >
          <div className="bikesection">
            <img src="../../../orders_images/bike.png" />
          </div>

          <div className=" flex  items-start w-full flex-col sm:flex-col lg:flex-row  leading-8  md:gap-2 lg:gap-0 justify-center ">
            <div className="flex w-full flex-col justify-center items-center px-22">
              <div className="flex  w-full items-center justify-center px-8 md:px-2 lg:px-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#444"
                    fillRule="evenodd"
                    d="M6.998 13.291a6.293 6.293 0 1 1 0-12.586 6.293 6.293 0 0 1 0 12.586M11.947 2.05A6.954 6.954 0 0 0 6.998 0 6.95 6.95 0 0 0 2.05 2.05 6.952 6.952 0 0 0 0 6.998c0 1.87.728 3.627 2.05 4.949a6.956 6.956 0 0 0 4.948 2.05c1.87 0 3.627-.729 4.949-2.05a6.958 6.958 0 0 0 2.05-4.949c0-1.87-.729-3.626-2.05-4.948"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#444"
                    fillRule="evenodd"
                    d="M9.725 9.679 7.17 7.125a.133.133 0 0 1-.039-.094V3.41a.267.267 0 0 0-.267-.266h-.107a.268.268 0 0 0-.267.267s0 3.84.002 3.85c.004.061.03.122.077.169l2.701 2.701a.266.266 0 0 0 .378 0l.076-.075a.268.268 0 0 0 0-.378"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="pl-3">Tomorrow,</span>
              </div>
              <div className="w-36">
                <span className="text-sm">7:00 AM - 8:00 AM</span>
              </div>
            </div>

            <div className="flex md:flex-col justify-between w-full items-center relative px-12 md:px-2 lg:px-0 lg:p-0 lg:items-start">
              <div className=" lg:flex lg:w-full lg:items-center lg:justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 70 70"
                  className="order-success_svg__ng-scope"
                >
                  <path
                    fill="#84c225"
                    d="M35 60c-13.807 0-25-11.193-25-25s11.193-25 25-25 25 11.193 25 25-11.193 25-25 25ZM23.633 33.226l-1.266 1.548 11.776 9.635 13.633-16.778-1.552-1.262-12.367 15.222-10.224-8.365Z"
                  ></path>
                  <circle
                    cx="35"
                    cy="35"
                    r="24"
                    fill="#84c225"
                    stroke="#bddc8e"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></circle>
                  <path
                    stroke="#fff"
                    strokeWidth="4"
                    fill="transparent"
                    d="m23 34 11 9 13-16"
                  ></path>
                </svg>

                <div className="lines lg:!hidden"></div>
                <div className="hidden lg:block lg:h-0.2 horizontal_lines"></div>
              </div>
              <span>Placed</span>
            </div>

            <div className="flex md:flex-col justify-between w-full items-center relative px-12 md:p-2 lg:px-0 lg:p-0 lg:items-start">
              <div className="lg:flex lg:w-full lg:justify-between items-center">
                <div className=" w-3.5 h-3.5 bg-silverSurfer-100 border border-green-500 rounded-full transform"></div>
                <div className="lines lg:!hidden"></div>
                <div className="hidden lg:block horizontal_lines"></div>
              </div>

              <span>In Process</span>
            </div>

            <div className="flex md:flex-col justify-between w-full items-center px-12 md:px-2 lg:px-0 lg:items-start">
              <div className="lg:flex lg:w-full lg:justify-center lg:items-center">
                <div className="w-3.5 h-3.5 bg-silverSurfer-100 border border-green-500 rounded-full transform"></div>
                <div className="lines lg:!hidden"></div>
                <div className="hidden lg:block   horizontal_lines"></div>
              </div>

              <span>Packed</span>
            </div>

            <div className="flex md:flex-col justify-between w-full items-center px-12 md:px-2 lg:px-0 lg:items-start ">
              <div className="lg:flex lg:w-full lg:items-center lg:justify-center">
                <div className="w-3.5 h-3.5 bg-silverSurfer-100 border border-green-500 rounded-full transform"></div>
                <div className="lines lg:!hidden"></div>
                <div className="hidden lg:block   horizontal_lines"></div>
              </div>

              <span className="text-sm text-center">On The Way</span>
            </div>

            <div className="flex  justify-between w-full items-center md:flex-col px-12 md:px-2 lg:px-0 lg:items-start">
              <div className="lg:flex lg:w-full lg:items-center lg:justify-center">
                <div className="w-3.5 h-3.5 bg-silverSurfer-100 border border-green-500 rounded-full transform "></div>
                <div className="lines lg:!hidden"></div>
                <div className="hidden lg:block   horizontal_lines"></div>
              </div>

              <span>Delivered</span>
            </div>

            <div className="flex  justify-between w-full items-center md:flex-col px-12 md:px-2 lg:px-0 lg:items-start">
              <div className="lg:flex lg:w-full lg:items-center lg:justify-center">
                <div className="w-3.5 h-3.5 bg-silverSurfer-100 border border-green-500 rounded-full transform"></div>
                <div className="lines lg:!hidden"></div>
                <div className="hidden lg:block  horizontal_lines"></div>
              </div>

              <span>Reached</span>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <button
                className="text-sm text-center w-36 bg-gray-200 p-4 m-1 flex items-center justify-between"
                onClick={togglePopup}
              >
                <span>View 1 Item</span>

                <img
                  src="../../../orders_images/dropdown.png"
                  className="w-3"
                />
              </button>
            </div>
          </div>
        </div>

        {/* second drop down
         */}

        {/* Address section */}

        {Detailed && (
          <div className=" border border-slate-300 flex flex-col gap-x-3 justify-between px-2 py-5 mb-10">
            {/* Top address with order id apd order placed date  */}
            <div className="w-full flex justify-between flex-col items-center gap-4 md:flex-row ">
              <div>
                <span>Shipment Type:&nbsp;&nbsp;Express Delivery</span>
              </div>
              <div>
                <span>
                  Order Id:{" "}
                  <a
                    className="underline"
                    href="/member/order-details/1385272735/"
                  >
                    1385272735
                  </a>
                </span>
              </div>

              <div className="flex">
                <span className="text-center">
                  Order Placed : 26 Jan, Friday 07:00 AM - 08:00 AM
                </span>
              </div>
            </div>

            <div className="flex gap-x-4 py-7 w-full justify-between items-center leading-6 flex-col gap-8 md:flex-row">
              <div className="flex flex-col items-center justify-center ">
                <h2 className="font-medium">Delivery Address : </h2>
                <p className="text-sm text-center">
                  Shah ALi banda Hyderabad. Telangan Hyderabad, 500053
                </p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <h2>Payment Information</h2>
                <div>
                  <span className="text-sm">Payment Status:&nbsp;</span>
                  <span className="text-sm text-green-500">Successful</span>
                </div>

                <div>
                  <span className="text-sm">Mode Of Payment:&nbsp;</span>
                  <span className="text-sm">NEUCOINS</span>
                </div>
              </div>
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#d3d3d3"
                    fillOpacity="1"
                    d="M0,256L11.4,213.3C22.9,171,46,85,69,90.7C91.4,96,114,192,137,208C160,224,183,160,206,138.7C228.6,117,251,139,274,138.7C297.1,139,320,117,343,133.3C365.7,149,389,203,411,192C434.3,181,457,107,480,80C502.9,53,526,75,549,106.7C571.4,139,594,181,617,218.7C640,256,663,288,686,298.7C708.6,309,731,299,754,272C777.1,245,800,203,823,160C845.7,117,869,75,891,85.3C914.3,96,937,160,960,165.3C982.9,171,1006,117,1029,101.3C1051.4,85,1074,107,1097,144C1120,181,1143,235,1166,224C1188.6,213,1211,139,1234,144C1257.1,149,1280,235,1303,245.3C1325.7,256,1349,192,1371,154.7C1394.3,117,1417,107,1429,101.3L1440,96L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                  ></path>
                </svg>
                <div className="bg-gray-300 opacity-19 p-1">
                  <h2>Order Summary</h2>

                  <span className="flex flex-col text-sm">
                    <span className="text-sm">0</span>
                    Savings
                  </span>
                  <span className="text-sm text-green-600">Rs: 56693.93</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#d3d3d3"
                    fillOpacity="1"
                    d="M0,256L11.4,213.3C22.9,171,46,85,69,90.7C91.4,96,114,192,137,208C160,224,183,160,206,138.7C228.6,117,251,139,274,138.7C297.1,139,320,117,343,133.3C365.7,149,389,203,411,192C434.3,181,457,107,480,80C502.9,53,526,75,549,106.7C571.4,139,594,181,617,218.7C640,256,663,288,686,298.7C708.6,309,731,299,754,272C777.1,245,800,203,823,160C845.7,117,869,75,891,85.3C914.3,96,937,160,960,165.3C982.9,171,1006,117,1029,101.3C1051.4,85,1074,107,1097,144C1120,181,1143,235,1166,224C1188.6,213,1211,139,1234,144C1257.1,149,1280,235,1303,245.3C1325.7,256,1349,192,1371,154.7C1394.3,117,1417,107,1429,101.3L1440,96L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"
                  ></path>
                </svg>{" "}
              </div>
            </div>

            <div className="flex flex-col">
              <p className="m-5 text-center font-semibold">
                More With The Order
              </p>

              <div className="flex w-full gap-5 flex-col sm:flex-row">
                <div className="bg-gray-200 p-4 text-center">
                  <button className="">
                    <div>
                      <span>Change Slot</span>
                    </div>

                    <div>
                      <span>Change Delivery Slot</span>
                    </div>
                  </button>
                </div>

                <div className="bg-gray-200 p-4 text-center">
                  <button onClick={changeDelivery}>
                    <div>
                      <span>Change Slot</span>
                    </div>

                    <div>
                      <span>Change Delivery Slot</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* First drop down ended */}
        {/* /////////////////////// */}
        <div className="flex justify-center border border-slate-200 bg-gray-100 h-12 relative my-2">
          <span className=" absolute top-0 bg-gray-100 bg-opacity-100 text-center ">
            Past Orders
          </span>
        </div>
        <div
          className="flex flex-col sm:!flex-row   gap-4 w-full border border-slate-200 p-2  bg-gray-100   "
          onClick={pOrders}
        >
          <div className="bikesection flex items-center justify-center">
            <img src="../../../orders_images/car.png" className="w-10" />
          </div>

          <div className="Timeline flex gap-2 items-center w-full flex-col  md:flex-row ">
            <div className="flex flex-col justify-evenly w-full items-center p-4  md:border-r-2 md:border-gray-300 ">
              <span>Complete</span>
            </div>

            <div className="flex flex-col justify-evenly w-full items-center p-4 md:border-r-2 md:border-gray-300">
              <span className="text-center">09 jan, Tue 7:30 AM -11:30 Am</span>
            </div>

            <div className="flex flex-col justify-evenly w-full items-center">
              <span>Order Amount: Rs 0</span>
            </div>
          </div>
        </div>

        {/* second drop down
         */}

        {/* Address section */}

        {pastOrders && (
          <div className=" border border-slate-300 flex flex-col gap-x-3 justify-between px-2 py-5 ">
            {/* Top address with order id apd order placed date  */}
            <div className="w-full flex justify-between flex-col md:flex-row items-center gap-4">
              <div>
                <span>Shipment Type:&nbsp;&nbsp;Express Delivery</span>
              </div>
              <div>
                <span>
                  Order Id:{" "}
                  <a
                    className="underline"
                    href="/member/order-details/1385272735/"
                  >
                    1385272735
                  </a>
                </span>
              </div>

              <div className="flex">
                <span className="text-center">
                  Order Placed : 26 Jan, Friday 07:00 AM - 08:00 AM
                </span>
              </div>
            </div>

            <div className="flex gap-x-4 py-7 w-full justify-center md:justify-between  leading-6 flex-col gap-8 items-center md:flex-row">
              <div className="flex flex-col justify-center items-center">
                <h2>Delivery Address :</h2>
                <p className="text-sm text-center">
                  Shah ALi banda Hyderabad. Telangan Hyderabad, 500053
                </p>
              </div>

              <div>
                <h2>Payment Information</h2>
                <div>
                  <span className="text-sm">Payment Status:&nbsp;</span>
                  <span className="text-sm text-green-500">Successful</span>
                </div>

                <div>
                  <span className="text-sm">Mode Of Payment:&nbsp;</span>
                  <span className="text-sm">NEUCOINS</span>
                </div>
              </div>
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#d3d3d3"
                    fillOpacity="1"
                    d="M0,256L11.4,213.3C22.9,171,46,85,69,90.7C91.4,96,114,192,137,208C160,224,183,160,206,138.7C228.6,117,251,139,274,138.7C297.1,139,320,117,343,133.3C365.7,149,389,203,411,192C434.3,181,457,107,480,80C502.9,53,526,75,549,106.7C571.4,139,594,181,617,218.7C640,256,663,288,686,298.7C708.6,309,731,299,754,272C777.1,245,800,203,823,160C845.7,117,869,75,891,85.3C914.3,96,937,160,960,165.3C982.9,171,1006,117,1029,101.3C1051.4,85,1074,107,1097,144C1120,181,1143,235,1166,224C1188.6,213,1211,139,1234,144C1257.1,149,1280,235,1303,245.3C1325.7,256,1349,192,1371,154.7C1394.3,117,1417,107,1429,101.3L1440,96L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                  ></path>
                </svg>{" "}
                <h2>Order Summary</h2>
                <span className="flex flex-col text-sm">
                  <span className="text-sm">0</span>
                  Savings
                </span>
                <span className="text-sm text-green-500">Rs: 56693.93</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#d3d3d3"
                    fillOpacity="1"
                    d="M0,256L11.4,213.3C22.9,171,46,85,69,90.7C91.4,96,114,192,137,208C160,224,183,160,206,138.7C228.6,117,251,139,274,138.7C297.1,139,320,117,343,133.3C365.7,149,389,203,411,192C434.3,181,457,107,480,80C502.9,53,526,75,549,106.7C571.4,139,594,181,617,218.7C640,256,663,288,686,298.7C708.6,309,731,299,754,272C777.1,245,800,203,823,160C845.7,117,869,75,891,85.3C914.3,96,937,160,960,165.3C982.9,171,1006,117,1029,101.3C1051.4,85,1074,107,1097,144C1120,181,1143,235,1166,224C1188.6,213,1211,139,1234,144C1257.1,149,1280,235,1303,245.3C1325.7,256,1349,192,1371,154.7C1394.3,117,1417,107,1429,101.3L1440,96L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
