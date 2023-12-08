import advConditionsBg from 'Assets/adv_conditions_bg.png';
import advConditionsMobBg from 'Assets/adv_conditions_mob_bg.png';
import advGuaranteesBg from 'Assets/adv_guarantees_bg.png';
import advOrderBg from 'Assets/adv_order_bg.png';
import advOrderMobBg from 'Assets/adv_order_mob_bg.png';
import advPriceBg from 'Assets/adv_price_bg.png';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './advantages.scss';

export function Advantages() {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const orderBg = !isMobile ? {backgroundImage: `url(${advOrderBg})`} : {backgroundImage: `url(${advOrderMobBg})`}
  const conditionsBg = !isMobile ? {backgroundImage: `url(${advConditionsBg})`} : {backgroundImage: `url(${advConditionsMobBg})`}

  return (
    <section className={styles.advantages}>
        <div className={`${styles.containerFluid} ${styles.advantages__container}`}>
            <h2 className={styles.advantages__title}>Металл под заказ</h2>
            <div className={styles.advantages__items}>
                <div className={`${styles.advantages__item} ${styles.advantages__itemDark}`} style={orderBg}>
                    <h3 className={styles.advantages__itemTitle}>Оформление заказа</h3>
                    <p className={styles.advantages__itemDescription}>Оформив заказ через наш сайт вы получите лучшее предложение от проверенных поставщиков, которые работают напрямую с производителями уже более 10 лет</p>
                </div>
                <div className={`${styles.advantages__item} ${styles.advantages__itemLight}`} style={conditionsBg}>
                    <h3 className={styles.advantages__itemTitle}>Условия</h3>
                    <p className={styles.advantages__itemDescription}>Предложение будет включать в себя монтажную норму по каждой позиции, срок изготовления, стоимость и порядок оплаты</p>
                </div>
                <div className={`${styles.advantages__item} ${styles.advantages__itemLight}`} style={{backgroundImage: `url(${advPriceBg})`}}>
                    <h3 className={styles.advantages__itemTitle}>Цена и сервис</h3>
                    <p className={styles.advantages__itemDescription}>За счет персональных скидок у наших поставщиков цена будет на уровне заводской, а все проблемы с продвижением по производству вас не коснутся</p>
                </div>
                <div className={`${styles.advantages__item} ${styles.advantages__itemDark}`} style={{backgroundImage: `url(${advGuaranteesBg})`}}>
                    <h3 className={styles.advantages__itemTitle}>Гарантии</h3>
                    <p className={styles.advantages__itemDescription}>Каждая сделка оформляется по договору, прилагается спецификация. Вместе с металлопрокатом вы получите сертификат качества от производителя</p>
                </div>
            </div>
        </div>
    </section>
  );
}