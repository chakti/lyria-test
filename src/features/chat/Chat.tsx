import React, { useEffect, useState } from 'react';
import type { CometChat } from '@cometchat-pro/chat';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMessageHistory, selectMessages, sendMessage } from './chatSlice';
import ChatHeader from './components/ChatHeader/ChatHeader';
import ChatMessages from './components/ChatMessages/ChatMessages';
import ChatInput from './components/ChatInput/ChatInput';

export const Chat = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages) as CometChat.TextMessage[];
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(fetchMessageHistory('lyriatestbot'));
  }, []);

  const handleInput = (message: string) => {
    if (message) {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <>
      <ChatHeader name={'lyria-test-bot'} image={'sdf'} />
      <ChatMessages messages={messages} />
      <ChatInput
        message={message}
        onChange={e => setMessage(e.currentTarget.value)}
        onInput={handleInput}
      />
    </>
  );
};
