import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersSlice.reducer, // Add the users reducer to the store
  },
});

export default store;
