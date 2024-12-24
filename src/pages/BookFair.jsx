import React, { useState } from "react";
import { products } from "../components/DummyData/DummyData"; // Importing dummy data
import Header4 from "../components/Header/Header4";
import SortComponent from "../components/Others/SortComponent";
import ProductListing from "../components/Products/ProductListing";
import SidebarFilter from "../components/Sidebar/SidebarFilter";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookFair = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId],
    );
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category.id),
      )
    : products;

  return (
    <div className="bgMain py-8">
      <div className="mx-auto max-w-7xl p-4">
        <Header4 />
        <div className="flex flex-col md:flex-row">
          <aside className="w-full p-2 md:w-1/3 lg:w-1/4 ">
            <SidebarFilter
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
          </aside>
          <main className="w-full p-2 md:w-2/3 lg:w-3/4">
            <SortComponent productCount={filteredProducts.length} />
            <ProductListing products={filteredProducts} />
          </main>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookFair;
