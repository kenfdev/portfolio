import { translations, type Language, type TranslationKey } from './translations';

export function getTranslations(lang: Language): TranslationKey {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ja') return 'ja';
  return 'en';
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove existing language prefix if present
  const cleanPath = path.replace(/^\/(en|ja)/, '');
  return `/${lang}${cleanPath || ''}`;
}
