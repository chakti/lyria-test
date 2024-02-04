import './reset.css';
import './App.css';
import React, { useEffect } from 'react';
import { Chat } from './features/chat/Chat';
import { login, selectStatus, selectUser } from './features/auth/authSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Layout from './containers/Layout/Layout';

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(login('superhero1'));
  }, []);

  return (
    <div className="App">
      {status === 'idle' && user && <Layout />}
      {status === 'loading' && <p>Loading...</p>}
    </div>
  );
};

export default App;
