// src/components/KuponCode.jsx
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow right icon from react-icons

const KuponCode = () => {
  const [couponCode, setCouponCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle coupon code submission
    console.log("Coupon code submitted:", couponCode);
  };

  return (
    <div className="mx-auto max-w-sm rounded bg-gray-100 p-6 shadow-md">
      <h2 className="mb-2 text-xl font-bold text-green-700">কুপন কোড</h2>
      <p className="mb-4 text-gray-700">
        আপনার কুপন কোড বা ডিসকাউন্ট কোড লিখুন
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full rounded border border-gray-300 p-2"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter your coupon code"
        />
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded bg-gray-300 p-2 text-gray-700 hover:bg-gray-400"
        >
          কুপন সেট করুন
          <FaArrowRight className="ml-2 h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default KuponCode;
