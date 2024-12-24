// src/components/CartTable.jsx
import React from "react";

const CartTable = ({ cart, handleQuantityChange }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
            <th className="px-6 py-3 text-left">ছবি</th>
            <th className="px-6 py-3 text-left">পণ্যের শিরোনাম</th>
            <th className="px-6 py-3 text-left">বর্ণনা</th>
            <th className="px-6 py-3 text-left">মূল্য</th>
            <th className="px-6 py-3 text-left">পরিমাণ</th>
            <th className="px-6 py-3 text-left">মোট মূল্য</th>
          </tr>
        </thead>
        <tbody className="text-sm font-light text-gray-600">
          {cart.items.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-6 py-3 text-center">
                Your cart is empty.
              </td>
            </tr>
          ) : (
            cart.items.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-3 text-left">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 rounded object-cover"
                  />
                </td>
                <td className="px-6 py-3 text-left">
                  <h3 className="text-lg font-normal">{product.name}</h3>
                </td>
                <td className="px-6 py-3 text-left">
                  <p>{product.description}</p>
                </td>
                <td className="px-6 py-3 text-left font-bold text-red-500">
                  ৳ {product.price}{" "}
                  {product.discount && (
                    <span className="ml-2 rounded bg-green-500 px-2 py-1 text-sm text-white">
                      {product.discount}% ছাড়
                    </span>
                  )}
                  {product.discount && (
                    <p className="text-gray-500 line-through">
                      ৳ {product.original_price}
                    </p>
                  )}
                </td>
                <td className="px-6 py-3 text-left">
                  <div className="flex items-center">
                    <button
                      className="rounded bg-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-300"
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={product.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          parseInt(e.target.value),
                        )
                      }
                      className="mx-2 w-12 rounded border text-center"
                    />
                    <button
                      className="rounded bg-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-300"
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-3 text-left font-bold text-red-500">
                  ৳ {product.price * product.quantity}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
