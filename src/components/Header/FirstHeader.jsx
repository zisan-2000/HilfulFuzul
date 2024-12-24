import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/others/Adon-venture-Black.jpg";
import SearchFirstHeader from "../SearchBox/SearchFirstHeader";
import CartLink from "../cart/CartLink";

const FirstHeader = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="header sticky top-0 flex items-center justify-between bg-gray-800 p-4 text-white shadow-lg">
      <div className="flex items-center">
        <button
          className="mr-4 text-2xl lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <AiOutlineMenu />
        </button>
        <Link to="/" className="flex items-center p-2">
          <img
            src={logo}
            alt="Kitab Ghor"
            className="h-16 w-auto rounded-full shadow-lg"
          />
          <span className="ml-3 hidden text-2xl font-bold sm:block">বইঘর</span>
        </Link>
      </div>

      {/* Full search bar for large screens */}
      <div className="hidden lg:ml-4 lg:flex lg:flex-grow lg:justify-end">
        <SearchFirstHeader />
      </div>

      {/* Hide the search bar for small devices and only show the search icon next to the cart */}
      <div className="flex items-center space-x-4">
        <Link to="/search" className="hover:text-yellow-300 lg:hidden">
          <FaSearch className="h-6 w-6" />
        </Link>
        <CartLink />

        <Link to="/signup" className="flex items-center hover:text-yellow-300">
          <FaUserPlus className="h-6 w-6" />
          <span className="ml-1 hidden sm:block">সাইন আপ</span>
        </Link>

        <Link to="/signin" className="flex items-center hover:text-yellow-300">
          <FaSignInAlt className="h-6 w-6" />
          <span className="ml-1 hidden sm:block">সাইন ইন</span>
        </Link>
      </div>
    </div>
  );
};

export default FirstHeader;
