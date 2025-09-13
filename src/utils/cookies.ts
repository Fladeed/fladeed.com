export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export const COOKIE_CONSENT_KEY = 'fladeed-cookie-consent';
export const COOKIE_CONSENT_VERSION = '1.0';

export const defaultConsent: CookieConsent = {
  necessary: true, // Always true - required for basic functionality
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
};

export const setCookieConsent = (consent: Partial<CookieConsent>): void => {
  const consentData = {
    ...defaultConsent,
    ...consent,
    timestamp: Date.now(),
    version: COOKIE_CONSENT_VERSION,
  };
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    
    // Set a cookie to indicate consent has been given
    document.cookie = `${COOKIE_CONSENT_KEY}=true; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
  }
};

export const getCookieConsent = (): CookieConsent | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    
    // Check if consent is still valid (1 year)
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    if (Date.now() - parsed.timestamp > oneYear) {
      removeCookieConsent();
      return null;
    }
    
    return {
      necessary: parsed.necessary ?? true,
      analytics: parsed.analytics ?? false,
      marketing: parsed.marketing ?? false,
      timestamp: parsed.timestamp,
    };
  } catch {
    return null;
  }
};

export const hasGivenConsent = (): boolean => {
  return getCookieConsent() !== null;
};

export const removeCookieConsent = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    document.cookie = `${COOKIE_CONSENT_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  }
};

export const acceptAllCookies = (): void => {
  setCookieConsent({
    necessary: true,
    analytics: true,
    marketing: true,
  });
};

export const acceptNecessaryOnly = (): void => {
  setCookieConsent({
    necessary: true,
    analytics: false,
    marketing: false,
  });
};

export const canUseAnalytics = (): boolean => {
  const consent = getCookieConsent();
  return consent?.analytics ?? false;
};

export const canUseMarketing = (): boolean => {
  const consent = getCookieConsent();
  return consent?.marketing ?? false;
};