import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AlertContextProvider } from './contexts/AlertContexts/AlertContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertContextProvider>
      <App />
    </AlertContextProvider>
  </React.StrictMode>,
)
