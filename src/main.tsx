import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './app/store';
import './index.css';
import { CometChat } from '@cometchat-pro/chat';
import { MessageListenerService } from './services/MessageListenerService';

const COMETCHAT_CONSTANTS = {
  APP_ID: '2521454c248d215e',
  REGION: 'EU',
};

//create the builder
const cometChatSettings = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .autoEstablishSocketConnection(true)
  .build();

CometChat.init(COMETCHAT_CONSTANTS.APP_ID, cometChatSettings)
  ?.then(() => {
    console.log('Initialization completed successfully');

    MessageListenerService.init(store);

    const container = document.getElementById('root');

    if (container) {
      const root = createRoot(container);

      root.render(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
      );
    }
  })
  .catch(console.log);
