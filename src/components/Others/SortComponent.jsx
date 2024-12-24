import React from "react";

const SortComponent = ({ productCount }) => {
  return (
    <div className="bgThemeColor mb-2  mt-2 flex items-center justify-between p-4 shadow-md">
      <div className="text-lg font-semibold">মোট {productCount} টি পণ্য</div>
    </div>
  );
};

export default SortComponent;
