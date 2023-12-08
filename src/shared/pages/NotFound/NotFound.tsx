import React from "react";
import styles from "./notfound.scss";

export function NotFound() {
  return (
    <section className={styles.error}>
      <div className={styles.container}>
        <h1>Ошибка 404</h1>
        <p>Такой страницы нет!</p>
        <p>Страницы, которую Вы ищите, не существует</p>
      </div>
    </section>
  )
}
