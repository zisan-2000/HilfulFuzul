import React from "react";
import CartButtonContainer from "../components/cart/CartButtonContainer";
import CartTable from "../components/cart/CartTable";
import KuponCode from "../components/cart/KuponCode";
import OrderSummary from "../components/cart/OrderSummary";
import { useCart } from "../contexts/CartContext";

const CartPage = () => {
  const { cart, updateQuantity } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity >= 1) {
      updateQuantity(productId, quantity);
    }
  };

  const calculateTotalPrice = () => {
    return cart.items.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  };

  const shippingCost = 60.0;
  const totalPrice = calculateTotalPrice();
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        শপিং কার্ট
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="col-span-2">
          <CartTable cart={cart} handleQuantityChange={handleQuantityChange} />
          <div className="mt-8">
            <CartButtonContainer />
          </div>
        </div>
        <div className="col-span-1 space-y-8">
          <KuponCode />
          <OrderSummary
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            finalTotal={finalTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
