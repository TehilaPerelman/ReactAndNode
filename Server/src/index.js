// // import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { configureStore } from '@reduxjs/toolkit';
// import postsReducer from './Store/postsSlice'; // ייבוא תיקני של הפוסטים

// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// const myStore = configureStore({
//   reducer: {
//     posts: postsReducer, // שינוי מ-RecipeList ל-posts
//   }
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={myStore}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

// // Performance (לא חובה)
// reportWebVitals();
// index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { configureStore } from '@reduxjs/toolkit';
// // import saveReducer from './Store/SaveData';      // ודא שהנתיב תקין
// import postsReducer from './Store/postsSlice';   // ודא שהנתיב תקין

// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// // יצירת ה-store עם שני reducers
// const store = configureStore({
//   reducer: {
//     // save: saveReducer,
//     posts: postsReducer,
//   },
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

// // Performance (לא חובה)
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './Store/postsSlice';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// יצירת ה-store עם reducers
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
