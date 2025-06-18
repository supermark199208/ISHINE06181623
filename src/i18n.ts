import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: [
      'en',    // English
      'de',    // German
      'ja',    // Japanese
      'ar',    // Arabic
      'tr',    // Turkish
      'ru',    // Russian
      'es',    // Spanish
      'fr',    // French
      'pl',    // Polish
      'it',    // Italian
      'pt',    // Portuguese
      'ko',    // Korean
      'nl',    // Dutch
      'no',    // Norwegian
      'ro',    // Romanian
      'hr',    // Croatian
      'cs',    // Czech
      'sk',    // Slovak
      'lb',    // Luxembourgish
      'uk',    // Ukrainian
      'th',    // Thai
      'vi',    // Vietnamese
      'fil',   // Filipino
      'pt-BR', // Brazilian Portuguese
    ],
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      cookieMinutes: 160,
      cookieDomain: window.location.hostname,
    },
  });

export default i18n;