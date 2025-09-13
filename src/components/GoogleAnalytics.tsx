'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { canUseAnalytics } from '@/utils/cookies';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    // Initialize GA with consent mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: canUseAnalytics() ? 'granted' : 'denied',
        functionality_storage: 'granted',
        personalization_storage: 'denied',
        security_storage: 'granted',
        wait_for_update: 500,
      });

      // Configure GA
      window.gtag('config', measurementId, {
        send_page_view: canUseAnalytics(),
        anonymize_ip: true,
        allow_google_signals: canUseAnalytics(),
        allow_ad_personalization_signals: false,
      });
    }
  }, [measurementId]);

  const handleConsentUpdate = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: canUseAnalytics() ? 'granted' : 'denied',
      });
    }
  };

  useEffect(() => {
    // Listen for consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'fladeed-cookie-consent') {
        handleConsentUpdate();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Only load GA scripts if analytics are allowed
  if (!canUseAnalytics()) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
    </>
  );
};

// Helper function to track events with consent check
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag && canUseAnalytics()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Helper function to track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag && canUseAnalytics()) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_location: url,
      page_title: title,
    });
  }
};

// Type declarations for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}