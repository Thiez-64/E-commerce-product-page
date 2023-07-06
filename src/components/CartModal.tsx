import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import styles from './cartModal.module.scss';
import { IconDelete } from '../icons';

export const CartModal = () => {
  const { counter, setCounter } = useContext(GlobalContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Cart</div>
      <hr />
      {counter > 0 ? (
        <>
          <div className={styles.product}>
            <img
              src="/public/images/image-product-1-thumbnail.jpg"
              alt="image-product-1-thumbnail"
              className={styles.image}
            />
            <div className={styles.content}>
              <div className={styles.name}>Fall Limited Edition Sneakers</div>
              <div className={styles.price}>{`$125.00 x ${counter} $${
                counter * 125
              }.00`}</div>
            </div>
            <button onClick={() => setCounter(0)}>
              <IconDelete />
            </button>
          </div>
          <button className={styles.add}>
            <div className={styles.title}>Checkout</div>
          </button>
        </>
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
};
