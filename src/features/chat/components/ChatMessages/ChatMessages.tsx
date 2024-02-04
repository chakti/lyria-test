import React, { useEffect, useRef } from 'react';
import type { CometChat } from '@cometchat-pro/chat';
import cls from 'classnames';
import styles from './ChatMessages.module.css';

interface IChatMessagesProps {
  messages: CometChat.TextMessage[];
}

const ChatMessages = ({ messages }: IChatMessagesProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current?.scrollHeight;
    }
  }, [messages.length]);

  return (
    <div ref={container} className={styles.chatMessages}>
      {messages.map(message => (
        <div
          key={message.getId()}
          className={cls(styles.message, {
            [styles.inbox]: message.getSender().getUid() !== 'superhero1',
          })}
        >
          <div className={styles.user}>
            <span className={styles.name}>{message.getSender().getName()}</span>
            <div className={styles.avatar}>
              <img src={message.getSender().getAvatar()} />
            </div>
          </div>
          <div className={styles.messageText}>{message.getData().text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
