import React, { FC } from "react";
import styles from "./Product.module.scss";

type Props = {
    imgSrc: string
    imgAlt: string
    price: number
    detail: string
    weight: number
}

export const Product: FC<Props> = ({imgSrc, imgAlt, price, detail, weight}) => {
  return (
    <article className={styles.product}>
      <img
        src={imgSrc}
        alt={imgAlt}
        className={styles.product__image}
      />

      <p className={styles.product__price}>
        {price}<span className={styles.currency}>₽</span>
      </p>

      <h3 className={styles.product__title}>
        <button className={styles.product__detail}>{detail}</button>
      </h3>

      <p className={styles.product__weight}>{weight} г</p>

      <button className={styles.product__add} type="button">
        Добавить
      </button>
    </article>
  );
};
