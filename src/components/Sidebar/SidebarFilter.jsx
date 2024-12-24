import React from "react";
import { categories } from "../DummyData/DummyData"; // Importing dummy data

const SidebarFilter = ({ selectedCategories, onCategoryChange }) => {
  const handleCheckboxChange = (categoryId) => {
    onCategoryChange(categoryId);
  };

  return (
    <div className="bgThemeColor p-4">
      <div className="w-full rounded-lg bg-white p-4 shadow-lg">
        <h2 className="mb-3 text-lg font-bold text-gray-700">অনুসন্ধান</h2>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-600">বিষয়:</h3>
          <div className="mb-4 h-48 overflow-y-auto rounded-lg border border-gray-200 p-2">
            {categories.length > 0 ? (
              categories.map((category) => (
                <label
                  className="mb-1 block flex items-center text-sm text-gray-700"
                  key={category.id}
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCheckboxChange(category.id)}
                  />
                  {category.name}
                </label>
              ))
            ) : (
              <p>No categories available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
