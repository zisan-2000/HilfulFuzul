import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/products/")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl">Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded border p-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full object-cover"
            />
            <h3 className="text-lg">{product.name}</h3>
            <p>{product.description}</p>
            <p className="font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
