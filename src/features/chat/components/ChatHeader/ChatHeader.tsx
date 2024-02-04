import React from 'react';
import styles from './ChatHeader.module.css';

interface IChatHeaderProps {
  name: string;
  image: string;
}

const ChatHeader = ({ name, image }: IChatHeaderProps) => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.imageWrapper}>
        <img
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFx6kzWPUb4Uv5ENgQNJvf-iP2WtuCoz8gA&usqp=CAU'
          }
        />
      </div>
      <div className={styles.nameWrapper}>{name}</div>
      <div className={styles.priceWrapper}>1 token / min</div>
    </div>
  );
};

export default ChatHeader;
