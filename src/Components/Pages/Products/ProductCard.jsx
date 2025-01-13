import { Link } from "react-router-dom";
import { FaCartPlus, FaHeart, FaHeartBroken } from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../../../Context/cart";
import { IoBagRemove } from "react-icons/io5";
import { favoriteContext } from "../../../Context/favorite";
import { motion } from "framer-motion";
import styles from "./productCard.module.css";

export default function ProductCard({ product }) {
  const { isInCart, addToCart, removeFromCart } = useContext(cartContext);
  const { isInFavorites, addToFavorites, removeFromFavorites } = useContext(favoriteContext);
  
  const inCart = isInCart(product);
  const inFavorites = isInFavorites(product);

  return (
    <motion.div
      className="col-md-3 col-sm-6 col-12 mx-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Link to={`/prod/${product.id}`}>
            <img
              src={product.images[0]}
              className={styles.productImage}
              alt={product.title}
            />
          </Link>
          <button
            className={`${styles.favoriteButton} ${inFavorites ? styles.active : ''}`}
            onClick={() => inFavorites ? removeFromFavorites(product.id) : addToFavorites(product)}
          >
            {inFavorites ? <FaHeartBroken /> : <FaHeart />}
          </button>
        </div>
        
        <div className={styles.cardBody}>
          <Link to={`/prod/${product.id}`} className={styles.productLink}>
            <h5 className={styles.cardTitle}>
              {product.title.split(" ").splice(0, 2).join(" ")}
            </h5>
          </Link>
          <p className={styles.price}>{product.price} EGP</p>
          
          <motion.button
            className={`${styles.cartButton} ${inCart ? styles.removeBtn : ''}`}
            onClick={() => inCart ? removeFromCart(product.id) : addToCart(product)}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.buttonIcon}>
              {inCart ? <IoBagRemove /> : <FaCartPlus />}
            </span>
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
