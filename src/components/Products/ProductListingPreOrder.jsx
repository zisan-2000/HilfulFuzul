import React from "react";
import { products } from "../DummyData/DummyData"; // Importing dummy data
import ProductCardPreOrder from "./ProductCardPreOrder";

const ProductListingPreorder = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCardPreOrder key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListingPreorder;
