import React from 'react';
import cls from 'classnames';
import home from '../../assets/icons/home.svg';
import chat from '../../assets/icons/chat.svg';
import setting from '../../assets/icons/settings.svg';

import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.navItem}>
        <div className={styles.iconWrapper}>
          <img src={home} />
        </div>
        <span>Home</span>
      </div>
      <div className={cls(styles.navItem, styles.navItemActive)}>
        <div className={styles.iconWrapper}>
          <img src={chat} />
        </div>
        <span>Messages</span>
      </div>
      <div className={styles.navItem}>
        <div className={styles.iconWrapper}>
          <img src={setting} />
        </div>
        <span>Settings</span>
      </div>
    </nav>
  );
};

export default Nav;
