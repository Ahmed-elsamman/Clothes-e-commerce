import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // حفظ السلة في localStorage كلما تتغير
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (isInCart(product)) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantityFromCart: item.quantityFromCart + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantityFromCart: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantityFromCart - 1;
          return newQuantity === 0
            ? null
            : { ...item, quantityFromCart: newQuantity };
        }
        return item;
      }).filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantityFromCart,
      0
    );
  };

  const getCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantityFromCart, 0);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        getCartTotal,
        getCartQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
