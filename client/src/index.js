import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state';
import { Provider } from 'react-redux';

// Create a store with the global reducer
const store = configureStore({
  reducer: globalReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      
    </Provider>
  </React.StrictMode>
);
