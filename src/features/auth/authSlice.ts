import { CometChat } from '@cometchat-pro/chat';
import { createAppSlice } from '../../app/createAppSlice';
import { getLoggedInUser, cometChatLogin } from './authAPI';

export interface AuthSliceState {
  user: null | CometChat.User;
  status: 'loading' | 'idle' | 'failed';
}

const initialState: AuthSliceState = {
  user: null,
  status: 'idle',
};

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: create => ({
    login: create.asyncThunk(
      async (uid: string) => {
        const loggedInUser = await getLoggedInUser();
        if (loggedInUser) {
          return loggedInUser;
        }

        const user = await cometChatLogin(
          uid,
          'c1447e476e3ea2d6be50041b5c1d30a7781c0713'
        );

        return user;
      },
      {
        pending: state => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          state.user = action.payload;
        },
        rejected: state => {
          state.status = 'failed';
        },
      }
    ),
  }),
  selectors: {
    selectUser: chat => chat.user,
    selectStatus: chat => chat.status,
  },
});

export const { login } = authSlice.actions;

export const { selectUser, selectStatus } = authSlice.selectors;
