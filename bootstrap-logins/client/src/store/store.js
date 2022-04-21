import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import reducer from '../reducers';

const store = configureStore({
  reducer,
  middleware: [applyMiddleware],
  preloadedState: {}
});

export default store;
