import type { CometChat } from '@cometchat-pro/chat';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../app/createAppSlice';
import { getMessages, sendMessageToCometChat } from './chatAPI';

export interface ChatSliceState {
  messages: CometChat.TextMessage[];
  historyStatus: 'loading' | 'idle' | 'failed';
  sendMessageStatus: 'loading' | 'idle' | 'failed';
}

const initialState: ChatSliceState = {
  messages: [],
  historyStatus: 'idle',
  sendMessageStatus: 'idle',
};

export const chatSlice = createAppSlice({
  name: 'chat',
  initialState,
  reducers: create => ({
    pushMessage: create.reducer(
      (state, action: PayloadAction<CometChat.TextMessage>) => {
        state.messages.push(action.payload);
      }
    ),
    fetchMessageHistory: create.asyncThunk(
      async (uid: string) => {
        return await getMessages(uid);
      },
      {
        pending: state => {
          state.historyStatus = 'loading';
        },
        fulfilled: (state, action) => {
          state.historyStatus = 'idle';
          state.messages = action.payload as CometChat.TextMessage[];
        },
        rejected: (state, action) => {
          state.historyStatus = 'failed';
        },
      }
    ),
    sendMessage: create.asyncThunk(
      async (message: string) => {
        return await sendMessageToCometChat(message);
      },
      {
        pending: state => {
          state.sendMessageStatus = 'loading';
        },
        fulfilled: (state, action) => {
          state.sendMessageStatus = 'idle';
          state.messages.push(action.payload as CometChat.TextMessage);
        },
        rejected: (state, action) => {
          state.sendMessageStatus = 'failed';
        },
      }
    ),
  }),
  selectors: {
    selectMessages: chat => chat.messages,
    selectHistoryStatus: chat => chat.historyStatus,
  },
});

export const { fetchMessageHistory, sendMessage, pushMessage } =
  chatSlice.actions;

export const { selectMessages, selectHistoryStatus } = chatSlice.selectors;
