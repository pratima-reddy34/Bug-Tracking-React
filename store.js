import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bugReducer from './bugSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bug: bugReducer,
    user: userReducer,
  },
});

export default store;
