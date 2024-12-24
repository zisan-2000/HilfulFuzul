import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const OrderConfirmation2 = () => {
  const location = useLocation();
  const { order } = location.state || {}; // Get order details from location state

  if (!order) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-xl text-red-500">No order details available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 rounded-md bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white shadow-md">
        <h2 className="flex items-center justify-center text-3xl font-bold">
          <FaCheckCircle className="mr-2" />
          আপনার অর্ডারটি কন্ফার্ম করার জন্য ধন্যবাদ
        </h2>
        <p className="mt-2 text-lg">
          আপনার অর্ডার এর আইডি: <span className="font-bold">#{order.id}</span>
        </p>
        <p className="mt-2 text-lg">
          মোট মূল্য: <span className="font-bold">৳ {order.grand_total}</span>
        </p>
      </div>

      <div className="rounded-md bg-white p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold">বিলি ঠিকানা</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold">{order.name}</p>
            <p>{order.email}</p>
            <p>{order.phone_number}</p>
          </div>
          <div>
            <p>
              {order.address_details}, {order.area}, {order.district},{" "}
              {order.country}
            </p>
          </div>
        </div>

        <h3 className="mb-4 mt-6 text-xl font-semibold">পণ্যের বিবরণ</h3>
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border-b px-4 py-2">ছবি</th>
              <th className="border-b px-4 py-2">বর্ণনা</th>
              <th className="border-b px-4 py-2">মূল্য</th>
              <th className="border-b px-4 py-2">পরিমান</th>
              <th className="border-b px-4 py-2">মোট মূল্য</th>
            </tr>
          </thead>
          <tbody>
            {order.order_items.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="border px-4 py-2">
                  <img
                    src={item.product_image} // Use product_image directly
                    alt={item.product_name}
                    className="h-16 w-16 rounded object-cover"
                  />
                </td>
                <td className="border px-4 py-2">{item.product_name}</td>
                <td className="border px-4 py-2">৳ {item.price}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">
                  ৳ {parseFloat(item.price) * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 rounded-md bg-gray-100 p-4">
          <p className="text-lg font-semibold">পণ্যের মূল্য: ৳ {order.total}</p>
          <p className="text-lg font-semibold">
            পরিবহন ব্যয়: ৳ {order.shipping_cost}
          </p>
          <p className="mt-2 text-xl font-bold">
            মোট মূল্য: ৳ {order.grand_total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation2;
