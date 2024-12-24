// src/components/OrderSummary.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ totalPrice, shippingCost, finalTotal }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/checkout");
  };

  return (
    <div className="mx-auto max-w-sm rounded bg-gray-100 p-6 shadow-md">
      <div className="mb-2 flex justify-between">
        <span className="text-gray-700">মূল্য</span>
        <span className="text-gray-700">৳ {totalPrice.toFixed(2)}</span>
      </div>
      <div className="mb-2 flex justify-between">
        <span className="text-gray-700">পরিবহন ব্যয়</span>
        <span className="text-gray-700">৳ {shippingCost.toFixed(2)}</span>
      </div>
      <hr className="my-2" />
      <div className="mb-4 flex justify-between">
        <span className="text-lg font-bold">মোট মূল্য</span>
        <span className="text-lg font-bold text-red-500">
          ৳ {finalTotal.toFixed(2)}
        </span>
      </div>
      <button
        type="button"
        className="flex w-full items-center justify-center rounded bg-red-500 p-2 text-white hover:bg-red-600"
        onClick={handleOrderClick}
      >
        অর্ডার করুন
        <FaArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
};

export default OrderSummary;
