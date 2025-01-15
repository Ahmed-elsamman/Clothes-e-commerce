import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import styles from './slider.module.css';
import { motion } from 'framer-motion';

export default function MainSlider({ items, type }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: type === 'category' ? 4 : 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: type === 'category' ? 3 : 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const renderContent = (item) => {
    if (type === 'category') {
      return (
        <div className={styles.categorySlide}>
          <img src={item.image} alt={item.name} className={styles.categoryImage} />
          <h3 className={styles.categoryName}>{item.name}</h3>
        </div>
      );
    }

    return (
      <div className={styles.productSlide}>
        <div className={styles.imageWrapper}>
          <img src={item.images[0]} alt={item.title} className={styles.productImage} />
          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>{item.title}</h3>
            <p className={styles.productPrice}>${item.price}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={type === 'category' ? `/products` : `/prod/${item.id}`}>
              {renderContent(item)}
            </Link>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
