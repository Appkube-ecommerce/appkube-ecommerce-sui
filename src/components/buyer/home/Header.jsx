"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillBasketFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
// Update import for useRouter
import { useRouter } from "next/navigation";
import { FaBookmark } from "react-icons/fa6";
import DropdownComponent from "../myAccont/profile/dropDown";
import LogoutConfirmation from "../myAccont/profile/logout";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
=======
import { setAllProducts } from "@/redux/slices/products";
import Image from "next/image"; 
import { useRouter } from "next/navigation";
import { FaBookmark } from "react-icons/fa6";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const cartItems = useSelector(state => state.cartDetails.cart);
  const allProducts = useSelector(state => state.allProducts.products);
  const AddProductsintocart = useSelector(state => state.saveForLaterSlice.saveForLater);
>>>>>>> acaa5af51024ccf477c03e21cb763be9c0d4d5d7

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

<<<<<<< HEAD
  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen); 
  };

  const router = useRouter();
  const saveForLater = () => {
    router.push("/buyer/SaveForlater");
  };

  const cartItems = useSelector((state) => state.cartDetails.cart);
  const allProducts = useSelector((state) => state.allProducts.products);
  const AddProductsintocart = useSelector(
    (state) => state.saveForLaterSlice.saveForLater
  );
=======
  const saveForLater = () => {
    router.push("/buyer/SaveForlater");
  };
>>>>>>> acaa5af51024ccf477c03e21cb763be9c0d4d5d7

  const HandleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
<<<<<<< HEAD
    <header className="container-fluid flex justify-between items-center px-[5%] w-full h-[12vh] border-t-green-500 border-t-4">
=======
    <header className="container-fluid flex justify-between items-center px-[5%] w-full h-[12vh] border-t-green-500 border-t-4 sticky top-0 bg-white z-10">
>>>>>>> acaa5af51024ccf477c03e21cb763be9c0d4d5d7
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
<<<<<<< HEAD
      <div className="searchbar container-fluid w-[60%] sm:w-[55%] md:w-[45%] lg:w-[40%] relative flex shadow-md">
  <input
    type="text"
    placeholder="Search for products"
    value={searchQuery}
    onChange={handleSearchChange}
    className="w-full h-8 text-sm hover:border-0 border-none"
  />
</div>


      <div className={`burger md:hidden p-1 cursor-pointer ${isNavOpen ? "hidden" : ""}`} onClick={HandleNav}>
=======
      <div className="searchbar container-fluid w-[60%] sm:w-[55%] md:w-[45%] lg:w-[40%] relative flex shadow">
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input w-full"
        />
      </div>        

      <div className={`burger md:hidden p-1 cursor-pointer ${isNavOpen ? 'block' : 'hidden'}`} onClick={HandleNav} >
>>>>>>> acaa5af51024ccf477c03e21cb763be9c0d4d5d7
        {isNavOpen ? <RxCross1 className="font-extrabold text-xl" /> : <GiHamburgerMenu className="font-extrabold text-xl flex flex-col" />}
      </div>

      <div className={`buttons justify-between w-[10%] md:flex md:w-[35%] lg:w-[35%] ${isNavOpen ? 'flex flex-col' : 'hidden'}`}>
      <div className="relative">
  <button className="btn bg-[#E8E8E8] md:p-1 lg:p-2 rounded-md p-1 h-8 w-32 lg:inline-flex items-center justify-center hover:bg-gray-300 transition-colors">
    <FaLocationArrow className="md:hidden lg:inline mr-1" />
    <p className="text-xs font-semibold">Select Location</p>
  </button>
</div>



        <div className="relative">
          <Link href="/buyer/login">
            <button className="btn bg-black md:p-1 lg:p-2 rounded-md text-white p-1 w-24 md:inline-block h-8 hover:bg-gray-600 transition-colors ">
              <p className="text-xs">Login /Signup</p> 
               </button>
          </Link>
        </div>

        <div className="relative">
          <Link href="/buyer/AddTocardProd">
          <button className="btn bg-red-200 rounded-md p-0 hover:bg-red-300 transition-colors w-auto h-8 relative">
  <div className="rounded-full flex bg-red-600 p-1 relative">
    <BsFillBasketFill className="text-white text-2xl" />
    <div className="absolute -top-1 -right-1 bg-black text-white text-xs text-center font-semibold w-4 h-4 rounded-full">{cartItems.length}</div>
  </div>
</button>


          </Link>
        </div>
        <button className="p-1 md:p-0 border-2 rounded-md flex w-auto h-8 relative">
  <div className="absolute -top-1 -right-1 bg-black text-white text-xs text-center font-semibold w-4 h-4 rounded-full">{AddProductsintocart.length}</div>
  <FaBookmark className="font-bold text-lg  flex md:text-lg m-auto" onClick={saveForLater}/>
</button>

        <DropdownComponent/>
        <LogoutConfirmation/>
      </div>
    </header>
  );
};

export default Header;
