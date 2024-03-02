import engineLogo from 'Assets/engine_logo.png';
import logo from 'Assets/logo.png';
import sberLogo from 'Assets/sberbank_logo.png';
import telegramLogo from 'Assets/telegram_logo.png';
import yookassaLogo from 'Assets/yookassa_logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../icons/Icon/Icon';
import { EIcon } from '../icons/enums';
import styles from './footerdesktop.scss';

export function FooterDesktop() {  
  return (
    <footer className={styles.footer}>
      <div className={`${styles.containerFluid} ${styles.footer__container}`}>
          <div className={styles.footer__up}>
            <div className={styles.footer__upLeft}>
                <Link to='/' className={styles.footer__logo}>
                  <img className={styles.footer__logoImg} src={logo} alt="MetalGO" />
                </Link>
            </div>
            <ul className={styles.footer__contactsList}>
              <li className={styles.footer__contactsListItem}>
                <Link to='#' className={styles.footer__contactsListItemLink}>
                  <Icon name={EIcon.footerPhoneIcon} />
                  <p>8 800 216-03-73</p>
                </Link>
              </li>
              <li className={styles.footer__contactsListItem}>
                <Link to='#' className={styles.footer__contactsListItemLink}>
                  <Icon name={EIcon.footerEmailIcon} />
                  <p>hello@metalgo.biz</p>
                </Link>
              </li>
              <li className={styles.footer__contactsListItem}>
                <Link to='#' className={styles.footer__contactsListItemLink}>
                  <Icon name={EIcon.footerChatIcon} />
                  <p>Чат с поддержкой</p>
                </Link>
              </li>
            </ul>
            <Link to='/' className={styles.footer__telegramLogo}>
              <img className={styles.footer__telegramImg} src={telegramLogo} alt="MetalGO" />
            </Link>
          </div>
          <div className={styles.footer__down}>
            <div className={styles.footer__downLeft}>
              <p className={styles.footer__copyright}>2020 — 2023 © ООО «МеталГо». Все права защищены.</p>
              <p className={styles.footer__copyright}>ИНН 7814652255</p>
            </div>
            <div className={styles.footer__downRight}>
              <nav className={styles.footer__nav}>
                <ul className={styles.footer__navList}>
                  <li className={styles.footer__navListItem}>
                    <Link to='#' className={styles.footer__navListItemLink}>
                      <p>Покупателям →</p>
                    </Link>
                  </li>
                  <li className={styles.footer__navListItem}>
                    <Link to='#' className={styles.footer__navListItemLink}>
                      <p>Тарифы →</p>
                    </Link>
                  </li>
                  <li className={styles.footer__navListItem}>
                    <Link to='#' className={styles.footer__navListItemLink}>
                      <p>Справочник металлопроката →</p>
                    </Link>
                  </li>
                  <li className={styles.footer__navListItem}>
                    <Link to='#' className={styles.footer__navListItemLink}>
                      <p>Статистика цен металлопроката →</p>
                    </Link>
                  </li>
                  <li className={styles.footer__navListItem}>
                    <Link to='#' className={styles.footer__navListItemLink}>
                      <p>Поставщикам →</p>
                    </Link>
                  </li>
                  <li className={styles.footer__navListItem}>
                    <Link to='#' className={styles.footer__navListItemLink}>
                      <p>Калькулятор металла →</p>
                    </Link>
                  </li>
                  <li className={styles.footer__navListItem}>
                    <Link to='#' className={styles.footer__navListItemLink}>
                      <p>Калькулятор доставки →</p>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.footer__navListGray}>
                  <li className={styles.footer__navListGrayItem}>
                    <Link to='#' className={styles.footer__navListGrayItemLink}>
                      <p>Публичная оферта →</p>
                    </Link>
                  </li>
                  <li className={styles.footer__navListGrayItem}>
                    <Link to='#' className={styles.footer__navListGrayItemLink}>
                      <p>Правила пользования →</p>
                    </Link>
                  </li>
                  <li className={styles.footer__navListGrayItem}>
                    <ul className={styles.footer__logosList}>
                      <li className={styles.footer__logosListItem}>
                          <Link to='#' className={styles.footer__logosListItemLink}>
                            <img className={styles.footer__logosListItemImg} src={yookassaLogo} height={20} alt="Ю Касса" />
                          </Link>
                          <Link to='#' className={styles.footer__logosListItemLink}>
                            <img className={styles.footer__logosListItemImg} src={sberLogo} height={20} alt="Сбербанк" />
                          </Link>
                          <Link to='#' className={styles.footer__logosListItemLink}>
                            <img className={styles.footer__logosListItemImg} src={engineLogo} height={20} alt="Engine" />
                          </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </div>
    </footer>
  );
}