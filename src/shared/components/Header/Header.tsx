import logo from 'Assets/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../icons/Icon/Icon';
import styles from './header.scss';

export function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  enum EIcon {
    headerCatalogBtnLeftIcon = 'headerCatalogBtnLeftIcon',
    headerCatalogBtnRightIcon = 'headerCatalogBtnRightIcon',
    headerMapIcon = 'headerMapIcon',
    headerOpenIcon = 'headerOpenIcon',
    headerTelegramIcon = 'headerTelegramIcon',
    headerChatsIcon = 'headerChatsIcon',
    headerFavoritesIcon = 'headerFavoritesIcon',
    headerCartIcon = 'headerCartIcon',
    headerLkIcon = 'headerLkIcon'
  }
  
  function openBurgerMenu() {
    setBurgerMenuOpen(!burgerMenuOpen);
  }

  return (
    <header className={styles.header}>
        <div className={`${styles.containerFluid} ${styles.header__container}`}>
            <div className={styles.header__containerLeft}>
                <Link to='/' className={styles.header__logo}>
                  <img className={styles.header__logoImg} src={logo} alt="MetalGO" />
                </Link>
                <button className={`${styles.header__leftBtn} ${styles.catalogBtn}`}>
                    <Icon name={EIcon.headerCatalogBtnLeftIcon} width={22} height={22} />
                    Каталог
                    <Icon name={EIcon.headerCatalogBtnRightIcon} width={10} height={6} />
                </button>
              
                <button className={styles.header__leftBtn}>
                    <Icon name={EIcon.headerMapIcon} width={20} height={20} />
                    Россия
                    <Icon name={EIcon.headerOpenIcon} width={10} height={6} />
                </button>
                <button className={styles.header__leftBtn}>
                    Контакты
                    <Icon name={EIcon.headerOpenIcon} width={10} height={6} />
                </button>
            </div>
            <div className={styles.header__containerCenter}>
                <Link to='/' className={styles.header__mobLogo}>
                  <img className={styles.header__logoImg} src={logo} alt="MetalGO" />
                </Link>
            </div>
            <div className={styles.header__containerRight}>
                <nav className={burgerMenuOpen ? `${styles.header__nav} ${styles.header__mobileMenuOpen}` :  `${styles.header__nav}`}>    
                    <ul className={styles.header__navList}>
                        <li className={styles.header__navListItem}>
                            <a href="#" className={styles.header__navListItemLink}>
                                <Icon name={EIcon.headerTelegramIcon} width={28} height={28} />
                                Заявка
                            </a>
                        </li>
                        <li className={styles.header__navListItem}>
                            <a href="#" className={styles.header__navListItemLink}>
                                <Icon name={EIcon.headerChatsIcon} width={29} height={28} />
                                Чаты
                            </a>
                        </li>
                        <li className={styles.header__navListItem}>
                            <a href="#" className={styles.header__navListItemLink}>
                                <Icon name={EIcon.headerFavoritesIcon} width={28} height={28} />
                                Избранное
                            </a>
                        </li>
                        <li className={styles.header__navListItem}>
                            <a href="#" className={styles.header__navListItemLink}>
                                <Icon name={EIcon.headerCartIcon} width={43} height={28} />
                                Корзина
                            </a>
                        </li>
                        <li className={styles.header__navListItem}>
                            <a href="#" className={styles.header__navListItemLink}>
                                <Icon name={EIcon.headerLkIcon} width={25} height={24} />
                                Кабинет
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className={
                    burgerMenuOpen ? `${styles.header__burgerMenuButton} ${styles.burgerMenuOpen}` :  `${styles.header__burgerMenuButton}` 
                } onClick={openBurgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
  );
}