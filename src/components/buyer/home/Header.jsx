"use client";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillBasketFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

import { Input, Space } from 'antd';
import { setAllProducts } from "@/redux/slices/products";
import { useRouter } from "next/navigation";


// const { Search } = Input;
// const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => { // Update the prop name from `pro` to `products`
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // console.log(products)
  const cartItems = useSelector(state => state.cartDetails.cart)
  const products  = useSelector(state => state.allProducts.products)

  // state=>state.<LHS name of the reducer in store >.initialstate in slice


  // Function to filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
    
  );

  const HandleNav = () => {
    // const router=useRouter
    // function addtocart(){
    //    router.push("/buyer/AddTocardProd")
    // }
    console.log("open or close");
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="container-fluid flex  justify-between items-center px-[5%] w-full h-[12vh]   border-t-green-500 border-t-4 ">
      <div className="logo w-[20%] sm:w-[16%] lg:w-[10%]  ">
        <Link href="/buyer/home">
          <img
            src="https://asset.brandfetch.io/idIM18oaEt/idnUr2C08_.svg"
            className="w-full h-full"
          />
        </Link>
      </div>
      <div className="searchbar container-fluid w-[60%] sm:w-[55%] md:w-[45%] lg:w-[40%] relative shadow  ">
        <IoSearch className="text-green-500 absolute top-3 left-1 text-lg " />

        <input
          type="text"
          placeholder="search for products"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-[100%] p-2  px-6 rounded text-black outline-none border-black shadow hover:shadow-lg transition-shadow"
        />
        <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      </div>

      <div
        className=" burger md:hidden  p-1 cursor-pointer"
        onClick={HandleNav}
      >
        <GiHamburgerMenu className="font-extrabold text-xl" />
      </div>
      <div
        className={
          "buttons hidden justify-between w-[10%]  md:flex  md:w-[35%] lg:w-[35%]"
        }
      >
        <div className="relative ">
          <button className="btn bg-[#E8E8E8] md:p-1 lg:p-2 shadow lg:pl-7 rounded-md  p-2  lg:inline-block hover:bg-gray-300 transition-colors">
            <FaLocationArrow className="absolute top-3 left-1 md:hidden lg:inline " />
            Select Location
          </button>
        </div>

        <div className="relative ">
          <Link href="/buyer/login">
            <button className="btn bg-black md:p-1 lg:p-2 rounded-md text-white hidden p-2 md:inline-block hover:bg-gray-600 transition-colors">
              Login /Signup
            </button>
          </Link>
          <MdAccountCircle className=" bg-black text-white md:hidden sm:inline" />
        </div>
        <div className="relative ">
          <Link href="/buyer/orders">
            <button className="btn bg-red-200 rounded-md p-2 hover:bg-red-300 transition-colors">
              <div className="rounded-full flex bg-red-600 p-1">
                <BsFillBasketFill className="text-white text-2xl h-4" />
                <div className="bg-black text-white text-xs text-center font-semibold w-4 h-4 rounded-lg">{cartItems.length}</div>
          <Link href="/buyer/AddTocardProd">
            <button className="btn bg-red-200 rounded-md p-2 hover:bg-red-300 transition-colors ">
              <div className="rounded-full bg-red-600 p-1">
                <BsFillBasketFill className="text-white" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
