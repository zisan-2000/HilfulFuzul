// FooterSocial.jsx
import React from "react";

const FooterSocial = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-300 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
