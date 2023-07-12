import { useState } from 'react';
import styles from './carousel.module.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type CarouselProps = {
  images: string[];
};

export const Carousel = ({ images }: CarouselProps) => {
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
        src={`/images/${images[currentIndex]}`}
        alt="image-product-1"
        className={styles.image}
      />
      <div className={styles.controls}>
        <button onClick={previousImage} className={styles.previous}>
          <HiChevronLeft size={35} />
        </button>
        <button onClick={nextImage} className={styles.next}>
          <HiChevronRight size={35} />
        </button>
      </div>
    </div>
  );
};
