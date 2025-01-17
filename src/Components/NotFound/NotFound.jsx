import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./notFound.module.css";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={styles.errorCode}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          404
        </motion.h1>

        <motion.div
          className={styles.glitchWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className={styles.glitchText} data-text="Page Not Found">
            Page Not Found
          </h2>
        </motion.div>

        <motion.p
          className={styles.message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Oops! The page you are looking for seems to have vanished into the
          digital void.
        </motion.p>

        <motion.div
          className={styles.buttonsContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link to="/">
            <motion.button
              className={`${styles.actionButton} ${styles.homeButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome className={styles.buttonIcon} />
              Return Home
            </motion.button>
          </Link>
          <Link to="/products">
            <motion.button
              className={`${styles.actionButton} ${styles.searchButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSearch className={styles.buttonIcon} />
              Browse Products
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
