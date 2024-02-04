import React from 'react';
import styles from './Logo.module.css';
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img alt={'logo'} className={styles.logo} src={logo} />
    </div>
  );
};

export default Logo;
