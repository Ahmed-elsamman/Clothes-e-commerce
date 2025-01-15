import React, { useContext } from 'react';
import { UserAccountContext } from '../../../Context/auth';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPen } from 'react-icons/fa';
import styles from './profile.module.css';
import { favoriteContext } from '../../../Context/favorite';
import { cartContext } from '../../../Context/cart';
import { MdNotificationsActive } from "react-icons/md";
import { SiPrimeng } from "react-icons/si";

export default function Profile() {
  const { user } = useContext(UserAccountContext);
  const { favorites } = useContext(favoriteContext);
  const { cart } = useContext(cartContext);

  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    return user?.email?.[0].toUpperCase() || 'U';
  };

  return (
    <div className={styles.profileContainer}>
      <motion.div
        className={styles.profileCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.profileHeader}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              {getInitials()}
            </div>
            <button className={styles.editButton}>
              <FaPen />
            </button>
          </div>
          <h2 className={styles.userName}>
            {user?.firstName ? `${user.firstName} ${user.lastName}` : 'User Profile'}
          </h2>
        </div>

        <div className={styles.profileInfo}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.infoIcon}>
              <FaUser />
            </div>
            <div className={styles.infoContent}>
              <h3>Full Name</h3>
              <p>{user?.firstName ? `${user.firstName} ${user.lastName}` : 'Not provided'}</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.infoIcon}>
              <FaEnvelope />
            </div>
            <div className={styles.infoContent}>
              <h3>Email Address</h3>
              <p>{user?.email || 'Not provided'}</p>
            </div>
          </motion.div>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.infoIcon}>
            <SiPrimeng />
            </div>
            <div className={styles.infoContent}>
              <h3>subscription</h3>
              <p>{user?.email ? 'VIP User ':"Normal User"}</p>
            </div>
          </motion.div>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.infoIcon}>
            <MdNotificationsActive />

            </div>
            <div className={styles.infoContent}>
              <h3>Stauts</h3>
              <p>{user?.email ? 'Active':'Offline'}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.statsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.statCard}>
            <h4>Your Cart</h4>
            <p>{cart.length}</p>
          </div>
          <div className={styles.statCard}>
            <h4>Orders</h4>
            <p>0</p>
          </div>
          <div className={styles.statCard}>
            <h4>Wishlist</h4>
            <p>{favorites.length}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
