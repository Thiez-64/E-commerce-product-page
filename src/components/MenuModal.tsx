import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import styles from './menuModal.module.scss';
import { HiX } from 'react-icons/hi';

export const MenuModal = () => {
  const { setIsMenu } = useContext(GlobalContext);
  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={() => setIsMenu(false)}>
          <HiX className={styles.close} size={35} />
        </button>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.overlay} />
    </>
  );
};
