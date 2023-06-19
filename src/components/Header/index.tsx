import React from "react";
import { Layout } from "../Layout";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Layout className={styles.header__container}>
        <img
          className={styles.header__logo}
          src="img/logo.svg"
          alt="Логотип YourMeal"
        />

        <div className={styles.header__wrapper}>
          <h1 className={styles.header__title}>
            <span>Только самые</span>
            <span className={styles.header__red}>сочные бургеры!</span>
          </h1>

          <p className={styles.header__appeal}>Бесплатная доставка от 599₽</p>
        </div>
        <img
          className={styles.header__login}
          src="img/login.png"
          alt="Login"
        />
      </Layout>
    </header>
  );
};
