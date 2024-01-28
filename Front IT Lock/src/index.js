import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainProvider from './context/mainProvider';
import { HelmetProvider } from 'react-helmet-async';
import "./assets/scss/reset.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </HelmetProvider>
  </React.StrictMode>
);

