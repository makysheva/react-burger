import cn from "classnames";
import { Count } from "../Count";
import styles from "./Order.module.scss";

export const Order = () => {
  return (
    <section className={styles.order__wrapper}>
      <div className={styles.order__header} tabIndex={0} role="button">
        <h2 className={styles.order__title}>Корзина</h2>

        <span className={styles.order__count}>4</span>
      </div>

      <div className={styles.order__wrap_list}>
        <ul className={styles.order__list}>
          <li className={styles.order__item}>
            <img
              className={styles.order__image}
              src="img/burger_1.jpg"
              alt="Супер сырный"
            />

            <div className={cn(styles.order__goods, styles.goods)}>
              <h3 className={styles.goods__title}>Супер сырный</h3>

              <p className={styles.goods__weight}>512 г</p>

              <p className={styles.goods__price}>
                1279
                <span className={styles.currency}>₽</span>
              </p>
            </div>

            <Count />
          </li>

          <li className={styles.order__item}>
            <img
              className={styles.order__image}
              src="img/free_1.jpg"
              alt="Картошка фри"
            />

            <div className={cn(styles.order__goods, styles.goods)}>
              <h3 className={styles.goods__title}>Картошка фри</h3>

              <p className={styles.goods__weight}>180 г</p>

              <p className={styles.goods__price}>
                245
                <span className={styles.currency}>₽</span>
              </p>
            </div>

            <Count />
          </li>

          <li className={styles.order__item}>
            <img
              className={styles.order__image}
              src="img/hot-dog_1.jpg"
              alt="Жгучий хот-дог"
            />

            <div className={cn(styles.order__goods, styles.goods)}>
              <h3 className={styles.goods__title}>Жгучий хот-дог</h3>

              <p className={styles.goods__weight}>245г</p>

              <p className={styles.goods__price}>
                239
                <span className={styles.currency}>₽</span>
              </p>
            </div>

            <Count />
          </li>
        </ul>

        <div className={styles.order__total}>
          <p>Итого</p>
          <p>
            <span className={styles.order__amount}>1279</span>
            <span className={styles.currency}>₽</span>
          </p>
        </div>

        <button className={styles.order__submit}>Оформить заказ</button>

        <div className={styles.order__apeal}>
          <p className={styles.order__text}>Бесплатная доставка</p>
          <button className={styles.order__close}>Свернуть</button>
        </div>
      </div>
    </section>
  );
};
