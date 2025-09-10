'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Get initial theme from DOM on mount
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    const isDark = root.classList.contains('dark');
    
    setTheme(savedTheme);
    setResolvedTheme(isDark ? 'dark' : 'light');
    setMounted(true);
  }, []);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    
    let resolvedTheme: 'light' | 'dark';
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      resolvedTheme = systemTheme;
    } else {
      root.classList.add(newTheme);
      resolvedTheme = newTheme as 'light' | 'dark';
    }
    
    setResolvedTheme(resolvedTheme);
  };

  useEffect(() => {
    if (!mounted) return;
    
    // Listen for system theme changes when using system theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        const systemTheme = e.matches ? 'dark' : 'light';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(systemTheme);
        setResolvedTheme(systemTheme);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
