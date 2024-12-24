import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { id } = useParams(); // Use the 'id' parameter from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/?category=${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [id]);

  return (
    <div className="bgMain">
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-3xl font-bold">Products</h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="mb-10 rounded-md bg-white p-4 text-center shadow-md"
            >
              <img src={product.image} alt={product.name} className="mb-4" />
              <p className="text-xl">{product.name}</p>
              <p className="text-lg">Price: {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
