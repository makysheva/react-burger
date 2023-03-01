import styles from "./Count.module.scss";

export const Count = () => {
  return (
    <div className={styles.count}>
      <button className={styles.count__minus}>-</button>
      <p className={styles.count__amount}>1</p>
      <button className={styles.count__plus}>+</button>
    </div>
  );
};
