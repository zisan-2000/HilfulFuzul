import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header2 = () => {
  return (
    <div className="bg-pink p-4">
      <div className="mb-2 text-2xl font-semibold text-gray-700">সকল বই</div>
      <div className="flex items-center text-lg text-gray-600">
        <NavLink to="/" className="hover:underline">
          হোম
        </NavLink>
        <FaChevronCircleRight className="mx-2" /> {/* Insert the icon */}
        <NavLink to="/categories" className="hover:underline">
          বিষয় সমূহ
        </NavLink>
        <FaChevronCircleRight className="mx-2" /> {/* Insert the icon */}
        <NavLink to="/islamic-products" className="hover:underline">
          ইসলামিক পণ্য
        </NavLink>
        <FaChevronCircleRight className="mx-2" /> {/* Insert the icon */}
      </div>
    </div>
  );
};

export default Header2;
