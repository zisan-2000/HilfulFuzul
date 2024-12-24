import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header3 = () => {
  return (
    <div className="bg-pink p-4">
      <div className="mb-2 text-2xl font-semibold text-gray-700">
        প্রি অর্ডার এর বই
      </div>
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

export default Header3;
