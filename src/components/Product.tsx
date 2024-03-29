import { useContext, useState } from 'react';
import styles from './product.module.scss';
import GlobalContext from '../context/GlobalContext';
import { HiMinusSm, HiPlusSm, HiOutlineShoppingCart } from 'react-icons/hi';

export const Product = () => {
  const [indicator, setIndicator] = useState(0);
  const { setCounter } = useContext(GlobalContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.company}>SNEAKER COMPANY</div>
        <div className={styles.product}>Fall Limited Edition Sneakers</div>
        <div className={styles.description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </div>
        <div className={styles.prices}>
          <div className={styles.price}>
            <div className={styles.finalPrice}>$125.00</div>
            <div className={styles.reduction}>50%</div>
          </div>
          <div className={styles.originalPrice}>$250.00</div>
        </div>

        <div className={styles.actions}>
          <div className={styles.selector}>
            <button
              onClick={() => setIndicator(indicator !== 0 ? indicator - 1 : 0)}
            >
              <HiMinusSm className={styles.select} size={35} />
            </button>
            <div className={styles.indicator}>{indicator}</div>
            <button onClick={() => setIndicator(indicator + 1)}>
              <HiPlusSm className={styles.select} size={35} />
            </button>
          </div>
          <button className={styles.add} onClick={() => setCounter(indicator)}>
            <HiOutlineShoppingCart className={styles.cart} size={20} />
            <div className={styles.title}>Add to cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};
