
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './Store/postsSlice';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
