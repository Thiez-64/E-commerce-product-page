import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import styles from './menuModal.module.scss';
import { IconClose } from '../icons';

export const MenuModal = () => {
  const { setIsMenu } = useContext(GlobalContext);
  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={() => setIsMenu(false)}>
          <IconClose className={styles.close} />
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
