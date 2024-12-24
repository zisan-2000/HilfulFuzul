// src/components/ButtonContainer.jsx
import React from "react";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa"; // Shopping Cart Icon
import Button from "../Button/Button";

const CartButtonContainer = () => {
  return (
    <div className="flex justify-between space-x-2 rounded bg-gray-100 p-4">
      <Button to="/book-fair" className="bg-green-500 hover:bg-green-600">
        <FaShoppingCart className="mr-2 h-5 w-5" />
        আরও কেনাকাটা করুন
      </Button>
      <Button to="/checkout" className="bg-red-500 hover:bg-red-600">
        অর্ডার করুন
        <FaArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default CartButtonContainer;
