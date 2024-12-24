import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa"; // Importing PDF icon
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Importing Toast
import "react-toastify/dist/ReactToastify.css"; // Importing Toast CSS
import { useCart } from "../../contexts/CartContext";
import Button from "../Button/Button";
import {
  categories,
  products,
  publishers,
  writers,
} from "../DummyData/DummyData"; // Importing dummy data

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { productId } = useParams();

  const [product] = useState(
    products.find((p) => p.id === parseInt(productId)),
  );

  const [writer] = useState(writers.find((w) => w.id === product.writer.id));
  const [publisher] = useState(
    publishers.find((p) => p.id === product.publisher.id),
  );
  const [category] = useState(
    categories.find((c) => c.id === product.category.id),
  );

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("সফলভাবে কার্টে যুক্ত হয়েছে");
  };

  const handleImageClick = () => {
    if (product.pdf) {
      window.open(product.pdf, "_blank");
    } else {
      alert("No PDF available for this product.");
    }
  };

  if (!product || !writer || !publisher || !category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 py-4">
      <div className="mx-auto max-w-7xl p-4">
        <div className="rounded bg-white p-4 shadow">
          <div className="flex  flex-row gap-8 sm:flex-row sm:gap-8  md:flex-row md:gap-16 lg:gap-20 xl:gap-24">
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-2/5 cursor-pointer  rounded border border-slate-950 object-cover"
              onClick={handleImageClick}
              title="Please click to view the PDF"
            />
            <div className="product-details">
              <h2 className="heading p-4">{product.name}</h2>
              <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
                <strong>লেখক:</strong> {writer.name}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                <strong>প্রকাশনী:</strong> {publisher.name}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                <strong>বিষয়:</strong> {category.name}
              </p>
              <p className="mt-4 text-xl text-red-500">
                ৳ {product.price}{" "}
                <span className="text-gray-500 line-through">
                  ৳ {product.original_price}
                </span>{" "}
                <span className="text-green-500">{product.discount}% ছাড়</span>
              </p>
              <Button onClick={handleAddToCart} className="buttonRed">
                এখনই কিনুন
              </Button>

              <div className="mt-6 flex items-center">
                {product.pdf ? (
                  <div
                    className="flex cursor-pointer items-center text-red-600"
                    onClick={handleImageClick}
                    title="View PDF"
                  >
                    <FaFilePdf className="mr-2 text-3xl" />{" "}
                    <span className="underline">View PDF</span>
                  </div>
                ) : (
                  <p>No PDF available for this product.</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
              বিস্তারিত
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg">
              {product.description}
            </p>
            <div className="mt-4 space-y-2 text-sm sm:text-base md:text-lg">
              <p>
                <strong>প্রকাশনী:</strong> {publisher.name}
              </p>
              {/* <p>
                <strong>পৃষ্ঠা সংখ্যা:</strong> 160
              </p> */}
              <p>
                <strong>ভাষা:</strong> Bangla
              </p>
              <p>
                <strong>বাঁধাই:</strong> Hard cover
              </p>
              <p>
                <strong>ISBN:</strong> 9789845326168
              </p>
              <p>
                <strong>প্রথম প্রকাশ:</strong> 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Toast container to show toasts */}
    </div>
  );
};

export default ProductDetail;
