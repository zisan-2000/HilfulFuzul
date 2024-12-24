// Search.js
import React from "react";

const Search = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="w-[600px] rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="অনুসন্ধান করুন..."
      />
    </div>
  );
};

export default Search;
