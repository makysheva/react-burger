import cn from "classnames";
import { Layout } from "../Layout";
import { Order } from "../Order";
import { Product } from "../Product";
import styles from "./Catalog.module.scss";

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Layout className={styles.catalog__container}>
        <div className={cn(styles.catalog__order, styles.order)}>
          <Order />
        </div>

        <div className={styles.catalog__wrapper}>
          <h2 className={styles.catalog__title}>Бургеры</h2>

          <div className={styles.catalog__wrap_list}>
            <ul className={styles.catalog__list}>
              <li className={styles.catalog__item}>
                <Product
                  imgSrc="img/photo-5.jpg"
                  imgAlt="Мясная бомба"
                  price={689}
                  detail="Мясная бомба"
                  weight={520}
                />
              </li>

              <li className={styles.catalog__item}>
                <Product
                  imgSrc="img/photo-1.jpg"
                  imgAlt="Супер сырный"
                  price={550}
                  detail="Супер сырный"
                  weight={512}
                />
              </li>

              <li className={styles.catalog__item}>
                <Product
                  imgSrc="img/photo-3.jpg"
                  imgAlt="Сытный"
                  price={639}
                  detail="Сытный"
                  weight={580}
                />
              </li>

              <li className={styles.catalog__item}>
                <Product
                  imgSrc="img/photo.jpg"
                  imgAlt="Тяжелый удар"
                  price={480}
                  detail="Тяжелый удар"
                  weight={470}
                />
              </li>

              <li className={styles.catalog__item}>
                <Product
                  imgSrc="img/photo-2.jpg"
                  imgAlt="Вечная классика"
                  price={450}
                  detail="Вечная классика"
                  weight={450}
                />
              </li>

              <li className={styles.catalog__item}>
                <Product
                  imgSrc="img/photo-4.jpg"
                  imgAlt="Итальянский"
                  price={560}
                  detail="Итальянский"
                  weight={510}
                />
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </section>
  );
};
