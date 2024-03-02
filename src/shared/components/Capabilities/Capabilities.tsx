import executor_1 from 'Assets/executor_1.jpg';
import plant_1_logo from 'Assets/plant_1.jpg';
import plant_2_logo from 'Assets/plant_2.jpg';
import plant_3_logo from 'Assets/plant_3.jpg';
import plant_4_logo from 'Assets/plant_4.jpg';
import plant_5_logo from 'Assets/plant_5.jpg';
import plant_6_logo from 'Assets/plant_6.jpg';
import React, { useState } from 'react';
import { Icon } from '../icons/Icon/Icon';
import { EIcon } from '../icons/enums';
import styles from './capabilities.scss';

export function Capabilities() {
  const [techReqOpen, setTechReqOpen] = useState(false);

  function openTechReq() {
    setTechReqOpen(!techReqOpen);
  }

  return (
    <section className={styles.capabilities}>
        <div className={`${styles.containerFluid} ${styles.capabilities__container}`}>
            <h2 className={styles.capabilities__title}>Наши возможности</h2>
            <div className={styles.capabilities__infoContainer}>
                <div className={styles.capabilities__infoLeft}>
                    <h3 className={styles.capabilities__colTitle}>Прокат</h3>
                    <div className={styles.capabilities__infoBox}>
                        <h4 className={styles.capabilities__infoBoxTitle}>Вид проката</h4>
                        <div className={styles.capabilities__infoBoxContent}>
                            <p>Круг</p>
                            <p>Поковки</p>
                            <p>Шестигранник</p>
                            <p>Лист</p>
                            <p>Квадрат</p>
                        </div>
                    </div>
                    <div className={styles.capabilities__infoBox}>
                        <h4 className={styles.capabilities__infoBoxTitle}>Специальный прокат</h4>
                        <div className={styles.capabilities__infoBoxContent}>
                            <p>ЭИ 10-997</p>
                            <p>Н 48-99</p>
                            <p>ЭК 2-154</p>
                            <p>ЧС 4-115</p>
                            <p>ЭП 11-988</p>
                        </div>
                        <h5 className={
                            techReqOpen ? `${styles.capabilities__infoBoxSubtitle} ${styles.capabilities__techReqOpen}` :  `${styles.capabilities__infoBoxSubtitle}`
                        } onClick={openTechReq}>
                            Технические требования
                            <Icon name={EIcon.openTechReqIcon} />
                        </h5>
                        {techReqOpen &&
                            <div className={styles.capabilities__techReqContent}>
                                <div className={styles.capabilities__techReqLeft}>
                                    <ul>
                                        <li className={styles.capabilities__techReqItem}>ВД вакуумно-дуговой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ВП вакуумно-плазменный переплав</li>
                                        <li className={styles.capabilities__techReqItem}>Ш шлаковый  переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ПТ плазменная выплавка</li>
                                        <li className={styles.capabilities__techReqItem}>ЭЛ электронно-лучевой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ВО вакуумно-кислородное рафинирование</li>
                                        <li className={styles.capabilities__techReqItem}>ШД шлаковый переплав плюс вакуумно-дуговой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ШП электрошлаковый переплав плюс плазменно-дуговой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ПД плазменная выплавка плюс вакуумно-дуговой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ИД вакуумно-индукционная выплавка плюс вакуумно-дуговой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ИЛ вакуумно-индукционная выплавка плюс электронно-лучевой переплав</li>
                                    </ul>
                                </div>
                                <div className={styles.capabilities__techReqRight}>
                                    <ul>
                                        <li className={styles.capabilities__techReqItem}>ВИ вакуумно-индукционный  переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ГР газокислородное рафинирование</li>
                                        <li className={styles.capabilities__techReqItem}>ПВ прямого восстановления</li>
                                        <li className={styles.capabilities__techReqItem}>П плазменно-дуговой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>СШ обработка синтетическим шлаком</li>
                                        <li className={styles.capabilities__techReqItem}>ГШ плазменная выплавка плюс электрошлаковый переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ШЛ шлаковый переплав плюс электронно-лучевой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ПП плазменная выплавка плюс плазменно-дуговой переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ПШ плазменная выплавка плюс электрошлаковый переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ИШ вакуумно-индукционная выплавка плюс электрошлаковый переплав</li>
                                        <li className={styles.capabilities__techReqItem}>ИП вакуумно-индукционная выплавка плюс плазменно-дуговой переплав</li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles.capabilities__infoBox}>
                        <h4 className={styles.capabilities__infoBoxTitle}>Заводы изготовители</h4>
                        <div className={styles.capabilities__infoBoxLogos}>
                            <div className={styles.capabilities__plant} style={{backgroundImage: `url(${plant_1_logo})`}}></div>
                            <div className={styles.capabilities__plant} style={{backgroundImage: `url(${plant_2_logo})`}}></div>
                            <div className={styles.capabilities__plant} style={{backgroundImage: `url(${plant_3_logo})`}}></div>
                            <div className={styles.capabilities__plant} style={{backgroundImage: `url(${plant_4_logo})`}}></div>
                            <div className={styles.capabilities__plant} style={{backgroundImage: `url(${plant_5_logo})`}}></div>
                            <div className={styles.capabilities__plant} style={{backgroundImage: `url(${plant_6_logo})`}}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.capabilities__infoRight}>
                    <h3 className={styles.capabilities__colTitle}>Металлообработка</h3>
                    <div className={styles.capabilities__infoBox}>
                        <h4 className={styles.capabilities__infoBoxTitle}>Вид обработки</h4>
                        <div className={styles.capabilities__infoBoxContentTwoCols}>
                            <p>Лазерная резка</p>
                            <p>Вальцовка</p>
                            <p>Плазменная резка</p>
                            <p>Гибка</p>
                            <p>Токарка</p>
                            <p>Труборез</p>
                            <p>Фрезер</p>
                            <p>Трубогиб</p>
                        </div>
                    </div>
                    <div className={styles.capabilities__infoBox}>
                        <h4 className={styles.capabilities__infoBoxTitle}>Компании исполнители</h4>
                        <div className={styles.capabilities__infoBoxLogos}>
                            <div className={styles.capabilities__executor} style={{backgroundImage: `url(${executor_1})`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}