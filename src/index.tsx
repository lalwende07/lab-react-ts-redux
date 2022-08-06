import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(

  <React.StrictMode>
    <Provider store={store}>
     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

      <App />
    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
