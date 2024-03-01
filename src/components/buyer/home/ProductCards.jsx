import { CiBookmark } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import Link from "next/link";

const ProductCards = ({ data }) => {
  return (
    <Link
      href="/buyer/product"
      className="w-[90%] h-[38vh] sm:w-[45%] sm:h-[55vh] md:w-[30%] md:h-[65vh] lg:w-[23%] lg:h-[70vh]"
    >
      <div className="container-fluid w-full h-full bg-white rounded-lg p-3 flex flex-col justify-between flex-wrap items-center gap-1 sm:gap-3 shadow-lg">
        <div className=" rounded-md w-[100%] h-[40%] md:h-[30vh] border p-2  ">
          <img
            src="https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80"
            alt=""
            className="w-[100%] h-[100%] rounded-md"
          />
        </div>
        <div className="self-start w-[100%]  flex flex-col gap-2">
          <h2 className="text-lg  h-6  ">{data.title}</h2>
          <div className="w-[100%] bg-[#E8E8E8] text-gray-400 p-1 rounded-md px-3">
            1 kg{" "}
          </div>
        </div>
        <div className="self-start text-lg font-bold flex m-1 justify-center items-center">
          <FaRupeeSign /> {data.id}{" "}
        </div>
        <div className="flex justify-between items-center w-[100%] h-[10%]">
          <button className="p-2 md:p-3 border rounded-md">
            <CiBookmark className="font-bold text-lg   md:text-lg " />
          </button>
          <button className="border-red-600 bg-white p-1 md:p-2 w-[70%] border rounded-md">
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCards;
