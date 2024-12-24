import React from "react";
import SortComponent from "../components/Others/SortComponent";
import ProductListing from "../components/Products/ProductListing";
import SidebarFilter from "../components/Sidebar/SidebarFilter";

const DaoraHadis = () => {
  return (
    <div className="bgMain py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex flex-col lg:flex-row">
          <aside className="w-full p-4 lg:w-1/4">
            <SidebarFilter />
          </aside>

          <main className="w-full p-4 lg:w-3/4">
            <div className="mb-4">
              <SortComponent />
            </div>
            <ProductListing />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DaoraHadis;
