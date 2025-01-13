import { useContext, useState } from "react";
import { cartContext } from "../../../Context/cart";
import { motion } from "framer-motion";
import styles from "./checkout.module.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useContext(cartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    clearCart();
    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <motion.div 
        className={styles.emptyCart}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Your cart is empty</h2>
        <p>Please add some items to your cart before checking out.</p>
        <motion.button 
          className={styles.returnButton}
          onClick={() => navigate("/products")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Shop
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <motion.h1 
        className={styles.title}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Checkout
      </motion.h1>

      <div className={styles.content}>
        <motion.div 
          className={styles.formSection}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={styles.input}
                />
                <span className={styles.label}>First Name</span>
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={styles.input}
                />
                <span className={styles.label}>Last Name</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
              />
              <span className={styles.label}>Email</span>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className={styles.input}
              />
              <span className={styles.label}>Shipping Address</span>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className={styles.input}
                />
                <span className={styles.label}>City</span>
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={styles.input}
                />
                <span className={styles.label}>ZIP Code</span>
              </div>
            </div>

            <h3 className={styles.paymentTitle}>Payment Details</h3>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="cardNumber"
                required
                value={formData.cardNumber}
                onChange={handleInputChange}
                className={styles.input}
                maxLength="16"
              />
              <span className={styles.label}>Card Number</span>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="expiryDate"
                  required
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="MM/YY"
                  maxLength="5"
                />
                <span className={styles.label}>Expiry Date</span>
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="cvv"
                  required
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className={styles.input}
                  maxLength="3"
                />
                <span className={styles.label}>CVV</span>
              </div>
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Pay ${getCartTotal()}
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          className={styles.orderSummary}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Order Summary</h3>
          <div className={styles.orderItems}>
            {cart.map((item) => (
              <motion.div 
                key={item.id} 
                className={styles.orderItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.images[0]} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h4>{item.title}</h4>
                  <p>Quantity: {item.quantityFromCart}</p>
                  <p className={styles.itemPrice}>${item.price * item.quantityFromCart}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.totalSection}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span>${getCartTotal()}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={`${styles.totalRow} ${styles.finalTotal}`}>
              <span>Total</span>
              <span>${getCartTotal()}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
