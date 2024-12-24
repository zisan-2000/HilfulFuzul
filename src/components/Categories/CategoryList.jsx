import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io"; // Import the icon
import { Link } from "react-router-dom";
import { categories, products } from "../DummyData/DummyData"; // Import the static data

const CategoryList = () => {
  const [staticCategories] = useState(categories);
  const [staticProducts] = useState(products);

  return (
    <div className="bg-slate-300 py-8">
      <div className="  mx-auto max-w-7xl p-4">
        {staticCategories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="heading sm:text-2xl md:text-3xl lg:text-4xl xl:p-3 xl:text-5xl">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {staticProducts
                .filter((product) => product.category.id === category.id) // Adjusted to match based on category object
                .map((product) => (
                  <div
                    key={product.id}
                    className="categoryCard transform rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
