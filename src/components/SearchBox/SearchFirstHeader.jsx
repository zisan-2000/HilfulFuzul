import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons

const SearchFirstHeader = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative flex w-full lg:w-[500px]">
        <input
          type="text"
          placeholder="Search by books (e.g., কুরআন সুরাহর আলোকে)"
          className="hidden flex-grow rounded-full border border-gray-300 bg-white py-2 pl-4 pr-10 text-gray-700 lg:block"
        />
        <button className="absolute right-0 top-0 flex h-full w-12 items-center justify-center rounded-r-full bg-red-500">
          <FaSearch className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchFirstHeader;
