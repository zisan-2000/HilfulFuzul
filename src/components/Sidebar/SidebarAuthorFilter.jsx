import React from "react";
import { writers } from "../DummyData/DummyData"; // Importing dummy data

const AuthorFilter = () => {
  const authors = writers; // Using static data

  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-gray-600">লেখক:</h3>
      <div className="mb-4 h-48 overflow-y-auto rounded-lg border border-gray-200 p-2">
        {authors.length > 0 ? (
          authors.map((author) => (
            <label
              className="mb-1 block flex items-center text-sm text-gray-700"
              key={author.id}
            >
              <input type="checkbox" className="mr-2" />
              {author.name}
            </label>
          ))
        ) : (
          <p>No authors available.</p>
        )}
      </div>
    </div>
  );
};

export default AuthorFilter;
