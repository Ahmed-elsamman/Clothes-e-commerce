import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useContext } from "react";
import { favoriteContext } from "../../../Context/favorite";
import { cartContext } from "../../../Context/cart";
import { FaHeart, FaHeartBroken, FaCartPlus } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import { motion } from "framer-motion";
import styles from "./productDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { isInFavorites, addToFavorites, removeFromFavorites } = useContext(favoriteContext);
  const { isInCart, addToCart, removeFromCart } = useContext(cartContext);

  function getProductById(id) {
    return axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

  const { data, isLoading } = useQuery(
    ["ProductDetails", id],
    () => getProductById(id),
    {}
  );

  if (isLoading) return <Loader />;

  const product = data?.data;
  const inFavorites = isInFavorites(product);
  const inCart = isInCart(product);

  return (
    <div className="container my-5">
      <div className={styles.productContainer}>
        <motion.div 
          className={styles.imageSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className={styles.productImage}
          />
        </motion.div>

        <motion.div 
          className={styles.detailsSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>{product.title}</h2>
          <h4 className={styles.category}>{product.category.name}</h4>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price} EGP</p>
          
          <div className={styles.actionButtons}>
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

            <motion.button
              className={`${styles.favoriteButton} ${inFavorites ? styles.active : ''}`}
              onClick={() => inFavorites ? removeFromFavorites(product.id) : addToFavorites(product)}
              whileTap={{ scale: 0.95 }}
            >
              {inFavorites ? <FaHeartBroken /> : <FaHeart />}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
