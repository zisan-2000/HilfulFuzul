// src/components/AuthorCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const AuthorCard = ({ author }) => {
  return (
    <div
      key={author.id}
      className="transform rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
    >
      <div className="relative mb-4 ">
        {author.image ? (
          <img
            src={author.image}
            alt={author.name}
            className="mx-auto h-32 w-32 rounded-full border-4 border-gray-200 object-cover shadow-md"
          />
        ) : (
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gray-300 text-xl text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{author.name}</h2>
        <p className="mt-2 text-gray-600">
          {author.bio || "Author's biography will be available soon."}
        </p>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <Link to={`/author/${author.id}`}>
          <Button
            to="/allbooks"
            className="buttonRed transition duration-300 hover:bg-red-600"
          >
            সকল বই
          </Button>
        </Link>
        {/* <Button className="buttonGray transition duration-300 hover:bg-gray-500">
          {author.books_count} টি বই
        </Button> */}
      </div>
      <div className="mt-4 text-center">
        <Link
          to={`/author/${author.id}/about`}
          className="text-blue-500 hover:underline"
        >
          আরো জানুন (pending)
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
