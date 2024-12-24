import React from "react";
import PublisherCard from "../components/Card/PublisherCard";
import { publishers } from "../components/DummyData/DummyData"; // Importing dummy data

const PublishersPage = () => {
  return (
    <div className="bgMain py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="heading">সকল প্রকাশক</h1>
          {/* <div>
            <Search />
          </div> */}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {publishers.map((publisher) => (
            <PublisherCard key={publisher.id} publisher={publisher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublishersPage;
