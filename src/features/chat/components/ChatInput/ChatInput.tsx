import type { SyntheticEvent } from 'react';
import React from 'react';
import styles from './ChatInput.module.css';

import send from '../../../../assets/icons/send.svg';

interface IChatInputProps {
  message: string;
  onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
  onInput: (message: string) => void;
}

const ChatInput = ({ message, onInput, onChange }: IChatInputProps) => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onInput(data.get('message') as string);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        value={message}
        name={'message'}
        placeholder={'Type your Message'}
        className={styles.chatInput}
        onChange={onChange}
      />
      <button type={'submit'} className={styles.sendButton}>
        <span>Send</span>
        <img src={send} />
      </button>
    </form>
  );
};

export default ChatInput;
