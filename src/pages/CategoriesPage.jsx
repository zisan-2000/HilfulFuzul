import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../components/DummyData/DummyData"; // Importing dummy data

const CategoriesPage = () => {
  return (
    <div className="bgMain">
      <div className="container mx-auto p-4">
        <h1 className="heading p-4">বিষয়সমূহ</h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              className="categoryPage mb-10 rounded-md bg-white p-4 text-center shadow-md"
            >
              <p className="p-10 text-xl">{category.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
