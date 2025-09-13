'use client';

import React, { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';
import { 
  hasGivenConsent, 
  acceptAllCookies, 
  acceptNecessaryOnly,
  setCookieConsent,
  getCookieConsent,
  type CookieConsent 
} from '@/utils/cookies';

interface CookieConsentModalProps {
  onConsentGiven?: (consent: CookieConsent) => void;
}

export const CookieConsentModal: React.FC<CookieConsentModalProps> = ({ 
  onConsentGiven 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Show modal if no consent has been given
    const timer = setTimeout(() => {
      if (!hasGivenConsent()) {
        setIsVisible(true);
      }
    }, 1000); // Delay to not interrupt initial page load

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);
    onConsentGiven?.(getCookieConsent()!);
  };

  const handleAcceptNecessary = () => {
    acceptNecessaryOnly();
    setIsVisible(false);
    onConsentGiven?.(getCookieConsent()!);
  };

  const handleCustomize = () => {
    setCookieConsent({
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    });
    setIsVisible(false);
    onConsentGiven?.(getCookieConsent()!);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
      
      {/* Modal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md">
        <GlassCard variant="default" className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🍪</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-adaptive mb-2">
                We use cookies
              </h3>
              <p className="text-sm text-adaptive-muted leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, 
                and personalize content. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
              </p>
            </div>
          </div>

          {!showDetails ? (
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <GlassButton
                  variant="primary"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="w-full justify-center"
                >
                  Accept All Cookies
                </GlassButton>
                
                <div className="flex gap-2">
                  <GlassButton
                    variant="secondary"
                    size="sm"
                    onClick={handleAcceptNecessary}
                    className="flex-1 justify-center"
                  >
                    Necessary Only
                  </GlassButton>
                  
                  <GlassButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowDetails(true)}
                    className="flex-1 justify-center"
                  >
                    Customize
                  </GlassButton>
                </div>
              </div>

              <p className="text-xs text-adaptive-muted text-center">
                By continuing, you agree to our{' '}
                <a 
                  href="/privacy-policy" 
                  className="text-adaptive-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                {/* Necessary Cookies */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-adaptive/5">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-adaptive">
                      Necessary Cookies
                    </h4>
                    <p className="text-xs text-adaptive-muted">
                      Required for basic site functionality
                    </p>
                  </div>
                  <div className="text-xs text-adaptive-accent font-medium">
                    Always Active
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-adaptive/5">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-adaptive">
                      Analytics Cookies
                    </h4>
                    <p className="text-xs text-adaptive-muted">
                      Help us understand how visitors use our site
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        analytics: e.target.checked
                      }))}
                    />
                    <div className="w-9 h-5 bg-adaptive/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-adaptive-accent"></div>
                  </label>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-adaptive/5">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-adaptive">
                      Marketing Cookies
                    </h4>
                    <p className="text-xs text-adaptive-muted">
                      Used to track visitors and show relevant ads
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        marketing: e.target.checked
                      }))}
                    />
                    <div className="w-9 h-5 bg-adaptive/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-adaptive-accent"></div>
                  </label>
                </div>
              </div>

              <div className="flex gap-2">
                <GlassButton
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="flex-1 justify-center"
                >
                  Back
                </GlassButton>
                
                <GlassButton
                  variant="primary"
                  size="sm"
                  onClick={handleCustomize}
                  className="flex-1 justify-center"
                >
                  Save Preferences
                </GlassButton>
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </>
  );
};