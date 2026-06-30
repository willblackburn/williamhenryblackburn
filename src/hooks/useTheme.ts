'use client';

import { useCallback, useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme =
      document.documentElement.getAttribute('data-theme') ||
      localStorage.getItem('theme') ||
      'dark';
    setIsDark(theme === 'dark');
  }, []);

  const toggleTheme = useCallback((checked: boolean) => {
    const theme = checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setIsDark(checked);
  }, []);

  return { isDark, toggleTheme };
}
