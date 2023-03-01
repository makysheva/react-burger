import cn from 'classnames'
import { Layout } from '../Layout'
import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Layout className={styles.navigation__container}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_burger, styles.navigation__button_active)}>Бургеры</button>
          </li>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_snack)}>Закуски</button>
          </li>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_hotdog)}>Хот-доги</button>
          </li>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_combo)}>Комбо</button>
          </li>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_shawarma)}>Шаурма</button>
          </li>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_pizza)}>Пицца</button>
          </li>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_wok)}>Вок</button>
          </li>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_dessert)}>Десерты</button>
          </li>
          <li className={styles.navigation__item}>
            <button className={cn(styles.navigation__button, styles.navigation__button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Layout>
    </nav>
  )
}
