import React, { createContext, useState, useContext } from 'react';

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [language, setLanguage] = useState({ code: 'EN', flag: '🇺🇸' });
  const [currency, setCurrency] = useState({ code: 'USD', symbol: '🪙' });

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, currency, setCurrency }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);