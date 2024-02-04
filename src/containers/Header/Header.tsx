import React from 'react';
import styles from './Header.module.css';
import Logo from '../../components/Logo/Logo';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav />
      <Profile />
    </div>
  );
};

export default Header;
