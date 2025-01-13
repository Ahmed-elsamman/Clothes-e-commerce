import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaHeartBroken } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './favorite.module.css';
import { favoriteContext } from '../../../Context/favorite';

export default function Favorite() {
  const { favorites, removeFromFavorites } = useContext(favoriteContext);

  if (favorites.length === 0) {
    return (
      <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaHeartBroken size={64} className="text-danger mb-4" />
        </motion.div>
        <h2 className="mb-3">Your Favorites List is Empty</h2>
        <p className="text-muted mb-4">Start adding some products you love!</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">My Favorites</h2>
      <div className="row g-4 justify-content-center">
        {favorites.map((product) => (
          <motion.div
            key={product.id}
            className="col-lg-3 col-md-4 col-sm-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Link to={`/prod/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className={styles.cardImage}
                />
                </Link>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromFavorites(product.id)}
                >
                  <FaHeartBroken />
                </button>
              </div>
              <div className={styles.cardBody}>
                <Link to={`/prod/${product.id}`} className={styles.productLink}>
                  <h5 className={styles.cardTitle}>
                    {product.title.split(" ").splice(0, 2).join(" ")}
                  </h5>
                </Link>
                <p className={styles.cardPrice}>{product.price} EGP</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
