// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav_auth": "Authorization",
      "nav_chat": "Chat"
    }
  },
  es: {
    translation: {
      "nav_auth": "Autorización",
      "nav_chat": "Chat"
    }
  },
  de: {
    translation: {
      "nav_auth": "Autorisierung",
      "nav_chat": "Plaudern"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "EN", 
    fallbackLng: "EN",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;