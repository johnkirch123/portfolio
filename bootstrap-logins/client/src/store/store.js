import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: [reduxThunk],
  preloadedState: {}
});

export default store;
