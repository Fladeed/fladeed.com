'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      );
    } else if (theme === 'dark') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      );
    } else {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      );
    }
  };

  const getLabel = () => {
    if (theme === 'light') {
      return 'Light mode';
    } else if (theme === 'dark') {
      return 'Dark mode';
    } else {
      return 'System theme';
    }
  };

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return (
      <div className="p-2 glass rounded-lg w-[42px] h-[42px] flex items-center justify-center opacity-0">
        <div className="w-[18px] h-[18px]"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 glass rounded-lg hover:glass-hover transition-all duration-300 group text-adaptive"
      title={getLabel()}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
    >
      <div className="group-hover:scale-110 transition-transform duration-300">
        {getIcon()}
      </div>
    </button>
  );
};
