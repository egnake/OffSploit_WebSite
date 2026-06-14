import React, { createContext, useState, useContext } from 'react';
import { en } from '../locales/en';
import { tr } from '../locales/tr';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to read preferred language from localStorage, or default to 'en'
  const savedLang = localStorage.getItem('lang') || 'en';
  const [language, setLanguage] = useState(savedLang);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const t = language === 'tr' ? tr : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
