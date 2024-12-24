import React, { useState } from "react";
import {
  FaCcVisa,
  FaMoneyBillAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { orders, products } from "../../components/DummyData/DummyData"; // Import dummy data
import Button from "../Button/Button";

const PaymentMethods = ({ formData }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  // Static data from the first order in the dummy data
  const order = orders[0];
  const totalPrice = order.total;
  const shippingCost = order.shipping_cost;
  const finalTotal = order.grand_total;

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    // Validation checks
    const { name, email, phoneNumber, addressDetails } = formData;
    if (!name || !email || !phoneNumber || !addressDetails) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    const data = {
      name: formData.name,
      email: formData.email || null,
      phone_number: formData.phoneNumber,
      alt_phone_number: formData.altPhoneNumber || null,
      country: formData.country,
      district: formData.district,
      area: formData.area,
      address_details: formData.addressDetails,
      total: parseFloat(totalPrice),
      shipping_cost: parseFloat(shippingCost),
      grand_total: parseFloat(finalTotal),
      payment_method: paymentMethod,
      products: products.map((product) => ({
        product_id: product.id,
        quantity: 1, // Assuming 1 quantity for simplicity
      })),
    };

    console.log("Order Data:", data);

    // Simulate submission and redirect to order confirmation
    setTimeout(() => {
      navigate("/order-confirmation", { state: { order: data } });
    }, 1000);
  };

  return (
    <div className="rounded-md bg-white p-4 shadow-md sm:p-6 lg:p-8">
      <ToastContainer />
      <h2 className="mb-4 text-lg font-semibold sm:text-xl">
        পেমেন্ট মেথড (Payment Methods)
      </h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="cash_on_delivery"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <span>ক্যাশ-অন ডেলিভারি</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="bKash"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <FaMoneyBillAlt className="mr-2" />
          <span>bKash</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="rocket"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <FaCcVisa className="mr-2" />
          <span>Rocket</span>
        </label>
      </div>
      <div className="mt-4 flex flex-col justify-between sm:flex-row">
        <Button className="buttonRed mb-4 sm:mb-0 sm:mr-4" to="/cart">
          <FaStepBackward className="mr-2" />
          কার্টে ফেরত যান
        </Button>
        <Button className="buttonRed" onClick={handleSubmit}>
          অর্ডার সম্পন্ন করুন
          <FaStepForward className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethods;
