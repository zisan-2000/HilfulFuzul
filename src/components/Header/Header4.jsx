// src/components/Header4.jsx
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa"; // Import the right arrow icon from react-icons
import { NavLink } from "react-router-dom";

const Header4 = () => {
  return (
    <div className="bg-pink p-4">
      <div className="mb-2 text-2xl font-semibold text-gray-700">সকল বই</div>
      <div className="flex items-center text-lg text-gray-600">
        <NavLink to="/" className="hover:underline">
          হোম
        </NavLink>
        <FaChevronCircleRight className="mx-2" /> {/* Insert the icon */}
        <NavLink to="/category" className="hover:underline">
          বিষয় সমূহ
        </NavLink>
        <FaChevronCircleRight className="mx-2" /> {/* Insert the icon */}
      </div>
    </div>
  );
};

export default Header4;
