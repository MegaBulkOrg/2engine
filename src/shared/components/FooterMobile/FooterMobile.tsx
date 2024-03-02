import React from 'react';
import { Icon } from '../icons/Icon/Icon';
import { EIcon } from '../icons/enums';
import styles from './footermobile.scss';

export function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.containerFluid} ${styles.footer__container}`}>
        <nav className={styles.footer__nav}>    
            <ul className={styles.footer__navList}>
                <li className={styles.footer__navIListItem}>
                    <a href="#" className={styles.footer__navListItemLink}>
                        <Icon name={EIcon.footerMobileCatalogIcon} />
                        Каталог
                    </a>
                </li>
                <li className={styles.footer__navIListItem}>
                    <a href="#" className={styles.footer__navListItemLink}>
                        <Icon name={EIcon.footerMobileCartIcon} />
                        Корзина
                    </a>
                </li>
                <li className={styles.footer__navIListItem}>
                    <a href="#" className={styles.footer__navListItemLink}>
                        <Icon name={EIcon.footerMobileRequestsIcon} />
                        Запросы
                    </a>
                </li>
                <li className={styles.footer__navIListItem}>
                    <a href="#" className={styles.footer__navListItemLink}>
                        <Icon name={EIcon.footerMobileChatsIcon} />
                        Чаты
                    </a>
                </li>
                <li className={styles.footer__navIListItem}>
                    <a href="#" className={styles.footer__navListItemLink}>
                        <Icon name={EIcon.footerMobileLkIcon} />
                        Кабинет
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    </footer>
  );
}