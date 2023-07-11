import { useState } from 'react';
import styles from './carouselDesktop.module.scss';

type CarouselDesktopProps = {
  images: string[];
};
export const CarouselDesktop = ({ images }: CarouselDesktopProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={styles.wrapper}>
    <div className={styles.mainImage}>

      <img src={`/public/images/${images[currentIndex]}`} alt="" />
    </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <button onClick={() => setCurrentIndex(index)} className={styles.button}>
            <img src={`/public/images/${image}`} alt="" key={index} />
          </button>
        ))}
      </div>
    </div>
  );
};
