import styles from './accordion.module.scss';

const tabs = [
  {
    image: './public/images/image-product-1.jpg',
    alt: 'image-product-1',
    indicator: '01',
    title: 'Chasing Gold',
    element: 'Brand',
    brand: 'Reebok',
  },
  {
    image: './public/images/image-product-2.jpg',
    alt: 'image-product-2',
    indicator: '02',
    title: 'Be More Human',
    element: 'integrated',
    brand: 'Nike',
  },
  {
    image: './public/images/image-product-3.jpg',
    alt: 'image-product-3',
    indicator: '03',
    title: 'Legacy Summit',
    element: 'Activation',
    brand: 'McDonald',
  },
  {
    image: './public/images/image-product-4.jpg',
    alt: 'image-product-4',
    indicator: '04',
    title: 'Creative',
    element: 'Creation',
    brand: 'Vans',
  },
];

export const Accordion = () => {
  return (
    <>
      {tabs.map((tab, index) => (
        <div className={styles.wrapper} key={index}>
          <img className={styles.image} src={tab.image} alt={tab.alt} />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <div className={styles.indicator}>{tab.indicator}</div>
            <div className={styles.main}>
              <div className={styles.title}>{tab.title}</div>
              <div className={styles.subtitle}>
                <div className={styles.element}>{tab.element}</div>
                <div className={styles.brand}>{tab.brand}</div>
              </div>
            </div>
          </div>
          <div className={styles.shutter} />
        </div>
      ))}
    </>
  );
};
