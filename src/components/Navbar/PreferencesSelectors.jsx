import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePreferences } from '../../PreferencesContext'; 
import './PreferencesSelectors.css';

export default function PreferencesSelectors() {
  const { language, setLanguage, currency, setCurrency } = usePreferences();
  const { i18n } = useTranslation(); 
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const changeLanguage = (code, flag) => {
    setLanguage({ code, flag });
    i18n.changeLanguage(code.toLowerCase()); 
    setOpenDropdown(null);
  };

  const changeCurrency = (code, symbol) => {
    setCurrency({ code, symbol });
    setOpenDropdown(null);
  };

  return (
    <div className="preferences-container">
      {/* LANGUAGE */}
      <div className="dropdown-wrapper">
        <button className="pref-btn" onClick={() => toggleDropdown('lang')}>
          <span className="pref-icon">{language.flag}</span>
          <span className="pref-text">{language.code}</span>
          <svg className={`chevron ${openDropdown === 'lang' ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>

        {openDropdown === 'lang' && (
          <div className="dropdown-menu">
            <div onClick={() => changeLanguage('EN', '🇺🇸')}>🇺🇸 EN</div>
            <div onClick={() => changeLanguage('ES', '🇪🇸')}>🇪🇸 ES</div>
            <div onClick={() => changeLanguage('DE', '🇩🇪')}>🇩🇪 DE</div>
          </div>
        )}
      </div>

      {/* CURRENCY - Added "currency-selector" class here */}
      <div className="dropdown-wrapper currency-selector">
        <button className="pref-btn" onClick={() => toggleDropdown('curr')}>
          <span className="pref-icon">{currency.symbol}</span>
          <span className="pref-text">{currency.code}</span>
          <svg className={`chevron ${openDropdown === 'curr' ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>

        {openDropdown === 'curr' && (
          <div className="dropdown-menu">
            <div onClick={() => changeCurrency('USD', '🪙')}>🪙 USD</div>
            <div onClick={() => changeCurrency('EUR', '💶')}>💶 EUR</div>
          </div>
        )}
      </div>
    </div>
  );
}