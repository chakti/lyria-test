import { CometChat } from '@cometchat-pro/chat';

export const getMessages = (uid: string) => {
  const messageRequest = new CometChat.MessagesRequestBuilder()
    .setUID(uid)
    .setLimit(100)
    .build();

  return messageRequest.fetchPrevious();
};

export const sendMessageToCometChat = (message: string) => {
  const textMessage = new CometChat.TextMessage(
    'lyriatestbot',
    message,
    CometChat.RECEIVER_TYPE.USER
  );
  return CometChat.sendMessage(textMessage);
};
