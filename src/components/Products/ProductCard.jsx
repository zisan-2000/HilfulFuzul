// src/components/ProductCard.jsx
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../contexts/CartContext";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("সফলভাবে কার্ট এ যুক্ত হয়েছে!");
  };

  return (
    <div className="rounded bg-white p-4 shadow ">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full rounded object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="mt-2 font-bold text-red-500">
        ৳ {product.price}{" "}
        {product.discount && (
          <span className="text-gray-500 line-through">
            ৳ {product.original_price}
          </span>
        )}
      </p>
      {product.discount && (
        <span className="mt-2 inline-block rounded bg-green-500 px-2 py-1 text-sm text-white">
          {product.discount}% ছাড়
        </span>
      )}
      <Button onClick={handleAddToCart} className="buttonRed mt-4">
        এখনই কিনুন
      </Button>
    </div>
  );
};

export default ProductCard;
