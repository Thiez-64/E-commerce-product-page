import { useContext } from 'react';
import { IconCart, IconLogo, IconMenu } from '../icons';
import styles from './banner.module.scss';
import GlobalContext from '../context/GlobalContext';

export const Banner = () => {
  const { counter, setIsMenu, isCart, setIsCart } = useContext(GlobalContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.burger}>
        <button onClick={() => setIsMenu(true)}>
          <IconMenu className={styles.menu} />
        </button>
        <IconLogo className={styles.logo} />
      </div>
      <div className={styles.action}>
        <div className={styles.cartItems}>
          <button onClick={() => setIsCart(!isCart)}>
            <IconCart className={styles.cart} />
          </button>
          {counter > 0 && (
            <div className={styles.bubble}>
              <div className={styles.counter}>{counter}</div>
            </div>
          )}
        </div>
        <img
          src="./public/images/image-avatar.png"
          alt="avatar"
          className={styles.avatar}
        />
      </div>
    </div>
  );
};
