// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
