import { createContext, useState } from "react";

export const cartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [flagCart, setFlagCart] = useState(true);
  const addToCart = (product) => {
    if (isInCart(product)) {
      return setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantityFromCart: item.quantityFromCart + 1 }
            : item
        )
      );
    }

    setCart([...cart, { ...product, quantityFromCart: 1, onCart: true }]);
    localStorage.removeItem("cart");

    localStorage.setItem("cart", JSON.stringify(cart));
    setFlagCart(false);
  };
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    localStorage.setItem("cart", cart);
    setFlagCart(true);
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const isInCart = (product) => {
    if (localStorage.getItem("cart") === null) {
      return cart.some((item) => item.id === product.id);
    }
  };
  const getCartTotal = () => {
    if (localStorage.getItem("cart") === null) {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }
  };
  const getCartQuantity = () => {
    if (localStorage.getItem("cart") === null) {
      return cart.reduce((total, item) => total + item.quantity, 0);
    }
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        setFlagCart,
        flagCart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        getCartTotal,
        getCartQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
