import koMessages from '../../messages/ko.json';
import enMessages from '../../messages/en.json';

export type Locale = 'ko' | 'en';

export const locales: readonly Locale[] = ['ko', 'en'] as const;

export const defaultLocale: Locale = 'ko';

type Messages = Record<string, unknown>;

const messages: Record<Locale, Messages> = {
  ko: koMessages as Messages,
  en: enMessages as Messages,
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] || messages[defaultLocale];
}

export function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce((current, key) => {
    if (current && typeof current === 'object' && current !== null && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function translateMessage(
  messages: Messages,
  key: string,
  fallbackKey?: string
): string {
  let value = getNestedValue(messages, key);
  
  if (value === undefined && fallbackKey) {
    value = getNestedValue(messages, fallbackKey);
  }
  
  if (value === undefined) {
    console.warn(`Missing translation for key: ${key}`);
    return key;
  }
  
  return typeof value === 'string' ? value : JSON.stringify(value);
}

export function getBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  
  const browserLang = navigator.language.split('-')[0];
  return locales.includes(browserLang as Locale) ? (browserLang as Locale) : defaultLocale;
}

export function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  
  const stored = localStorage.getItem('locale');
  return stored && locales.includes(stored as Locale) ? (stored as Locale) : getBrowserLocale();
}

export function setStoredLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('locale', locale);
} 