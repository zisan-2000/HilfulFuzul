// src/components/CartLink.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon from react-icons
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const CartLink = () => {
  const { cart } = useCart();
  const cartItemCount = cart.items.reduce(
    (count, item) => count + item.quantity,
    0,
  );

  return (
    <Link to="/cart" className="flex items-center">
      <FaShoppingCart className="h-6 w-6 text-red-500" />
      <span className="ml-1">কার্ট {cartItemCount}</span>
    </Link>
  );
};

export default CartLink;
