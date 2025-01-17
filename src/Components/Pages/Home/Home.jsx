import homePic from "../../../images/homePic.jpg";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../Loader/Loader";
import MainSlider from "../../Slider/Slider";
import { motion } from "framer-motion";
import styles from "./home.module.css";

export default function Home() {
  function getAllProducts() {
    return axios.get("https://api.escuelajs.co/api/v1/products");
  }

  function getAllCategories() {
    return axios.get("https://api.escuelajs.co/api/v1/categories");
  }

  const { data: productsData, isLoading: productsLoading } = useQuery(
    "products",
    getAllProducts,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery(
    "categories",
    getAllCategories,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (productsLoading || categoriesLoading) return <Loader />;

  return (
    <div className={styles.homeContainer}>
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to Our Online Store
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover amazing products at great prices
          </motion.p>
        </div>
        <div className={styles.heroImageWrapper}>
          <img src={homePic} alt="Home pic" className={styles.heroImage} />
        </div>
      </motion.div>

      <div className={styles.mainContent}>
        <motion.div 
          className={styles.categorySection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <MainSlider 
            items={categoriesData?.data} 
            type="category" 
          />
        </motion.div>

        <motion.div 
          className={styles.productsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <MainSlider 
            items={productsData?.data.filter(
              product => 
                !product.images[0].includes("[") && 
                !product.images[0].includes("]")
            )} 
            type="product" 
          />
        </motion.div>
      </div>
    </div>
  );
}
