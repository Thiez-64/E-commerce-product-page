import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import styles from './cartModal.module.scss';

import { HiOutlineTrash } from 'react-icons/hi';

export const CartModal = () => {
  const { counter, setCounter } = useContext(GlobalContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Cart</div>
      <hr />
      {counter > 0 ? (
        <>
          <div className={styles.line}>
            <div className={styles.product}>
              <img
                src="/images/image-product-1-thumbnail.jpg"
                alt="image-product-1-thumbnail"
                className={styles.image}
              />
              <div className={styles.content}>
                <div className={styles.name}>Fall Limited Edition Sneakers</div>
                <div className={styles.price}>
                  <div className={styles.originalPrice}>
                    {`$125.00 x ${counter}`}
                  </div>
                  <div className={styles.detail}>{`$${counter * 125}.00`}</div>
                </div>
              </div>
              <button onClick={() => setCounter(0)}>
                <HiOutlineTrash className={styles.delete} size={35} />
              </button>
            </div>
            <button className={styles.add}>
              <div className={styles.title}>Checkout</div>
            </button>
          </div>
        </>
      ) : (
        <div className={styles.noline}>
          <div className={styles.empty}>Your cart is empty.</div>
        </div>
      )}
    </div>
  );
};
