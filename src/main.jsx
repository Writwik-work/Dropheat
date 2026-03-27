// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n'; 

// Import the provider we just created
import { PreferencesProvider } from './PreferencesContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component */}
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </React.StrictMode>,
);