import { useContext } from 'react';
import { Banner } from './components/Banner';
import { Carousel } from './components/Carousel';
import { Product } from './components/Product';
import GlobalContext from './context/GlobalContext';
import { createPortal } from 'react-dom';
import { MenuModal } from './components/MenuModal';
import { CartModal } from './components/CartModal';
import { CarouselDesktop } from './components/CarouselDesktop';
import styles from './app.module.scss';

const images = [
  'image-product-1.jpg',
  'image-product-2.jpg',
  'image-product-3.jpg',
  'image-product-4.jpg',
];

const App = () => {
  const { isMenu, isCart } = useContext(GlobalContext);

  return (
    <>
      <header>
        <Banner />
      </header>
      <section className={styles.section}>
        <div className={styles.carousel}>
          <Carousel images={images} />
        </div>
        <div className={styles.carouselDesktop}>
          <CarouselDesktop images={images} />
        </div>
        <Product />
      </section>
      {isMenu &&
        createPortal(
          <MenuModal />,
          document.getElementById('modal-root') as HTMLElement,
        )}
      {isCart &&
        createPortal(
          <CartModal />,
          document.getElementById('modal-root') as HTMLElement,
        )}
    </>
  );
};

export default App;
