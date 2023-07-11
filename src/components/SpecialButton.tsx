import styles from './specialButton.module.scss';

export const SpecialButton = () => {
  return (
    <button>
      <div className={styles.arrow}>
        <span className={styles.head}/>
        <span className={styles.body}/>
      </div>
      <div className={styles.content}>Special Button</div>
    </button>
  );
};
