import React from 'react';
import styles from './Layout.module.css';
import Header from '../Header/Header';
import { Chat } from '../../features/chat/Chat';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.contentWrapper}>
        <Chat />
      </div>
    </div>
  );
};

export default Layout;
