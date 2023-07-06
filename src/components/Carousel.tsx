import { useState } from 'react';
import { IconNext, IconPrevious } from '../icons';
import styles from './carousel.module.scss';

const images = [
  'image-product-1.jpg',
  'image-product-2.jpg',
  'image-product-3.jpg',
  'image-product-4.jpg',
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className={styles.wrapper}>
      <img
        src={`/public/images/${images[currentIndex]}`}
        alt="image-product-1"
        className={styles.image}
      />
      <div className={styles.controls}>
        <button onClick={previousImage}>
          <IconPrevious className={`${styles.control} ${styles.previous}`} />
        </button>
        <button onClick={nextImage}>
          <IconNext className={`${styles.control} ${styles.next}`} />
        </button>
      </div>
    </div>
  );
};
