// LowerFooter.jsx
import React from "react";
import bkashImage from "../../assets/others/bkash.png"; // Replace with your actual image path
import masterCardImage from "../../assets/others/mastercard.png"; // Replace with your actual image path
import nogodImage from "../../assets/others/nogod.png"; // Replace with your actual image path
import payIcon from "../../assets/others/pay-with.png"; // Replace with your actual image path

const LowerFooter = () => {
  return (
    <div className="mt-12 border-t border-gray-700 pt-6">
      <div className="mx-auto flex max-w-7xl flex-col justify-between px-6 lg:flex-row lg:items-center">
        <div className="mb-4 text-center text-sm text-gray-300 lg:mb-0 lg:text-left">
          <p>&copy; 2024 YourCompanyName</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-end">
          <span className="mr-0 text-gray-300 sm:mr-2">Accepted Payments</span>
          <div className="flex space-x-4">
            <img src={payIcon} alt="Pay Icon" className="h-8" />
            <img src={nogodImage} alt="Nogod" className="h-8" />
            <img src={bkashImage} alt="Bkash" className="h-8" />
            <img src={masterCardImage} alt="MasterCard" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
