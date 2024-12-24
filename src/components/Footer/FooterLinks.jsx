// FooterLinks.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-gray-300">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path} className="hover:underline">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
