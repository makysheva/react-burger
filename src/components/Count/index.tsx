import { FC, useState } from "react";
import styles from "./Count.module.scss";

type Props = {
  num: number
}

export const Count: FC<Props> = ({num}) => {
  const [count, setCount] = useState(num)

  const plusCount = () => {
    setCount(count + 1)
  }

  const minusCount = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }

  return (
    <div className={styles.count}>
      <button className={styles.count__minus} onClick={minusCount} disabled={count === 1}>-</button>
      <p className={styles.count__amount}>{count}</p>
      <button className={styles.count__plus} onClick={plusCount}>+</button>
    </div>
  );
};
