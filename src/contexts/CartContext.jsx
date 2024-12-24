import React, { createContext, useContext, useReducer } from "react";

// Initial state for the cart
const initialState = {
  items: [],
};

// Cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingProductIndex !== -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return { ...state, items: updatedItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "UPDATE_QUANTITY":
      const updatedCartItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
      return { ...state, items: updatedCartItems };

    default:
      return state;
  }
};

// Create Context
const CartContext = createContext();

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
