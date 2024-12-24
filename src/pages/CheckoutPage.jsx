import React, { useState } from "react";
import CheckoutForm from "../components/CheckOut/CheckoutForm";
import CheckoutSummary from "../components/CheckOut/CheckoutSummary";
import PaymentMethods from "../components/CheckOut/PaymentMethods";
import { useCart } from "../contexts/CartContext";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({});
  const { cart } = useCart();

  const calculateTotalPrice = () => {
    return cart.items.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  };

  const totalPrice = calculateTotalPrice();
  const shippingCost = 60.0; // Example shipping cost
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        <div className="lg:col-span-2 xl:col-span-3">
          <CheckoutForm setFormData={setFormData} />
        </div>
        <div className="lg:col-span-1 xl:col-span-1">
          <CheckoutSummary
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            finalTotal={finalTotal}
          />
        </div>
        <div className="mt-6 lg:col-span-3 xl:col-span-4">
          <PaymentMethods
            formData={formData}
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            finalTotal={finalTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
