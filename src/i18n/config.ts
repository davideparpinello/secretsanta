import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { fr } from './fr';
import { it } from './it';

export type Translations = typeof en;

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  it: { translation: it },
} satisfies Record<string, { translation: Translations }>;

export const SUPPORTED_LANGUAGES = Object.keys(resources);

i18n
  .use(initReactI18next) // ⬅️ Removed LanguageDetector
  .init({
    resources,
    lng: 'it',           // ⬅️ Default language
    fallbackLng: 'it',   // ⬅️ Fallback is also Italian
    interpolation: {
      escapeValue: false,
    },
  });

// Type augmentation for useTranslation hook
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en'];
  }
}

export default i18n;
