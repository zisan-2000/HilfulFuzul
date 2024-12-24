// src/components/PublisherCard.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const PublisherCard = ({ publisher }) => {
  return (
    <div key={publisher.id} className="rounded bg-white p-4 shadow">
      {publisher.image ? (
        <img
          src={publisher.image}
          alt={publisher.name}
          className="mx-auto h-32 w-32 rounded-full object-cover"
        />
      ) : (
        <div className="mx-auto h-32 w-32 rounded-full bg-gray-300"></div>
      )}
      <h2 className="mt-4 text-center text-xl font-semibold">
        {publisher.name}
      </h2>

      <div className="mb-2 mt-4 flex items-center justify-center text-gray-600">
        <FaMapMarkerAlt className="mr-1 text-blue-500" />
        <span>{publisher.location || "অজানা স্থান"}</span>
      </div>

      <p className="mb-4 text-center text-gray-700">
        {publisher.description ||
          "এই প্রকাশকের সম্পর্কে আরও তথ্য প্রাপ্ত হয়নি।"}
      </p>

      <div className="mt-4 flex justify-center space-x-4">
        <Button to="/allbooks" className="buttonRed">
          সকল বই
        </Button>

        {/* <Button className="buttonGray">{publisher.books_count} টি বই</Button> */}
      </div>

      <div className="mt-4 text-center">
        <Link
          to={`/publisher/${publisher.id}/about`}
          className="text-blue-500 hover:underline"
        >
          আরো জানুন (Pending)
        </Link>
      </div>
    </div>
  );
};

export default PublisherCard;
