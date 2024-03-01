"use client";
import React from "react";
import { useEffect, useState } from "react";

const ImgsData = () => {
  const imagesData = [
    "/img.jpeg",
    "/veg1.webp",
    "/veg2.webp",
    "/veg3.webp",
    "/veg4.webp",
  ];

  const [selectImg, setselectImg] = useState(imagesData[0]);

  const handleImgChange = (clickedImg) => {
    if (selectImg !== clickedImg) {
      setselectImg(clickedImg);
    }
  };

  useEffect(() => {
    console.log("Setting selectedImg:", imagesData[0]);
    setselectImg(imagesData[0]);
  }, []);

  return (
    <div className="sm:h-[100%]  sm:w-[100%] lg:h-[90%] lg:w-[85%]  mb-2 flex gap-3  ">
      {/* className="  w-[84px] h-[440px] " */}
      <div className="  sm:max-w-[15.2%] sm:max-h-[15.5%] hidden md:block md:w-[50%]  ">
        {imagesData.map((imgs, index) => (
          <img
            key={index}
            src={imgs}
            onClick={() => handleImgChange(imgs)}
            className="mb-2 border border-gray-400 rounded-md"
          />
        ))}
      </div>

      <div>
        <div className=" border border-gray-400 overflow-hidden object-cover rounded-md md:w-[100%] md:h-[97%] h-[80%] aspect-w-4 aspect-h-5 mb-3">
          <img src={selectImg} alt="" className="object-cover h-full w-full" />
        </div>

        {/* bottom images in responsive*/}
        <div className="">
          <div className=" flex w-[72%] h-[80%] md:hidden  md:w-[50%] sm:gap-2 gap-1">
            {imagesData.map((imgs, index) => (
              <img
                key={index}
                src={imgs}
                onClick={() => handleImgChange(imgs)}
                className="mb-2 border border-gray-400 rounded-md w-[25%] h-[40%] "
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="border border-gray-400 overflow-hidden rounded-md w-[70%] h-auto  ">
            <img src="/img.jpeg" alt="" className="w-full h-full object-cover" />
          </div> */}
    </div>
  );
};

export default ImgsData;
