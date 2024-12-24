import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { categories, products } from "../components/DummyData/DummyData"; // Importing dummy data

const CategoryProductsPage = () => {
  const { categoryId } = useParams(); // Get the category ID from the URL
  const filteredProducts = products.filter(
    (product) => product.category.id === parseInt(categoryId),
  ); // Filter products based on category ID

  return (
    <div className="bgMain">
      <div className="container mx-auto p-4">
        <h1 className="heading ">
          {categories.find((category) => category.id === parseInt(categoryId))
            ?.name || "Products"}
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="mb-10 rounded-md bg-white p-4 text-center shadow-md"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-full object-cover sm:h-48 md:h-56 lg:h-60 xl:h-64"
                  />
                  {product.discount > 0 && (
                    <span className="absolute left-2 top-2 rounded-lg bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                      {product.discount}% ছাড়
                    </span>
                  )}
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-base font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600 sm:text-lg md:text-xl lg:text-2xl">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-2 flex items-center">
                  <p className="text-base font-bold text-red-500 sm:text-lg md:text-xl">
                    ৳ {product.price}
                  </p>
                  {product.original_price > product.price && (
                    <p className="ml-2 text-sm text-gray-500 line-through">
                      ৳ {product.original_price}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex justify-center">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex items-center justify-center space-x-2 rounded bg-green-400 px-3 py-1 text-sm font-semibold text-white transition duration-300 hover:bg-red-600"
                  >
                    <span>বিস্তারিত</span>
                    <IoMdArrowForward className="text-lg" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-center text-lg">
              No products found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsPage;
