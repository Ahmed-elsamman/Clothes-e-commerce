import { useContext } from "react";
import { cartContext } from "../../../Context/cart";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Favorite from "../Favorite/Favorite";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    getCartTotal,
    getCartQuantity,
    clearCart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className="container text-center my-5">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to see them here!</p>
    <Favorite />
      
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        {/* Cart Items */}
        <div className="col-md-8">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.images[0]}
                    className="img-fluid rounded-start"
                    alt={item.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: {item.price} EGP</p>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantityFromCart}</span>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => addToCart(item)}
                      >
                        <FaPlus />
                      </button>
                      <button
                        className="btn btn-sm btn-danger ms-3"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cart Summary</h5>
              <p>Total Items: {getCartQuantity()}</p>
              <p>Total Price: {getCartTotal()} EGP</p>
              <Link to="/checkout">
              <button className="btn btn-primary w-100 mb-2">
                Proceed to Checkout
              </button>
              </Link>
              <button
                className="btn btn-outline-danger w-100"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    
    <Favorite />
    </div>
  );
}
