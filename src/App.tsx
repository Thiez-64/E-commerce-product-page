import { useContext } from 'react';
import { Banner } from './components/Banner';
import { Carousel } from './components/Carousel';
import { Product } from './components/Product';
import GlobalContext from './context/GlobalContext';
import { createPortal } from 'react-dom';
import { MenuModal } from './components/MenuModal';
import { CartModal } from './components/CartModal';

const App = () => {
  const { isMenu, isCart } = useContext(GlobalContext);

  return (
    <>
      <header>
        <Banner />
      </header>
      <section>
        <Carousel />
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
