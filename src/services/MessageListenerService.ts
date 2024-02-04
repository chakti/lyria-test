import { CometChat } from '@cometchat-pro/chat';
import type { AppStore } from '../app/store';
import { pushMessage } from '../features/chat/chatSlice';

export class MessageListenerService {
  static init(store: AppStore) {
    CometChat.addMessageListener(
      'TEXT_MESSAGES_LISTENER',
      new CometChat.MessageListener({
        onTextMessageReceived: (textMessage: CometChat.TextMessage) => {
          store.dispatch(pushMessage(textMessage));
        },
      })
    );
  }
}
