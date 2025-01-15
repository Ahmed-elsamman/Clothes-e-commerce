import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";
import styles from "./about.module.css";

export default function About() {
  const features = [
    {
      icon: <FaShoppingBag />,
      title: "Wide Selection",
      description: "Browse through thousands of products from top brands and local sellers."
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "Get your orders delivered to your doorstep quickly and efficiently."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Our customer service team is always here to help you with any questions."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Shopping",
      description: "Shop with confidence knowing your transactions are safe and secure."
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Our Store</h1>
        <p>Your one-stop destination for quality products and exceptional service</p>
      </motion.div>

      <div className={styles.contentSection}>
        <motion.div 
          className={styles.missionSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Our Mission</h2>
          <p>
            We strive to provide our customers with the best shopping experience possible,
            offering high-quality products at competitive prices. Our commitment to
            excellence drives us to continuously improve and innovate in everything we do.
          </p>
        </motion.div>

        <motion.div 
          className={styles.featuresGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 2) }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.valuesSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2>Our Values</h2>
          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <h4>Quality</h4>
              <p>We ensure all products meet our high standards</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Integrity</h4>
              <p>We operate with honesty and transparency</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Innovation</h4>
              <p>We continuously evolve to serve you better</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
