import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error),
      );
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-64 object-cover"
        />
        <p className="mt-4 text-gray-700">{product.description}</p>
        <p className="mt-2 text-lg font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
