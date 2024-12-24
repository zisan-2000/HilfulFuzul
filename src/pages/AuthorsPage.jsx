import React from "react";
import { writers } from "../components/DummyData/DummyData"; // Importing dummy data
import AuthorCard from "./../components/Card/AuthorCard";

const AuthorsPage = () => {
  const authors = writers; // Using static data

  return (
    <div className="bgMain py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="heading">সকল লেখক</h1>
          {/* <div>
            <Search />
          </div> */}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorsPage;
