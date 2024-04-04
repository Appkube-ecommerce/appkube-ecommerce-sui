"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillBasketFill } from "react-icons/bs";
//import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaBookmark } from "react-icons/fa6";
import DropDown from "../myAccont/profile/dropDown";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen); // Toggle dropdown visibility
  };

  const router = useRouter();
  const saveForLater = () => {
    router.push("/buyer/SaveForlater");
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const cartItems = useSelector((state) => state.cartDetails.cart);
  const allProducts = useSelector((state) => state.allProducts.products);
  console.log(allProducts);
  const AddProductsintocart = useSelector(
    (state) => state.saveForLaterSlice.saveForLater
  );

  const HandleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="container-fluid flex justify-between items-center px-[5%] w-full h-[12vh] border-t-green-500 border-t-4">
      <div className="logo w-[20%] sm:w-[16%] lg:w-[10%]">
        <Link href="/buyer/home">
          <Image
            src="https://asset.brandfetch.io/idIM18oaEt/idnUr2C08_.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="searchbar container-fluid w-[60%] sm:w-[55%] md:w-[45%] lg:w-[40%] relative flex shadow">
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input w-full"
        />
      </div>

      <div className={`burger md:hidden p-1 cursor-pointer ${isNavOpen ? <RxCross1 /> : <GiHamburgerMenu />} `} onClick={HandleNav}>
        {isNavOpen ? <RxCross1 className="font-extrabold text-xl" /> : <GiHamburgerMenu className="font-extrabold text-xl flex flex-col" />}
      </div>

      <div className={`buttons justify-between w-[10%] md:flex md:w-[35%] lg:w-[35%] ${isNavOpen ? 'flex flex-col' : 'hidden'}`}>
        <div className="relative">
          <button className="btn bg-[#E8E8E8] md:p-1 lg:p-2 shadow lg:pl-7 rounded-md p-1 h-14 lg:inline-block hover:bg-gray-300 transition-colors">
            <FaLocationArrow className="absolute top-3 left-1 md:hidden lg:inline" />
            Select Location
          </button>
        </div>

        <div className="relative">
          <Link href="/buyer/login">
            <button className="btn bg-black md:p-1 lg:p-2 rounded-md text-white  p-1 w-auto md:inline-block h-14 hover:bg-gray-600 transition-colors">
              Login /Signup
            </button>
          </Link>
        </div>

        <div className="relative">
          <Link href="/buyer/AddTocardProd">
            <button className="btn bg-red-200 rounded-md p-2 hover:bg-red-300 transition-colors w-auto">
              <div className="rounded-full flex bg-red-600 p-1">
                <BsFillBasketFill className="text-white text-2xl h-4" />
                <div className="bg-black text-white text-xs text-center font-semibold w-4 h-4 rounded-lg">{cartItems.length}</div>
              </div>
            </button>
          </Link>
        </div>
<<<<<<< HEAD
        <button className="p-2 md:p-3 border-2 rounded-md flex">
          <FaBookmark className="font-bold text-lg  flex md:text-lg " onClick={saveForLater} />
=======
        <button className="p-1 md:p-3 border-2 rounded-md flex w-auto h-10">
          <FaBookmark className="font-bold text-lg  flex md:text-lg " onClick={saveForLater}/>
>>>>>>> 2b385b57733e7ccf61373adc84b3a6ba8ec09a32
          <div className="bg-black text-white text-xs text-center font-semibold w-4 h-4 rounded-lg">{AddProductsintocart.length}</div>
        </button>
<DropDown />
      </div>
      
    </header>
  );
};

export default Header;
