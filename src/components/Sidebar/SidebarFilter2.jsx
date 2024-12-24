import React from "react";

const SidebarFilter2 = () => {
  return (
    <div className="bgThemeColor p-4">
      <div className="mb-2 text-xl font-semibold text-black">অনুসন্ধান:</div>
      <div className="rounded-lg bg-white p-2">
        <div className="mb-2 text-lg font-bold">ব্র্যান্ড:</div>
        <div className="space-y-2">
          <div>
            <input type="checkbox" id="brand1" name="brand1" className="mr-2" />
            <label htmlFor="brand1">কিতাবঘর ইসলামী পণ্য</label>
          </div>
          <div>
            <input type="checkbox" id="brand2" name="brand2" className="mr-2" />
            <label htmlFor="brand2">দারুল হিকমাহ পাবলিকেশন্স লিমিটেড</label>
          </div>
          <div>
            <input type="checkbox" id="brand3" name="brand3" className="mr-2" />
            <label htmlFor="brand3">নন ব্র্যান্ড</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter2;
