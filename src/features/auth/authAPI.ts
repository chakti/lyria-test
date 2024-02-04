import { CometChat } from '@cometchat-pro/chat';

export const cometChatLogin = (
  uid: string,
  authToken: string
): Promise<CometChat.User> => {
  return CometChat.login(uid, authToken);
};

export const getLoggedInUser = () => {
  return CometChat.getLoggedinUser();
};
