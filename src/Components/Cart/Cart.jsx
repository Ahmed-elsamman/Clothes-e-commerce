import { cartContext } from "../../Context/cart";
import ProductCard from "../Pages/Products/ProductCard";
import { useContext } from "react";

export default function Cart() {
  const { cart, getCartQuantity, getCartTotal, clearCart, removeFromCart } =
    useContext(cartContext);
  return (
    <>
      <div className="row g-4 mt-5 justify-content-center align-items-center">
        <h1>Your Cart</h1>
        {cart.map((item, index) => {
          return (
            <>
              <ProductCard key={index} product={item} />
            </>
          );
        })}
      </div>
    </>
  );
}
