import jsPDF from "jspdf";
import "jspdf-autotable";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { orderItems, orders } from "../../components/DummyData/DummyData"; // Import dummy data

const OrderConfirmation = () => {
  // Get the first order from the dummy data
  const order = orders[0];

  // Get the order items associated with the order
  const orderItemsForOrder = orderItems.filter(
    (item) => item.order.id === order.id,
  );

  const downloadReceipt = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Order Confirmation Receipt", 20, 20);

    // Add order details
    doc.setFontSize(12);
    doc.text(`Order ID: #${order.id}`, 20, 30);
    doc.text(`Customer Name: ${order.name}`, 20, 40);
    doc.text(`Email: ${order.email}`, 20, 50);
    doc.text(`Phone Number: ${order.phone_number}`, 20, 60);
    doc.text(
      `Address: ${order.address_details}, ${order.area}, ${order.district}, ${order.country}`,
      20,
      70,
    );

    // Add table with order items using autoTable
    let yOffset = 90;
    doc.text("Product Details", 20, yOffset);
    yOffset += 10;

    doc.autoTable({
      startY: yOffset,
      head: [["Product", "Price", "Quantity", "Total"]],
      body: orderItemsForOrder.map((item) => [
        item.product.name,
        `৳ ${item.price}`,
        item.quantity,
        `৳ ${parseFloat(item.price) * item.quantity}`,
      ]),
      theme: "grid",
    });

    // Add totals
    yOffset = doc.lastAutoTable.finalY + 10; // Updated to doc.lastAutoTable
    doc.text(`Product Total: ৳ ${order.total}`, 20, yOffset);
    yOffset += 10;
    doc.text(`Shipping Cost: ৳ ${order.shipping_cost}`, 20, yOffset);
    yOffset += 10;
    doc.setFontSize(14);
    doc.text(`Grand Total: ৳ ${order.grand_total}`, 20, yOffset);

    // Save the PDF
    doc.save(`Order_${order.id}_Receipt.pdf`);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6 rounded-md bg-gradient-to-r from-green-400 to-blue-500 p-4 text-white shadow-md sm:p-6 lg:p-8">
        <h2 className="flex items-center justify-center text-center text-2xl font-bold sm:text-3xl">
          <FaCheckCircle className="mr-2" />
          আপনার অর্ডারটি কন্ফার্ম করার জন্য ধন্যবাদ
        </h2>
        <p className="mt-2 text-center text-lg">
          আপনার অর্ডার এর আইডি: <span className="font-bold">#{order.id}</span>
        </p>
        <p className="mt-2 text-center text-lg">
          মোট মূল্য: <span className="font-bold">৳ {order.grand_total}</span>
        </p>
      </div>

      <div className="rounded-md bg-white p-4 shadow-md sm:p-6 lg:p-8">
        <h3 className="mb-4 text-xl font-semibold">বিলি ঠিকানা</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="font-bold">{order.name}</p>
            <p>{order.email}</p>
            <p>{order.phone_number}</p>
            <p>
              {order.address_details}, {order.area}, {order.district},{" "}
              {order.country}
            </p>
          </div>
        </div>

        <h3 className="mb-4 mt-6 text-xl font-semibold">পণ্যের বিবরণ</h3>
        <div className="overflow-x-auto">
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
              {orderItemsForOrder.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="border px-4 py-2">
                    <img
                      src={item.product.image} // Use product_image directly
                      alt={item.product.name}
                      className="h-16 w-16 rounded object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.product.name}</td>
                  <td className="border px-4 py-2">৳ {item.price}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">
                    ৳ {parseFloat(item.price) * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-md bg-gray-100 p-4">
          <p className="text-lg font-semibold">পণ্যের মূল্য: ৳ {order.total}</p>
          <p className="text-lg font-semibold">
            পরিবহন ব্যয়: ৳ {order.shipping_cost}
          </p>
          <p className="mt-2 text-xl font-bold">
            মোট মূল্য: ৳ {order.grand_total}
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={downloadReceipt}
            className="rounded bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
          >
            রিসিপ্ট ডাউনলোড করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
