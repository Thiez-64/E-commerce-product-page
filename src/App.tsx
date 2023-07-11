import { useContext } from 'react';
import { Banner } from './components/Banner';
import { Carousel } from './components/Carousel';
import { Product } from './components/Product';
import GlobalContext from './context/GlobalContext';
import { createPortal } from 'react-dom';
import { MenuModal } from './components/MenuModal';
import { CartModal } from './components/CartModal';
import { Accordion } from './components/Accordion';

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
        {/* <Accordion /> */}
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
