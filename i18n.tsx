import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './public/locales/en/en.json';
import hi from './public/locales/hi/hi.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    jp: {
      translation: hi,
    },
  },
  lng: localStorage.getItem('lng') || 'en',
});
