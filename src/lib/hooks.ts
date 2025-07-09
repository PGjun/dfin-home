'use client';

import { useLanguage } from './LanguageContext';
import { getMessages, translateMessage, getNestedValue, Locale } from './i18n';

export function useTranslations(namespace?: string) {
  const { locale } = useLanguage();
  const messages = getMessages(locale);

  const t = (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return translateMessage(messages, fullKey);
  };

  // Add raw function for array access
  t.raw = (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const value = getNestedValue(messages, fullKey);
    if (Array.isArray(value)) {
      return value;
    }
    return value;
  };

  return t;
}

export function useLocale(): Locale {
  const { locale } = useLanguage();
  return locale;
}

export function useSetLocale() {
  const { setLocale } = useLanguage();
  return setLocale;
} 