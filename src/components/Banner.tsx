import { useContext } from 'react';
import styles from './banner.module.scss';
import GlobalContext from '../context/GlobalContext';
import { HiMenu, HiOutlineShoppingCart } from 'react-icons/hi';

export const Banner = () => {
  const { counter, setIsMenu, isCart, setIsCart } = useContext(GlobalContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.burger}>
        <button onClick={() => setIsMenu(true)}>
          <HiMenu className={styles.menu} size={30} />
        </button>
        <div className={styles.logo}>sneakers</div>
      </div>

      <ul>
        <div className={styles.logo}>sneakers</div>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className={styles.action}>
        <div className={styles.cartItems}>
          <button onClick={() => setIsCart(!isCart)}>
            <HiOutlineShoppingCart className={styles.cart} size={30} />
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
