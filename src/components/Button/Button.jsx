// src/components/Button.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ children, className, to, ...props }) => {
  return (
    <NavLink
      to={to}
      className={`flex items-center justify-center rounded px-6 py-2 text-white ${className}`}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default Button;
