export type Locale = 'es' | 'en' | 'gl';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    inicio: string;
    porQue: string;
    reto: string;
    participantes: string;
    programa: string;
    hackerLog: string;
    impacto: string;
    logistica: string;
    apoyo: string;
    impulsan: string;
    sobre: string;
    contacto: string;
  };
  hero: {
    date: string;
    title: string;
    subtitle: string;
  };
  why: {
    title: string;
    intro1: string;
    intro2: string;
    story: string;
    storyHighlight: string;
    imageAlt: string;
  };
  challenge: {
    title: string;
    subtitle: string;
    description1: string;
    question: string;
    description2: string;
    highlight: string;
    goals: {
      title: string;
      items: string[];
    };
    imageAlt: string;
    imageCaption: string;
  };
  participants: {
    title: string;
    subtitle: string;
    subtitle2: string;
    deadline: string;
    cta: string;
    profiles: Array<{
      title: string;
      description: string;
    }>;
  };
  program: {
    title: string;
    subtitle: string;
    days: Array<{
      day: string;
      title: string;
      description: string;
    }>;
  };
  impact: {
    title: string;
    subtitle: string;
    impacts: Array<{
      title: string;
      description: string;
    }>;
  };
  logistics: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    imageAlt: string;
  };
  support: {
    title: string;
    subtitle: string;
    options: Array<{
      title: string;
      description: string;
      benefits: string[];
      cta?: string;
      ctaUrl?: string;
    }>;
  };
  impulsan: {
    title: string;
    subtitle: string;
    hackerDays: string;
    ruralHackers: string;
    cta: {
      text: string;
      button: string;
    };
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    cta: string;
    imageAlt: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    email: string;
  };
  hackerLog: {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    comingSoon: {
      title: string;
      subtitle: string;
      featuresTitle: string;
      features: Array<{
        icon: string;
        text: string;
      }>;
    };
  };
  footer: {
    description: string;
    copyright: string;
  };
}

export const SUPPORTED_LOCALES: Locale[] = ['es', 'en', 'gl'];

export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  gl: 'Galego'
};

export async function loadTranslations(locale: Locale): Promise<Translations> {
  try {
    const translations = await import(`../locales/${locale}.json`);
    return translations.default;
  } catch (error) {
    console.warn(`Failed to load translations for locale: ${locale}, falling back to default`);
    const defaultTranslations = await import(`../locales/${DEFAULT_LOCALE}.json`);
    return defaultTranslations.default;
  }
}

export function getLocaleFromPath(pathname: string): Locale {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (SUPPORTED_LOCALES.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return DEFAULT_LOCALE;
}

export function getPathForLocale(pathname: string, locale: Locale): string {
  const currentLocale = getLocaleFromPath(pathname);
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
  
  if (locale === DEFAULT_LOCALE) {
    return pathWithoutLocale;
  }
  
  return `/${locale}${pathWithoutLocale}`;
} 